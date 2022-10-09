import Link from 'next/link'
import { useRouter } from 'next/router'
import { useEffect, useRef, useState } from 'react'
import { useAuth } from '../contexts/Auth'

const LogIn = (): JSX.Element => {
	const emailRef = useRef<HTMLInputElement>(null)
	const passwordRef = useRef<HTMLInputElement>(null)
	const [error, setError] = useState<string>('')
	const [push, setPush] = useState<boolean>(false)
	const { signIn } = useAuth()
	const router = useRouter()

	useEffect(() => {
		if (push) {
			router.push('/dashboard')
		}
	}, [push, router])

	const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault()

		if (emailRef.current && emailRef.current?.value.length < 6) {
			return setError('Email must be at least 6 characters')
		}

		if (passwordRef.current && passwordRef.current.value.length < 6) {
			return setError('Password must be at least 6 characters')
		}

		try {
			const { user, session, error } = await signIn(
				emailRef.current!.value,
				passwordRef.current!.value
			)

			emailRef.current!.value = ''
			passwordRef.current!.value = ''

			if (!session || !user) {
				return setError("You don't have an account, please sign up")
			}

			setPush(true)
		} catch (error) {
			setError('Failed to create an account')
		}
	}

	return (
		<div>
			<h1>LogIn</h1>
			<form
				onSubmit={handleSubmit}
				style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}
			>
				<input type='email' ref={emailRef} required />
				<input type='password' ref={passwordRef} required />
				<button type='submit'>Log In</button>
			</form>
			{error ? (
				<p style={{ opacity: 1, color: 'red' }}>{error}</p>
			) : (
				<p style={{ opacity: 0 }}>unknown</p>
			)}
			<p>
				Don&apos;t have an account? <Link href='/signup'>Sign up</Link>
			</p>
			<p>
				Forgotten your password? <Link href='/reset'>Reset</Link>
			</p>
		</div>
	)
}

export default LogIn

// Language: typescript
