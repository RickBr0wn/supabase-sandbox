import Link from 'next/link'
import { useRouter } from 'next/router'
import { useEffect, useRef, useState } from 'react'
import { useAuth } from '../contexts/Auth'

const SignUp = (): JSX.Element => {
	const emailRef = useRef<HTMLInputElement>(null)
	const passwordRef = useRef<HTMLInputElement>(null)
	const passwordConfirmRef = useRef<HTMLInputElement>(null)
	const [error, setError] = useState<string>('')
	const [push, setPush] = useState<boolean>(false)
	const router = useRouter()

	const { signUp, user } = useAuth()

	useEffect(() => {
		if (push) {
			router.push('/email-verification')
		}
	}, [push, router])

	const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault()
		setError('')

		if (passwordRef.current?.value !== passwordConfirmRef.current?.value) {
			return setError('Passwords do not match')
		}

		if (emailRef.current && emailRef.current?.value.length < 6) {
			return setError('Email must be at least 6 characters')
		}

		if (passwordRef.current && passwordRef.current.value.length < 6) {
			return setError('Password must be at least 6 characters')
		}

		try {
			const { user, session, error } = await signUp(
				emailRef.current!.value,
				passwordRef.current!.value
			)

			emailRef.current!.value = ''
			passwordRef.current!.value = ''
			passwordConfirmRef.current!.value = ''

			if (!error) {
				setPush(true)
			}
		} catch (error) {
			setError('Failed to create an account')
		}
	}

	return (
		<div>
			<h1>SignUp</h1>

			<form
				onSubmit={handleSubmit}
				style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}
			>
				<input type='email' placeholder='email' ref={emailRef} required />
				<input
					type='password'
					placeholder='password'
					ref={passwordRef}
					required
				/>
				<input
					type='password'
					placeholder='confirm password'
					ref={passwordConfirmRef}
					required
				/>
				<button type='submit'>Sign Up</button>
			</form>
			{error ? (
				<p style={{ opacity: 1, color: 'red' }}>{error}</p>
			) : (
				<p style={{ opacity: 0 }}>unknown</p>
			)}
			<p>
				Already have an account? <Link href='/login'>Log In</Link>
			</p>
		</div>
	)
}

export default SignUp

// Language: typescript
