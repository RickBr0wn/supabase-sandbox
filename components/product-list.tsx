import { FC, useState } from 'react'
import { useDatabase } from '../contexts/Database'

type Props = {}

type DisplayedProductProps = {}

const ProductList: FC<Props> = (): JSX.Element => {
	const { products } = useDatabase()
	const [displayedProduct, setDisplayedProduct] = useState<Product>()

	const truncate = (str: string, n: number): string =>
		str.length > n ? str.slice(0, n).concat('...') : str

	const handleItemSelect = (product: Product) => {
		setDisplayedProduct(product)
	}

	return (
		<div className='m-auto text-center w-sm max-w-4xl'>
			<table className='text-xs md:text-base m-auto'>
				<thead>
					<tr className='text-left'>
						<th>ID</th>
						<th>Name</th>
						<th>Description</th>
						<th>Price</th>
					</tr>
				</thead>
				<tbody>
					{products.map(product => {
						return (
							<tr
								key={product.id}
								className='text-sm'
								onClick={() => handleItemSelect(product)}
							>
								<td className='border border-solid p-2'>
									{truncate(product.id!, 12)}
								</td>
								<td className='border border-solid p-2'>
									{truncate(product.product_name, 18)}
								</td>
								<td className='border border-solid p-2'>
									{truncate(product.product_description, 22)}
								</td>
								<td className='border border-solid p-2'>
									{'£' + product.product_price}
								</td>
							</tr>
						)
					})}
				</tbody>
			</table>
			{displayedProduct && (
				<div className='flex justify-center mt-6'>
					<p>{truncate(displayedProduct.id || '', 12)}</p>
					<p>{displayedProduct.product_name}</p>
					<p>{displayedProduct.product_description}</p>
					<p>{displayedProduct.product_price}</p>
				</div>
			)}
		</div>
	)
}

export default ProductList

// Path: components/product-entry.tsx
