import React from 'react';
import Layout from '../components/Layout';

// 쿼리 형태: /search?keyword=something

// 콘솔로그로 url props를 확인
// url props를 보면 push method가 있는데 이 메소드를 사용하여 라우팅 가능

// Pathname 파라미터 /post/:id 에서 id를 지칭하는데 Next.js에서는 이걸 하려면 커스텀 API를 사용해야 한다.
// https://github.com/vercel/next.js#custom-server-and-routing 링크 참조

// 자체적으로 되지 않는 이유는 Next js에서 서버렌더링을 하기 때문에 구조상 /post/13 이런식으로 요청이 들어오면
// pages/post/13.js 파일을 렌더링하려고 하기 때문입니다.

function Search({ url }) {
  return <Layout>당신이 검색한 키워드는 "{url.query.keyword}" 입니다.</Layout>;
}

export default Search;
