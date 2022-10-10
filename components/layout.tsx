import { ReactNode } from 'react'
import Navbar from './navbar'
import ScreenSize from './screen-size'

interface _LayoutProps {
	children: ReactNode
}

const Layout = ({ children }: _LayoutProps): JSX.Element => {
	return (
		<div>
			<ScreenSize />

			<Navbar />
			{children}
		</div>
	)
}

export default Layout

// Language: typescript
