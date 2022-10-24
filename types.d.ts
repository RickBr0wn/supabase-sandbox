type _Image = {
	id: string
	href: string
	imageSrc: string
	name: string
}

type Product = {
	id?: string
	created_at: Date
	product_name: string
	product_image: string[]
	product_description: string
	product_price: number
	product_quantity: number
}
