import { NextPage } from 'next'
import ProtectedRoute from '../components/protected'

const WishList: NextPage = (): JSX.Element => {
	return (
		<ProtectedRoute>
			<div>
				<h1>WishList</h1>
			</div>
		</ProtectedRoute>
	)
}

export default WishList

// Language: typescript
