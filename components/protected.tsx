import Link from 'next/link'
import { useRouter } from 'next/router'
import { ReactNode } from 'react'
import { useAuth } from '../contexts/Auth'

interface _ProtectedRouteProps {
	children: ReactNode
}

const ProtectedRoute = ({ children }: _ProtectedRouteProps) => {
	const { user, session } = useAuth()
	const router = useRouter()

	if (!user || !session) {
		router.push('/login')
	}

	return <div>{children}</div>
}

export default ProtectedRoute

// Language: typescript
