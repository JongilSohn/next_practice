import Document, { Head, Main, NextScript } from 'next/document';
import { render } from 'react-dom';
import flush from 'styled-jsx/server';

export default class MyDocument extends Document {
  static getInitialProps({ renderPage }) {
    const { html, head } = renderPage();
    const styles = flush();

    return { html, head, styles };
  }

  // 만약 여러페이지에서 공통적으로 사용하는 헤더를 설정할 경우에는
  // 이렇게 작성하게 됩니다.
  render() {
    return (
      <html>
        <Head>
          <style>{`body { margin: 0 } /* custom! */`}</style>
          <title>Next js 연습</title>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    );
  }
}

// 이렇게 될 경우엔 이 값을 기본적으로 설정하고, Head 컴포넌트가 사용된 페이지의 경우엔
// 이 기본값 위에 덮어 씌웁니다. (상단에 flush가 있는 이유는 스타일링 섹션에서 다시 다루겠습니다.)
