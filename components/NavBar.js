// NextJS 어플리케이션의 클라이언트 사이드 네비게이션을 제공
import Link from 'next/link';
import Image from 'next/image';
import classnames from 'tailwindcss-classnames';
import { useRouter } from 'next/router';

export default function NavBar() {
  const router = useRouter();
  return (
    <nav className='flex flex-row align-middle justify-between px-6 py-5 shadow-2xl'>
      {/* public 파일 "../public" -> "/" */}
      <Image
        alt='vercel'
        src="/vercel.svg"
        width={80}
        height={20}
      />
      <div>
        <Link href="/">
          <a className={classnames('mr-2', { 
            'font-medium': router.pathname === "/",
            'text-blue-500': router.pathname === "/"
          })}>Home</a>
        </Link>
        <Link href="/about">
          <a className={classnames('', { 
            'font-medium': router.pathname === "/about",
            'text-blue-500': router.pathname === "/about",
          })}>About</a>
        </Link>
      </div>
    </nav>
  );
}