import { useCallback, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const LabelStyle = 'block mb-1 text-sm font-medium text-gray-600';
const InputStyle = `w-full p-1 border border-1 border-x-0 border-t-0 border-amber-500 peer required:border-red-600`;
const RequiredStyle =
  'mt-1 invisible peer-invalid:visible text-red-600 text-xs';

const Login = () => {
  const navigate = useNavigate();
  const [isEmpty, setIsEmpty] = useState<{ [name: string]: boolean }>({
    username: false,
    password: false,
  });
  const [data, setData] = useState<{ [name: string]: string }>({
    username: '',
    password: '',
  });

  const onChangeHandler = (name: string, value: string) => {
    setIsEmpty({ ...isEmpty, [name]: false });
    setData({ ...data, [name]: value });
  };

  const isDataValid = (data: { [name: string]: string }) => {
    let isValid = true;
    let newIsEmpty = { ...isEmpty };
    for (const prop in data) {
      newIsEmpty = { ...newIsEmpty, [prop]: true };
      if (!data[prop]) isValid = false;
    }
    setIsEmpty(newIsEmpty);
    return isValid;
  };

  const onSubmitHandler = (event: any) => {
    event.preventDefault();

    if (isDataValid(data)) {
      // 로그인 api 호출
      sessionStorage.setItem('username', data.username);
      navigate('/page1');
    }
  };

  const setRequired = useCallback(
    (name: string) => {
      if (!data[name] && isEmpty[name]) return true;
    },
    [data, isEmpty]
  );

  return (
    <div className="w-1/3 mx-auto p-5 my-28">
      <form onSubmit={onSubmitHandler}>
        <label className="block mb-1">
          <span className={`${LabelStyle}`}>User Name</span>
          <input
            type="text"
            name="username"
            className={`${InputStyle}`}
            placeholder="유저네임을 입력해주세요"
            onChange={(event) =>
              onChangeHandler(event.target.name, event.target.value)
            }
            required={setRequired('username')}
          />
          <p className={`${RequiredStyle}`}>유저네임을 입력하지 않았습니다.</p>
        </label>
        <label className="block">
          <span className={`${LabelStyle}`}>Password</span>
          <input
            type="password"
            name="password"
            className={`${InputStyle}`}
            placeholder="비밀번호를 입력해주세요"
            onChange={(event) =>
              onChangeHandler(event.target.name, event.target.value)
            }
            required={setRequired('password')}
          />
          <p className={`${RequiredStyle}`}>비밀번호를 입력하지 않았습니다.</p>
        </label>
        <button
          type="submit"
          className="w-full mt-4 py-3 text-sm  font-semibold
          border border-3 border-amber-500 text-amber-500
        bg-white hover:bg-amber-500 hover:text-white hover:border-transparent 
        focus:outline-none focus:ring-2 focus:ring-amber-500 focus:ring-offset-2"
        >
          LOGIN
        </button>
      </form>
    </div>
  );
};

export default Login;
