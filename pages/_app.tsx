import type { AppProps } from 'next/app'
import Layout from '../components/layout'
import { AuthProvider } from '../contexts/Auth'
import { DatabaseProvider } from '../contexts/Database'
import '../styles/globals.css'

function MyApp({ Component, pageProps }: AppProps): JSX.Element {
	return (
		<AuthProvider>
			<DatabaseProvider>
				<Layout>
					<Component {...pageProps} />
				</Layout>
			</DatabaseProvider>
		</AuthProvider>
	)
}

export default MyApp
