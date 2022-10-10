import { useRouter } from 'next/router'
import { ReactNode, useEffect } from 'react'
import { useAuth } from '../contexts/Auth'

interface _ProtectedRouteProps {
	children: ReactNode
}

const ProtectedRoute = ({ children }: _ProtectedRouteProps) => {
	const { user, session } = useAuth()
	const router = useRouter()

	useEffect(() => {
		if (!user || !session) {
			router.push('/')
		}
	}, [user, session, router])

	return <div>{children}</div>
}

export default ProtectedRoute

// Language: typescript
