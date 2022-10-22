import { FC, ReactNode } from 'react'
import Navbar from './navbar'
import ScreenSize from './screen-size'

type Props = {
	children: ReactNode
}

const Layout: FC<Props> = ({ children }): JSX.Element => {
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
