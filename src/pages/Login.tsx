import React, { FormEvent } from 'react';
import { useNavigate } from 'react-router';

const Login = () => {
  const navigate = useNavigate();
  const onSubmit = (event: FormEvent) => {
    event.preventDefault();
    navigate('/');
  };

  return (
    <div className="w-screen h-screen flex justify-center items-center">
      <section className="bg-red-300 rounded-2xl w-1/3 h-80 flex flex-col gap-5 items-center justify-center">
        <h3 className="text-white font-bold text-lg mb-5">로그인</h3>
        <form
          action=""
          className="flex flex-col gap-5 w-full items-center"
          onSubmit={onSubmit}
        >
          <div className="flex justify-between w-1/2 text-red-100">
            ID
            <input type="id" className="rounded-lg px-3 text-gray-500" />
          </div>
          <div className="flex justify-between w-1/2 text-red-100">
            PW
            <input type="password" className="rounded-lg px-3  text-gray-500" />
          </div>
          <button
            type="submit"
            className="rounded-md bg-white text-red-300 font-bold p-3 w-1/3 mt-5"
          >
            로그인
          </button>
        </form>
      </section>
    </div>
  );
};

export default Login;
