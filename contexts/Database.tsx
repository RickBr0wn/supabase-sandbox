import { User } from '@supabase/supabase-js'
import {
	createContext,
	ReactNode,
	useContext,
	useEffect,
	useState
} from 'react'
import { supabase } from '../lib/superbase'
import { useAuth } from './Auth'

interface _Product {
	id: string
	created_at: string
	product_name: string
	product_image: string[]
	product_description: string
	product_price: number
	product_quantity: number
}

interface _DatabaseContext {
	user: User | null
	products: _Product[]
}

interface _DatabaseProviderProps {
	children: ReactNode
}

const DatabaseContext = createContext({} as _DatabaseContext)

export function useDatabase(): _DatabaseContext {
	const context = useContext(DatabaseContext)

	if (!context) {
		throw new Error('useDatabase must be used within a DatabaseProvider')
	}

	return context
}

export const DatabaseProvider = ({ children }: _DatabaseProviderProps) => {
	const { user } = useAuth()
	const [products, setProducts] = useState<_Product[]>([])

	useEffect(() => {
		const fetchProducts = async () => {
			const { data, error } = await supabase
				.from<_Product>('products')
				.select('*')

			if (error) {
				console.log(error)
			}

			if (data) {
				setProducts(data)
			}
		}

		fetchProducts()
	}, [])

	const value: _DatabaseContext = {
		user,
		products
	}

	return (
		<DatabaseContext.Provider value={value}>
			{children}
		</DatabaseContext.Provider>
	)
}
