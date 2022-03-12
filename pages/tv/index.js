import Image from 'next/image';
import Link from 'next/link';

import Seo from '../../components/Seo';

export default function TV({ results }) {
  console.log('tv', results);
  return (
    <div className="p-4 grid grid-cols-2 gap-4">
      <Seo title="Home" />
      {results?.map((tv) => (
        <Link
          key={tv.id}
          href={`/tv/${tv.original_name}/${tv.id}`}
        >
          <a>
            <div className="group" >
              <img
                src={`https://image.tmdb.org/t/p/w500${tv.poster_path}`}
                className='rounded-xl transform transition group-hover:scale-105 group-hover:-translate-y-4 
                          min-w-full shadow-md transition-transform ease-in-out duration-200'
              />
              <h4 className='text- text-center'>{tv.original_name}</h4>
            </div>
          </a>
        </Link>
      ))}
    </div>
  )
}

export async function getServerSideProps() {
  const { results } = await (await fetch('http://localhost:3000/api/tv')).json();
  return {
    props: {
      results,
    }
  }
}