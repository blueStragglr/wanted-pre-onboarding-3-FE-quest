import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const Login = () => {
  const navigate = useNavigate();

  return (
    <Section>
      <div>
        <button onClick={() => navigate(-1)}>← 뒤로가기</button>
        <h2>Login</h2>
        <div>
          <input type="text" placeholder="아이디" />
          <input type="password" placeholder="비밀번호" />
          <button>로그인</button>
        </div>
      </div>
    </Section>
  );
};

const Section = styled.section`
  > div {
    width: 480px;
    margin: 40px auto;
    background: #f1f5f9;
    border-radius: 5px;
    padding: 40px 32px;
    position: relative;
    > h2 {
      text-align: center;
      margin-bottom: 20px;
      font-size: 18px;
    }
    > div {
      display: flex;
      flex-direction: column;
      > button {
        background: #475569;
        color: #fff;
        padding: 4px;
        border-radius: 5px;
        margin-top: 8px;
        &:hover {
          background: #64748b;
        }
      }
    }
    > button {
      position: absolute;
      top: 20px;
      left: 40px;
      font-size: 13px;
      color: #64748b;
      &:hover {
        text-decoration: underline;
      }
    }
    input {
      padding: 4px;
      margin-bottom: 8px;
      border-radius: 5px;
    }
  }
`;

export default Login;
