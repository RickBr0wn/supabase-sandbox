import { NextPage } from 'next'
import ProductEntry from '../components/product-entry'
import ProductList from '../components/product-list'
import ProtectedRoute from '../components/protected'
import { useAuth } from '../contexts/Auth'

type Props = {}

const Dashboard: NextPage<Props> = (): JSX.Element => {
	const { user, session } = useAuth()

	console.log('session:', session)
	return (
		<ProtectedRoute>
			<div>
				<ProductList />
				<ProductEntry  />
			</div>
		</ProtectedRoute>
	)
}

export default Dashboard

// Language: typescript
