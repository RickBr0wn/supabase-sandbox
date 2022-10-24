import Image from 'next/image'
import { FC } from 'react'

type Props = {}

const Hero: FC<Props> = () => {
	return (
		<div className='relative'>
			<Image
				src='https://kkhtjkwezgnpdnsexsri.supabase.co/storage/v1/object/public/product-images/site-images/banner_1.png'
				alt='hero'
				layout='responsive'
				width={600}
				height={300}
			/>
			<div className='absolute top-[30%] left-[80px]'>
				<p className='text-4xl'>Browse the latest range of</p>
				<h1 className='text-7xl font-bold'>
					<span className='text-highlightGrey'>Designer</span> Womens
				</h1>

				<p className='text-2xl text-right'>clothes</p>

				<div className='flex justify-center'>
					<button className='bg-highlightGrey text-white p-4 rounded-md mt-12 px-12'>
						Shop Now
					</button>
				</div>
			</div>
		</div>
	)
}

export default Hero

// Path: components/hero.module.css
