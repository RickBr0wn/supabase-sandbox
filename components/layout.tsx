import { ReactNode } from 'react'
import Navbar from './navbar'

interface _LayoutProps {
	children: ReactNode
}

const Layout = ({ children }: _LayoutProps): JSX.Element => {
	return (
		<div>
			<Navbar />
			{children}
		</div>
	)
}

export default Layout

// Language: typescript
