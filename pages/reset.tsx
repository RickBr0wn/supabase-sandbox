import { NextPage } from 'next'
import Link from 'next/link'
import { useState } from 'react'
import ProtectedRoute from '../components/protected'
import { useAuth } from '../contexts/Auth'

const ResetPassword: NextPage = (): JSX.Element => {
	const [error, setError] = useState<string | null>(null)
	const [success, setSuccess] = useState<string | null>(null)
	const [loading, setLoading] = useState<boolean>(false)
	const [email, setEmail] = useState<string | null>(null)

	const { forgotPassword } = useAuth()

	const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault()
		setLoading(true)
		setError('')
		setSuccess('')

		try {
			const error = await forgotPassword(email!)

			if (error) {
				throw error
			}

			setSuccess('Check your email for further instructions')
		} catch (error: any) {
			setError(error.error_description || error.message)
		} finally {
			setLoading(false)
		}
	}

	return (
		<ProtectedRoute>
			<h1>Reset Password</h1>
			<form
				onSubmit={handleSubmit}
				style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}
			>
				<input
					type='email'
					placeholder='Email'
					value={email || ''}
					onChange={e => setEmail(e.target.value)}
					required
				/>
				<button type='submit' disabled={loading}>
					Reset Password
				</button>
			</form>

			{error ? (
				<p style={{ color: 'red', opacity: 1 }}>{error}</p>
			) : (
				<p style={{ opacity: 0 }}>unknown</p>
			)}
			{success ? (
				<p style={{ color: 'green', opacity: 1 }}>{success}</p>
			) : (
				<p style={{ opacity: 0 }}>unknown</p>
			)}

			<Link href='/login'>
				<a>Back to login</a>
			</Link>
		</ProtectedRoute>
	)
}

export default ResetPassword

// Language: typescript
