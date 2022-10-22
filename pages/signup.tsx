import { NextPage } from 'next'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useEffect, useRef, useState } from 'react'
import { useAuth } from '../contexts/Auth'

const SignUp: NextPage = (): JSX.Element => {
	const emailRef = useRef<HTMLInputElement>(null)
	const passwordRef = useRef<HTMLInputElement>(null)
	const passwordConfirmRef = useRef<HTMLInputElement>(null)
	const [error, setError] = useState<string>('')
	const [push, setPush] = useState<boolean>(false)
	const router = useRouter()

	const { signUp, user } = useAuth()

	useEffect(() => {
		if (push) {
			router.push('/')
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
		<div className='mt-14 flex flex-col justify-center items-center'>
			<h1 className='text-3xl font-bold'>SignUp</h1>
			<div className='border-2 p-4 rounded-md mx-4 max-w-xl mt-10'>
				<form
					onSubmit={handleSubmit}
					className='flex flex-col items-center gap-4'
				>
					<input
						className='border-2 w-full'
						type='email'
						placeholder='email'
						ref={emailRef}
						required
					/>
					<input
						className='border-2 w-full'
						type='password'
						placeholder='password'
						ref={passwordRef}
						required
					/>
					<input
						className='border-2 w-full'
						type='password'
						placeholder='confirm password'
						ref={passwordConfirmRef}
						required
					/>
					<button className='border-2 w-full' type='submit'>
						Sign Up
					</button>
				</form>
				{error ? (
					<p style={{ opacity: 1, color: 'red' }}>{error}</p>
				) : (
					<p style={{ opacity: 0 }}>unknown</p>
				)}
				<div className='text-xs w-full flex flex-col justify-center items-center gap-2'>
					<Link href='/login'>
						<span className='text-blue-500 underline cursor-pointer'>
							Already have an account?
						</span>
					</Link>
				</div>
			</div>
		</div>
	)
}

export default SignUp

// Language: typescript
