import { FC } from 'react'
import Image from 'next/image'

type Props = {
	imgUrl: string
}

const Thumb: FC<Props> = ({ imgUrl }): JSX.Element => {
	return (
		<Image
			placeholder='blur'
			blurDataURL='/placeholder.jpg'
			className='rounded-lg'
			layout='fill'
			objectFit='cover'
			src={imgUrl}
			alt='thumb'
		/>
	)
}

export default Thumb

// Path: components/thumb.tsx
