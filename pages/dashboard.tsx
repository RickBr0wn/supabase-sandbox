import ProtectedRoute from '../components/protected'
import { useAuth } from '../contexts/Auth'
import { supabase } from '../lib/superbase'

const Dashboard = (): JSX.Element => {
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
