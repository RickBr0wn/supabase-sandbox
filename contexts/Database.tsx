import { User } from '@supabase/supabase-js'
import { createContext, FC, ReactNode, useContext, useState } from 'react'
import { useQuery } from 'react-query'
import { supabase } from '../lib/superbase'
import { useAuth } from './Auth'

type DatabaseContext = {
	user: User | null
	products: Product[]
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
	const { user } = useAuth()
	const [products, setProducts] = useState<Product[]>([])

	const fetchProducts = async () => {
		console.log('api call made')
		const { data, error } = await supabase.from<Product>('products').select('*')

		if (error) {
			console.log(error)
		}

		if (data) {
			setProducts(data)
		}
	}

	const query = useQuery('products', fetchProducts, {
		enabled: !!user
	})

	const value: DatabaseContext = {
		user,
		products
	}

	return (
		<DatabaseContext.Provider value={value}>
			{children}
		</DatabaseContext.Provider>
	)
}
