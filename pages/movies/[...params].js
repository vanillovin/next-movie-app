import Image from 'next/image';
import Link from 'next/link';
import Seo from '../../components/Seo';

 const BASE_URL = "https://image.tmdb.org/t/p/original/"

export default function Detail({ data, params }) {
  console.log(data, '/ params:', params);
  const [title, id] = params; 
  return (
    <div className='px-2 py-5'>
      <Seo title={title} />
      <Link href={data.homepage}>
        <a target='_blank' className='font-semibold text-lg hover:underline'>
          {title || 'Loading...'}
        </a>
      </Link>
      <div className='flex flex-row align-middle text-sm'>
        genre: 
        {data.genres.map(({id, name}, i) => (
          <p key={id} className='ml-1'>
            {i + 1 === data.genres.length ? name : `${name} |`}
          </p>
        ))}
      </div>
      <div className='pt-3 pb-2'>
        <Image
          alt={data.title}
          width={1000}
          height={550}
          src={`${BASE_URL}${data.backdrop_path}`}
        />
      </div>
      <p>{data.overview}</p>
    </div>
  )
}

export async function getServerSideProps({ params: { params } }) {
  console.log(params);
  const data = await (await fetch(`http://localhost:3000/api/movie/${params[1]}`)).json();
  return {
    props: {
      data,
      params,
    },
  };
}
