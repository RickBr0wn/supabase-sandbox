import { FC } from 'react'
import Thumb from './thumb'

type Props = {
	imgUrl: string
	title: string
	subtitle?: string
}

const Card: FC<Props> = ({ imgUrl, title, subtitle }): JSX.Element => {
	return (
		<div className='h-80'>
			<div className='relative h-full'>
				<Thumb imgUrl={imgUrl} />
				<div className='absolute w-full bottom-0 px-4 py-2 rounded-b-xl bg-zinc-800'>
					<h2 className='text-cyan-400 text-center text-sm truncate'>
						{title}
					</h2>
					{subtitle ? (
						<p className='text-cyan-400 text-center text-xs truncate'>
							{subtitle}
						</p>
					) : null}
				</div>
			</div>
		</div>
	)
}

export default Card

// Path: components/card.tsx
