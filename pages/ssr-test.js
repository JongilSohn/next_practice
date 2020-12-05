import axios from 'axios';
import React from 'react';
import Layout from '../components/Layout';

// 외부에서 데이터 가져오기
// next.js에서는 이 부분을 클래스형 컴포넌트에 getInitialProps 라는 메소드를 설정하여 해결합니다.
// 이 메소드가 서버 사이드에서도 실행될 수 있고, 클라이언트 사이드에서도 실행될 수 있습니다.
// 심지어 필요에 따라 prefetch도 될 수 있습니다.

class SSRTest extends React.Component {
  static async getInitialProps({ req }) {
    const response = await axios.get(
      'https://jsonplaceholder.typicode.com/users'
    );
    return {
      users: response.data,
    };
  }

  render() {
    const { users } = this.props;

    const userList = users.map((user) => (
      <li key={user.id}>{user.username}</li>
    ));
    return (
      <Layout>
        <ul>{userList}</ul>
      </Layout>
    );
  }
}

export default SSRTest;
