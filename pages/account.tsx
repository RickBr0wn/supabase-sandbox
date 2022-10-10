import ProtectedRoute from '../components/protected'

const Account = () => {
	return (
		<ProtectedRoute>
			<div>
				<h1>Account</h1>
			</div>
		</ProtectedRoute>
	)
}

export default Account

// Language: typescript
