import { useRouter } from 'next/router'
import { FC, ReactNode, useEffect } from 'react'
import { useAuth } from '../contexts/Auth'

type Props = {
	children: ReactNode
}

const ProtectedRoute: FC<Props> = ({ children }) => {
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
