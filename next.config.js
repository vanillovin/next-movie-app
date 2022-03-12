/** @type {import('next').NextConfig} */
const API_KEY = process.env.API_KEY;

const nextConfig = {
  images: {
    domains: ["image.tmdb.org"],
  },
  reactStrictMode: true,
  async redirects() {
    return [
      {
        // redirection 스텝1. source를 찾고 destination으로 보내기?
        // pattern matching 또한 지원함. 주소 뒤에 별표 붙이면 모든 걸 catch
        source: '/contact', // 'old-blog/:path' and 'old-blog/:path*'
        destination: '/form', // 'new-sexy-blog/:path' and 'new-sexy-blog/:path*'
        // redirection이 permanent(영구적)인지 아닌지에 따라서, 
        // 브라우저나 검색엔진이 이 정보를 기억하는지 여부가 결정됨.
        permanent: false,
      },
      // {
      //   source
      // }
    ]
  },
  async rewrites() {
    return [
      {
        source: '/api/movies',
        destination: `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`
      },
      {
        source: '/api/movie/:id', // /api/movie/12
        destination: `https://api.themoviedb.org/3/movie/:id?api_key=${API_KEY}`
      }
    ]
  }
}

module.exports = nextConfig
