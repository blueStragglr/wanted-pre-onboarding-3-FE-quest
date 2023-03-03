import React from 'react';

export default function Home() {
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('로그인 요청!');
  };
  return (
    <main>
      <form onSubmit={handleSubmit} className='flex flex-col'>
        <label htmlFor='email'>email</label>
        <input
          type='text'
          id='email'
          placeholder='이메일을 입력하세요.'
          className='border-b w-full mb-5 mt-3 placeholder:italic placeholder:text-xl focus:outline-none'
        />
        <label htmlFor='pw'>password</label>
        <input
          type='password'
          id='pw'
          placeholder='비밀번호를 입력하세요.'
          className='border-b w-full mb-5 mt-3 placeholder:italic placeholder:text-xl focus:outline-none'
        />
        <button type='submit' className='w-full border mt-3 p-2 hover:bg-black hover:text-white'>
          로그인
        </button>
      </form>
    </main>
  );
}
