import Link from 'next/link'
import { ReactNode } from 'react'
import { useAuth } from '../contexts/Auth'

interface _ProtectedRouteProps {
	children: ReactNode
}

const ProtectedRoute = ({ children }: _ProtectedRouteProps) => {
	const { user, session } = useAuth()

	if (!user || !session) {
		return (
			<div>
				<h1>Not authorized</h1>
				<p>You must be signed in to view this page. </p>
				<div
					style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}
				>
					<Link href={'/login'}>Log in</Link>
					<Link href={'/signup'}>Sign up</Link>
				</div>
			</div>
		)
	}

	return <div>{children}</div>
}

export default ProtectedRoute

// Language: typescript
