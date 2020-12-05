import Link from 'next/link';

const linkStyled = {
  marginRight: '1rem',
};

function Header() {
  return (
    <div>
      <Link href="/">
        <a>Home</a>
      </Link>
      <Link href="/about">
        <a>소개</a>
      </Link>
      {/* prefetch 기능은 아주 중요한데, 링크 컴포넌트를 렌더링할때 데이터를 먼저
      불러온 다음에 라우팅을 시작합니다. */}
      <Link prefetch href="/ssr-test">
        <a>SSR 테스트</a>
      </Link>
    </div>
  );
}

export default Header;
