import { User } from '@supabase/supabase-js'
import { createContext, FC, ReactNode, useContext, useState } from 'react'
import { useQuery } from 'react-query'
import { supabase } from '../lib/superbase'
import { useAuth } from './Auth'

type DatabaseContext = {
	products: Product[]
	addProduct: (product: Product) => Promise<void>
}

const DatabaseContext = createContext({} as DatabaseContext)

export function useDatabase(): DatabaseContext {
	const context = useContext(DatabaseContext)

	if (!context) {
		throw new Error('useDatabase must be used within a DatabaseProvider')
	}

	return context
}

type Props = {
	children: ReactNode
}

export const DatabaseProvider: FC<Props> = ({ children }): JSX.Element => {
	const [products, setProducts] = useState<Product[]>([])

	const fetchProducts = async () => {
		const { data, error } = await supabase.from<Product>('products').select('*')

		if (error) {
			console.log(error)
		}

		if (data) {
			setProducts(data)
		}
	}

	/**
	 * Add a new product to the database
	 * @param product
	 * @returns *Promise* void
	 */
	const addProduct = async (product: Product): Promise<void> => {
		const { data, error } = await supabase
			.from<Product>('products')
			.insert(product)

		if (error) {
			console.log(error)
		}

		if (data) {
			setProducts([...products, data[0]])
			console.log(`Product ${data[0].product_name} added`)
		}
	}

	useQuery('products', fetchProducts)

	const value: DatabaseContext = {
		products,
		addProduct
	}

	return (
		<DatabaseContext.Provider value={value}>
			{children}
		</DatabaseContext.Provider>
	)
}
