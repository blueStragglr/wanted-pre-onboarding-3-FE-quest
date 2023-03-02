import styled from 'styled-components';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  gap: var(--spacing-sm);
  & header {
    font-size: var(--text-lg);
    font-weight: 900;
  }
`;

const SForm = styled.form`
  border: 1px solid black;
  padding: var(--spacing-xxl);
  border-radius: 15px;
  & fieldset {
    display: flex;
    flex-direction: column;
    gap: var(--spacing-xs);
  }
  & button {
    padding: var(--spacing-xxxs);
    background: var(--color-blue);
    border-radius: 15px;
  }
  & button:disabled {
    padding: var(--spacing-xxxs);
    background: var(--color-grey);
    border-radius: 15px;
    cursor: not-allowed;
  }
`;

export const Signin = () => {
  let navigate = useNavigate()
  const [id, setId] = useState('');
  const [password, setPassword] = useState('');
  
  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`로그인에 성공하셨습니다 \nid :  ${id}  password :  ${password}`)
    localStorage.setItem('id', id)
    navigate('/')
  }
  const isValid = () => id !== '' && password !== '';
  return (
    <Container>
      <header>로그인</header>
      <SForm onSubmit={handleSubmit}>
        <fieldset>
          <legend className="sr-only">로그인</legend>
          <input type='text' placeholder='아이디' id="id" value={id} onChange={(e) => {setId(e.target.value)}}/>
          <label htmlFor="id" className="sr-only">아이디</label>
          <input type='password' placeholder='비밀번호' id="pw" value={password} onChange={(e) => {setPassword(e.target.value)}}/>
          <label htmlFor="pw" className="sr-only">비밀번호</label>
          <button disabled={!isValid()}>로그인</button>
        </fieldset>
      </SForm>
    </Container>
  )
}