import { FC } from 'react'
import { ReactNode } from 'react'

type Props = {
	className?: string
	children: ReactNode
}

const Grid: FC<Props> = ({ className, children }): JSX.Element => {
	return (
		<div
			className={`${className} m-auto grid grid-cols-3 gap-2 p-4 md:p-8 md:gap-6  max-w-7xl lg:px-[20px] lg:gap-10`}
		>
			{children}
		</div>
	)
}

export default Grid

// Path: components/grid.tsx
