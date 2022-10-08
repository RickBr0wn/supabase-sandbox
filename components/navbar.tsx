import { useAuth } from '../contexts/Auth'

const Navbar = (): JSX.Element => {
	const { session, signOut } = useAuth()

	return (
		<div>
			{session ? (
				<div style={{ display: 'flex', justifyContent: 'space-between' }}>
					<div>{session.user?.email}</div>
					<div onClick={signOut}>Log out</div>
				</div>
			) : (
				<div style={{ display: 'flex', justifyContent: 'space-between' }}>
					<p>not logged in</p>
				</div>
			)}
		</div>
	)
}

export default Navbar

// Language: typescript
