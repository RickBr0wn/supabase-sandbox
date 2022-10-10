const ScreenSize = () => {
	return (
		<div>
			<div className='h-14 bg-blue-50' />
			<div className='fixed z-50 top-0 left-0 p-4 text-xl font-bold uppercase'>
				<h1 className='md:hidden'>sm</h1>
				<h1 className='hidden md:block lg:hidden'>md</h1>
				<h1 className='hidden lg:block xl:hidden'>lg</h1>
				<h1 className='hidden xl:block'>xl</h1>
			</div>
		</div>
	)
}

export default ScreenSize

// Language: typescript
