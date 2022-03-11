import Link from 'next/link';

import Seo from '../components/Seo';

export default function Home({results}) {
  return (
    <div className="container">
      <Seo title="Home" />
      {results?.map((movie) => (
        <Link
          key={movie.id}
          href={`/movies/${movie.original_title}/${movie.id}`}
        >
          <a>
            <div className="movie" >
              <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} />
              <h4>{movie.original_title}</h4>
            </div>
          </a>
        </Link>
      ))}
       <style jsx>{`
        .container {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          padding: 30px;
          gap: 30px;
        }
        .movie img {
          max-width: 100%;
          border-radius: 12px;
          transition: transform 0.2s ease-in-out;
          box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
        }
        .movie:hover img {
          transform: scale(1.05) translateY(-10px);
        }
        .movie h4 {
          font-size: 18px;
          text-align: center;
        }
      `}</style>
    </div>
  )
}

export async function getServerSideProps() {
  const { results } = await (await fetch('http://localhost:3000/api/movies')).json();
  return {
    props: {
      results,
    }
  }
}