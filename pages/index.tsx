import type { NextPage } from 'next'
import Head from 'next/head'
import { useEffect, useState } from 'react'
import BlurImageOnLoad from '../components/blur-image'
import ImagePicker from '../components/image-picker'
import { useAuth } from '../contexts/Auth'
import { useDatabase } from '../contexts/Database'
import { supabase } from '../lib/superbase'
import Dashboard from './dashboard'
import LogIn from './login'
import Image from 'next/image'
import Grid from '../components/grid'
import Card from '../components/card'
import Hero from '../components/hero'
import Adverts from '../components/adverts'

const Home: NextPage = () => {
	const { user, session } = useAuth()
	// const { products } = useDatabase()

	return (
		<div>
			<Head>
				<title>Supabase Sandbox</title>
				<meta name='description' content='Generated by create next app' />
				<link rel='icon' href='/favicon.ico' />
			</Head>

			<main className=' w-full h-full'>
				<Hero />
				<Adverts />

				{/* <Grid
					className='p-4 max-w-7xl m-auto'
					title={`Products: ${products.length}`}
				>
					{products.map(product => (
						<Card
							key={product.id}
							imgUrl={product.product_image[0]}
							title={product.product_name}
						/>
					))}
				</Grid> */}
			</main>
		</div>
	)
}

export default Home
