import Link from 'next/link'
import { useState } from 'react'
import Image from 'next/image'

const _classes = (...classes: string[]): string => {
	return classes.filter(Boolean).join(' ')
}

interface _Image {
	id: string
	href: string
	imageSrc: string
	name: string
}

interface _LazyLoadImageProps {
	image: _Image
}

const BlurImageOnLoad = ({ image }: _LazyLoadImageProps): JSX.Element => {
	const [isLoading, setIsLoading] = useState<boolean>(true)

	return (
		<Link href={image.href}>
			<a className='group'>
				<div className='w-full aspect-w-1 aspect-h-1 bg-gray-200 rounded-lg overflow-hidden xl:aspect-w-7 xl:aspect-h-8'>
					<Image
						alt='image placeholder'
						src={image.imageSrc}
						layout='responsive'
						height={100}
						width={100}
						objectFit='cover'
						className={_classes(
							'group-hover:opacity-75 duration-700 ease-in-out',
							isLoading
								? 'grayscale blur-2xl scale-110'
								: 'grayscale-0 blur-0 scale-100'
						)}
						onLoadingComplete={() => setIsLoading(false)}
					/>
				</div>
			</a>
		</Link>
	)
}

export default BlurImageOnLoad

// Language: typescript
