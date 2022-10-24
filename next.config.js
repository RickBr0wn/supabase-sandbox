/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	swcMinify: true,
	images: {
		domains: ['i.picsum.photos', 'kkhtjkwezgnpdnsexsri.supabase.co']
	}
}

module.exports = nextConfig
