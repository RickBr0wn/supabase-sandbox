import Image from 'next/image'
import { FC } from 'react'
import Grid from './grid'

type Props = {}

type ImageContainerWithMouseOverFadeProps = {
	src: string
	text: string
	className?: string
}

const ImageContainerWithMouseOverFade: FC<
	ImageContainerWithMouseOverFadeProps
> = ({ src, text }): JSX.Element => {
	return (
		<div className='relative shadow-2xl mt-2 md:mt-6 lg:mt-12'>
			<p className='absolute top-0 left-0 text-transparent md:font-black md:text-bold lg:text-2xl lg:text- md:hover:text-white md:hover:bg-black md:hover:opacity-80 transition-all duration-200 h-full w-full z-10 flex justify-center items-center'>
				{text}
			</p>
			<Image
				src={src}
				layout='responsive'
				objectFit='cover'
				width={200}
				height={200}
				alt='advert'
			/>
		</div>
	)
}

const Adverts: FC<Props> = () => {
	return (
		<Grid>
			<ImageContainerWithMouseOverFade
				src={
					'https://kkhtjkwezgnpdnsexsri.supabase.co/storage/v1/object/public/site-images/advert_1.png'
				}
				text={'Summer Sale'}
			/>
			<ImageContainerWithMouseOverFade
				src={
					'https://kkhtjkwezgnpdnsexsri.supabase.co/storage/v1/object/public/site-images/advert_2.png'
				}
				text={'Autumn Collection'}
			/>
			<ImageContainerWithMouseOverFade
				src={
					'https://kkhtjkwezgnpdnsexsri.supabase.co/storage/v1/object/public/site-images/advert_3.png'
				}
				text={'Winter Sale'}
			/>
		</Grid>
	)
}

export default Adverts

// Path: components/advert.tsx
