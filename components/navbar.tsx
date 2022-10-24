import { useRouter } from 'next/router'
import { FC } from 'react'
import { useAuth } from '../contexts/Auth'
import { HeartIcon, ShoppingCartIcon } from '../svg'
import LogInIcon from '../svg/login-icon'
import SignUpIcon from '../svg/signup-icon'
import StatsIcon from '../svg/stats'
import StoreFrontIcon from '../svg/store-front'
import UserIcon from '../svg/userIcon'

type Props = {}

const Navbar: FC<Props> = (): JSX.Element => {
	const { session, signOut } = useAuth()
	const router = useRouter()

	return (
		<div>
			{/* Top Navbar */}
			<div className='flex justify-end px-2 py-1 text-sm items-center h-6 border-b-2'>
				{session && (
					<div>
						Hello <span className='text-bold ml-1'>{session?.user?.email}</span>
						<span className='px-2 text-xs cursor-pointer' onClick={signOut}>
							[Log out]
						</span>
					</div>
				)}
			</div>
			{/* Main Navbar */}
			<div className='py-2 px-4 border-b-2 bg-transparent'>
				{session ? (
					<div className='flex justify-between items-center'>
						<div
							className='flex items-center gap-2 cursor-pointer'
							onClick={() => router.push('/')}
						>
							<StoreFrontIcon />
							<span className='text-2xl font-bold'>E-Commerce</span>
						</div>
						<div className='flex gap-4 '>
							<div
								onClick={() => router.push('/account')}
								className='flex flex-col items-center'
							>
								<UserIcon />
								<span className='text-xs hidden lg:block'>Account</span>
							</div>
							<div
								onClick={() => router.push('/dashboard')}
								className='flex flex-col items-center'
							>
								<StatsIcon />
								<span className='text-xs hidden lg:block'>Dashboard</span>
							</div>
							<div
								onClick={() => router.push('/wish-list')}
								className='flex flex-col items-center'
							>
								<HeartIcon />
								<span className='text-xs hidden lg:block'>Wish List</span>
							</div>
							<div
								onClick={() => router.push('/shopping-cart')}
								className='flex flex-col items-center'
							>
								<ShoppingCartIcon />
								<span className='text-xs hidden lg:block'>Trolley</span>
							</div>
						</div>
					</div>
				) : (
					<div style={{ display: 'flex', justifyContent: 'space-between' }}>
						<div className='flex items-center gap-2'>
							<StoreFrontIcon />
							<span className='text-2xl font-bold'>E-Commerce</span>
						</div>
						<div className='flex gap-4 '>
							<div
								onClick={() => router.push('/login')}
								className='flex flex-col items-center'
							>
								<LogInIcon />
								<span className='text-xs hidden lg:block'>Log In</span>
							</div>
							<div
								onClick={() => router.push('/signup')}
								className='flex flex-col items-center'
							>
								<SignUpIcon />
								<span className='text-xs hidden lg:block'>Sign Up</span>
							</div>
						</div>
					</div>
				)}
			</div>
		</div>
	)
}

export default Navbar

// Language: typescript
