/* eslint-disable @next/next/no-img-element */
import Image from 'next/image'
import { ChangeEvent, FC, useState } from 'react'
import { supabase } from '../lib/superbase'

type Props = {}
// an image for the product
const ImagePicker: FC<Props> = (): JSX.Element => {
	const [image, setImage] = useState('')

	// handle the user selecting an image
	const onImageChange = async (event: ChangeEvent<HTMLInputElement>) => {
		if (event.target.files && event.target.files[0]) {
			const file = event.target.files[0]
			setImage(URL.createObjectURL(file))

			// upload the image to supabase storage
			const { data, error } = await supabase.storage
				.from('product-images')
				.upload(`product4.png`, file)

			if (error) {
				console.log(error)
			}

			// https://kkhtjkwezgnpdnsexsri.supabase.co/storage/v1/object/public/product-images/product4.png

			const key = data?.Key.split('/')[1] + '/' + data?.Key.split('/')[2]

			console.log('key: ', key)
		}
	}

	return (
		<div className='flex flex-col'>
			<Image src={image} alt={image} width={400} height={300} />
			<input type='file' onChange={onImageChange} />
			<p>{image}</p>
		</div>
	)
}

export default ImagePicker

// Language: typescript
