import { ApiError, Session, User } from '@supabase/supabase-js'
import {
	createContext,
	ReactNode,
	useContext,
	useEffect,
	useState
} from 'react'
import { supabase } from '../lib/superbase'

interface _AuthContext {
	user: User | null
	session: Session | null
	loading: boolean
	forgotPassword: (email: string) => Promise<ApiError | null>
	signUp: (email: string, password: string) => Promise<_AuthResponse>
	signIn: (email: string, password: string) => Promise<_AuthResponse>
	signOut: () => Promise<ApiError | null>
}

interface _AuthProviderProps {
	children: ReactNode
}

interface _AuthResponse {
	user: User | null
	session: Session | null
	error: ApiError | null
}

const AuthContext = createContext({} as _AuthContext)

export function useAuth(): _AuthContext {
	const context = useContext(AuthContext)

	if (!context) {
		throw new Error('useAuth must be used within an AuthProvider')
	}

	return context
}

export const AuthProvider = ({ children }: _AuthProviderProps) => {
	const [user, setUser] = useState<User | null>(null)
	const [session, setSession] = useState<Session | null>(null)
	const [loading, setLoading] = useState<boolean>(true)

	useEffect(() => {
		const session = supabase.auth.session()
		setUser(session?.user ?? null)
		setSession(session)
		setLoading(false)
	}, [])

	useEffect(() => {
		const { data: authListener } = supabase.auth.onAuthStateChange(
			(_event, session) => {
				setUser(session?.user ?? null)
				setSession(session)
			}
		)

		return () => {
			authListener?.unsubscribe()
		}
	}, [])

	const signUp = async (
		email: string,
		password: string
	): Promise<_AuthResponse> => {
		setLoading(true)
		const { user, session, error } = await supabase.auth.signUp({
			email,
			password
		})

		setLoading(false)
		return { user, session, error }
	}

	const signIn = async (
		email: string,
		password: string
	): Promise<_AuthResponse> => {
		setLoading(true)
		const { user, session, error } = await supabase.auth.signIn({
			email,
			password
		})
		setLoading(false)
		return { user, session, error }
	}

	const signOut = async (): Promise<ApiError | null> => {
		setLoading(true)
		const { error } = await supabase.auth.signOut()
		setLoading(false)
		return error
	}

	const forgotPassword = async (email: string): Promise<ApiError | null> => {
		setLoading(true)
		const { error } = await supabase.auth.api.resetPasswordForEmail(email)
		setLoading(false)
		return error
	}

	const value = {
		user,
		session,
		loading,
		forgotPassword,
		signUp,
		signIn,
		signOut
	}

	return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}
