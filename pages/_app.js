// 페이지나 컴포넌트 내에 css를 임포트하고 싶다면 반드시 module 이어야만 함.
// 하지만 커스텀 App 컴포넌트가 있는 여기라면 모든 Global Styles를 임포트할 수 있음
import Layout from '../components/Layout';
import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />

      <style jsx global>{`

      `}</style>
    </Layout>
  );
}

export default MyApp;
