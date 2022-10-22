import { NextPage } from 'next'
import ProtectedRoute from '../components/protected'

const Orders: NextPage = (): JSX.Element => {
	return (
		<ProtectedRoute>
			<div>
				<h1>Orders</h1>
			</div>
		</ProtectedRoute>
	)
}

export default Orders

// Language: typescript
