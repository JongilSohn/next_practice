import Link from 'next/link';

function index() {
  return (
    <div>
      <h1>안녕</h1>
      <h2>
        {/* about은 CSR로 작동한다 */}
        <Link href="/about">
          <a>소개글</a>
        </Link>
      </h2>
    </div>
  );
}

export default index;
