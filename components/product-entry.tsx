import { FC, useRef } from 'react'
import { useDatabase } from '../contexts/Database'

type Props = {
	product?: Product
}

const ProductEntry: FC<Props> = (): JSX.Element => {
	const { addProduct } = useDatabase()
	const name = useRef<HTMLInputElement>(null)
	const description = useRef<HTMLInputElement>(null)
	const price = useRef<HTMLInputElement>(null)
	const quantity = useRef<HTMLInputElement>(null)
	const image = useRef<HTMLInputElement>(null)

	const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault()

		if (
			name.current &&
			description.current &&
			price.current &&
			quantity.current &&
			image.current
		) {
			const priceAsNumber = parseFloat(price.current.value)
			const quantityAsNumber = parseInt(quantity.current.value)

			addProduct({
				product_name: name.current.value,
				product_description: description.current.value,
				product_price: priceAsNumber,
				product_quantity: quantityAsNumber,
				product_image: [
					'https://i.picsum.photos/id/997/200/300.jpg?hmac=NeXq5MvhpKvGEq_X3jULp2C3Lg-8IQK8bdtnyJeXDIQ'
				],
				created_at: new Date()
			})
		}
	}

	return (
		<div className='m-auto w-full max-w-xl mt-11 p-8 flex flex-col bg-slate-400'>
			<h1 className='text-black text-2xl'>Product Entry</h1>
			<form onSubmit={handleSubmit} className='p-4 flex flex-col'>
				<label htmlFor='name'>Name</label>
				<input type='text' name='name' id='name' ref={name} />
				<label htmlFor='description'>Description</label>
				<input
					type='text'
					name='description'
					id='description'
					ref={description}
				/>
				<div className='flex flex-col md:flex-row md:gap-6 justify-between'>
					<div className='flex flex-col w-full'>
						<label htmlFor='price'>Price</label>
						<input type='number' name='price' id='price' ref={price} />
					</div>
					<div className='flex flex-col w-full'>
						<label htmlFor='quantity'>Quantity</label>
						<input type='number' name='quantity' id='quantity' ref={quantity} />
					</div>
				</div>
				<div className='flex flex-col justify-around pt-4'>
					<div className='flex flex-col md:flex-row md:justify-around items-center'>
						<button
							type='submit'
							className='h-12 bg-zinc-800 text-white mt-4 px-6 rounded-full'
						>
							Add Product Image
						</button>
						<button
							type='submit'
							className='h-12 bg-zinc-800 text-white mt-4 px-6 rounded-full'
						>
							Submit Product To Stock
						</button>
					</div>
				</div>
			</form>
		</div>
	)
}

export default ProductEntry

// Path: components/product-entry.tsx
