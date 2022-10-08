import ProtectedRoute from '../components/protected'

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
