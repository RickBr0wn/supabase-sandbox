import { NextPage } from 'next'
import ProtectedRoute from '../components/protected'
import { useAuth } from '../contexts/Auth'

type Props = {}

const Dashboard: NextPage<Props> = (): JSX.Element => {
	const { user, session } = useAuth()

	console.log('session:', session)
	return (
		<ProtectedRoute>
			<div>
				<h1>Dashboard</h1>
			</div>
		</ProtectedRoute>
	)
}

export default Dashboard

// Language: typescript
