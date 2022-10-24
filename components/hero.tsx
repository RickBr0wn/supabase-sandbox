import Image from 'next/image'
import { FC } from 'react'

type Props = {}

const Hero: FC<Props> = () => {
	return (
		<div className='relative'>
			<Image
				src='https://kkhtjkwezgnpdnsexsri.supabase.co/storage/v1/object/public/site-images/banner_1.png'
				alt='hero'
				layout='responsive'
				width={900}
				height={600}
			/>
			<div className='absolute top-[44px] left-[24px] md:top-[144px] md:left-[64px] '>
				<p className='text-sm md:text-xl lg:text-2xl xl:text-4xl'>
					Browse the latest range of
				</p>
				<h1 className='text-4xl md:text-5xl lg:text-6xl xl:text-7xl'>
					<span className='text-highlightGrey'>Designer</span> Womens
				</h1>

				<p className='text-sm md:text-xl md:text-right lg:text-2xl'>clothes</p>

				<div className='lg:flex lg:justify-center'>
					<button className='bg-highlightGrey text-sm text-white py-1 px-4 rounded-full mt-6 lg:mt-12 lg:px-10 lg:py-2 lg:text-base'>
						Shop Now
					</button>
				</div>
			</div>
		</div>
	)
}

export default Hero

// Path: components/hero.module.css
