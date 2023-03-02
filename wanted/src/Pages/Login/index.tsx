import styled from 'styled-components';
import { pageLayout } from '../../Style/Common';
import React, { useState } from 'react';

export default function Login() {
  const [id, setId] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const onChangeId = ({ target }: React.ChangeEvent<HTMLInputElement>) => {
    setId(target.value);
  };

  const onChangePassword = ({ target }: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(target.value);
  };

  const onSubmit = (e:React.MouseEvent<HTMLFormElement>) => {
    e.preventDefault();
    // TODO: 유효성 검사
    if(id === '' || password === '') return
    alert(`${id} & ${password} 전송`)
  }

  return (
    <S_Wrapper>
      <p>This is Login Page!</p>
      <S_Form onSubmit={onSubmit}>
        <S_Input placeholder={'ID를 입력해주세요.'} value={id} onChange={onChangeId} />
        <S_Input placeholder={'비밀번호를 입력해주세요.'} value={password} onChange={onChangePassword}/>
        <S_Button type={'submit'} >로그인</S_Button>
      </S_Form>
    </S_Wrapper>
  );
}

const S_Wrapper = styled.div`
  ${pageLayout};
  flex-flow: column;
  min-width: 300px;

`;

const S_Form = styled.form`
  display: flex;
  flex-flow: column;
  justify-content: space-evenly;
  align-items: center;
  padding: 3rem;
  height: 220px;
  
`;
const S_Input = styled.input`
  height: 40px;
  font-size: 1.6rem;
  width: 300px;
  border-radius: 6px;
`;

const S_Button = styled.button`
  width: 100px;
  height: 50px;
  font-size: 1.8rem;
  border-radius: 6px;
  background-color: skyblue;
  margin-top: 1rem;
`;
