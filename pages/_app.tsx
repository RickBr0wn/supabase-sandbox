import type { AppProps } from 'next/app'
import { QueryClient, QueryClientProvider } from 'react-query'
import Layout from '../components/layout'
import { AuthProvider } from '../contexts/Auth'
import { DatabaseProvider } from '../contexts/Database'
import '../styles/globals.css'

const queryClient = new QueryClient()

function MyApp({ Component, pageProps }: AppProps): JSX.Element {
	return (
		<QueryClientProvider client={queryClient}>
			<AuthProvider>
				<DatabaseProvider>
					<Layout>
						<Component {...pageProps} />
					</Layout>
				</DatabaseProvider>
			</AuthProvider>
		</QueryClientProvider>
	)
}

export default MyApp
