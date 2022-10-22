import { NextPage } from 'next'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useEffect, useRef, useState } from 'react'
import { useAuth } from '../contexts/Auth'

const LogIn: NextPage = (): JSX.Element => {
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
		<div className='mt-14 flex flex-col justify-center items-center'>
			<h1 className='text-3xl font-bold'>Welcome back</h1>
			<div className='border-2 p-4 rounded-md mx-4 max-w-xl mt-10'>
				<form
					onSubmit={handleSubmit}
					className='flex flex-col items-center gap-4'
				>
					<input
						className='border-2 w-full'
						type='email'
						ref={emailRef}
						required
					/>
					<input
						className='border-2 w-full'
						type='password'
						ref={passwordRef}
						required
					/>
					<button className='border-2 w-full' type='submit'>
						Log In
					</button>
				</form>
				{error ? (
					<p style={{ opacity: 1, color: 'red' }}>{error}</p>
				) : (
					<p style={{ opacity: 0 }}>unknown</p>
				)}
				<div className='text-xs w-full flex flex-col justify-center items-center gap-2'>
					<Link href='/signup'>
						<span className='text-blue-500 underline cursor-pointer'>
							Don&apos;t have an account?
						</span>
					</Link>

					<Link href='/reset'>
						<span className='text-blue-500 underline cursor-pointer'>
							Forgotten your password?
						</span>
					</Link>
				</div>
			</div>
		</div>
	)
}

export default LogIn

// Language: typescript
