import { NextPage } from 'next'
import ProtectedRoute from '../components/protected'

const ShoppingCart: NextPage = (): JSX.Element => {
	return (
		<ProtectedRoute>
			<div>
				<h1>ShoppingCart</h1>
			</div>
		</ProtectedRoute>
	)
}

export default ShoppingCart

// Language: typescript
