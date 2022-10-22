import { NextPage } from 'next'
import ProtectedRoute from '../components/protected'

type Props = {
	data: any
}

const Account: NextPage<Props> = ({ data }): JSX.Element => {
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
