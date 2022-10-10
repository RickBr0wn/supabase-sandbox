import { useRouter } from 'next/router'
import { useAuth } from '../contexts/Auth'
import { HeartIcon, ShoppingCartIcon } from '../svg'
import UserIcon from '../svg/userIcon'

const Navbar = (): JSX.Element => {
	const { session, signOut } = useAuth()
	const router = useRouter()

	return (
		<div>
			{/* Top Navbar */}
			{session ? (
				<div className='bg-blue-100 flex justify-end px-2 py-1 text-sm items-center'>
					Hello <span className='text-bold ml-1'>{session?.user?.email}</span>
					<span className='px-2 text-xs cursor-pointer' onClick={signOut}>
						[Log out]
					</span>
				</div>
			) : null}
			{/* Main Navbar */}
			<div className='py-2 px-4 border-b-2'>
				{session ? (
					<div className='flex justify-between items-center'>
						<div>{session.user?.email}</div>
						<div className='flex gap-4 '>
							<div
								onClick={() => router.push('/account')}
								className='flex flex-col items-center'
							>
								<UserIcon />
								<span className='text-xs hidden lg:block'>Account</span>
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
						<p>not logged in</p>
					</div>
				)}
			</div>
		</div>
	)
}

export default Navbar

// Language: typescript
