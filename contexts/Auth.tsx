import { ApiError, PostgrestError, Session, User } from '@supabase/supabase-js'
import {
	createContext,
	FC,
	ReactNode,
	useContext,
	useEffect,
	useState
} from 'react'
import { supabase } from '../lib/superbase'

type AuthContext = {
	user: User | null
	session: Session | null
	loading: boolean
	forgotPassword: (email: string) => Promise<ApiError | null>
	signUp: (email: string, password: string) => Promise<AuthResponse>
	signIn: (email: string, password: string) => Promise<AuthResponse>
	signOut: () => Promise<ApiError | null>
}

type AuthResponse = {
	user: User | null
	session: Session | null
	error: ApiError | PostgrestError | null
}

const AuthContext = createContext({} as AuthContext)

export function useAuth(): AuthContext {
	const context = useContext(AuthContext)

	if (!context) {
		throw new Error('useAuth must be used within an AuthProvider')
	}

	return context
}

type Props = {
	children: ReactNode
}

export const AuthProvider: FC<Props> = ({ children }) => {
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

	/**
	 * Sign up a new user with email and password
	 * @param email
	 * @param password
	 * @returns *Promise* AuthResponse
	 */
	const signUp = async (
		email: string,
		password: string
	): Promise<AuthResponse> => {
		setLoading(true)
		const { user, session, error } = await supabase.auth.signUp({
			email,
			password
		})

		if (error) {
			return { user, session, error }
		}

		const { data: _profile, error: databaseError } = await supabase
			.from('users')
			.insert([
				{
					id: user?.id,
					created_at: new Date().toISOString(),
					email: user?.email,
					last_logged_in_at: new Date().toISOString()
				}
			])

		if (databaseError) {
			return { user, session, error: databaseError }
		}

		setLoading(false)
		return { user, session, error }
	}

	/**
	 * Sign in an existing user with email and password
	 * @param email
	 * @param password
	 * @returns *Promise* AuthResponse
	 * */
	const signIn = async (
		email: string,
		password: string
	): Promise<AuthResponse> => {
		setLoading(true)
		const { user, session, error } = await supabase.auth.signIn({
			email,
			password
		})

		const { data: _profile, error: databaseError } = await supabase
			.from('users')
			.update({
				last_logged_in_at: new Date(Date.now()).toISOString()
			})
			.eq('id', user?.id)

		if (databaseError) {
			return { user, session, error: databaseError }
		}

		setLoading(false)
		return { user, session, error }
	}

	/**
	 * Sign out the current user
	 * @returns *Promise* ApiError | null
	 * */
	const signOut = async (): Promise<ApiError | null> => {
		setLoading(true)
		const { error } = await supabase.auth.signOut()
		setLoading(false)
		return error
	}

	/**
	 * Send a password reset email to the user
	 * @param email
	 * @returns *Promise* ApiError | null
	 * */
	const forgotPassword = async (email: string): Promise<ApiError | null> => {
		setLoading(true)
		const { error } = await supabase.auth.api.resetPasswordForEmail(email)
		setLoading(false)
		return error
	}

	const value: AuthContext = {
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
