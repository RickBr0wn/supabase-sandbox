import type { AppProps } from 'next/app'
import Layout from '../components/layout'
import { AuthProvider } from '../contexts/Auth'
import '../styles/globals.css'

function MyApp({ Component, pageProps }: AppProps): JSX.Element {
	return (
		<AuthProvider>
			<Layout>
				<Component {...pageProps} />
			</Layout>
		</AuthProvider>
	)
}

export default MyApp
