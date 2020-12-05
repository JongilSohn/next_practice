// import Link from 'next/link';
import Layout from '../components/Layout';
import Head from 'next/head';

function index() {
  const linkStyle = {
    marginRight: '1rem',
  };

  return (
    <Layout>
      {/* next/head를 사용해서 현재 탭의 이름을 변경할 수 있다. */}
      <Head>
        <title>Index 페이지</title>
      </Head>
      <h1>안녕</h1>
      <h2>
        {/* about은 CSR로 작동한다 */}
        {/* <Link href="/about">
          <a style={linkStyle}>소개글</a>
        </Link> */}
      </h2>
    </Layout>
  );
}

export default index;
