import LoginForm from '@/components/organisms/Form/LoginForm';
const Login = () => {
  return (
    <>
      <section className="w-full px-5 pb-10 text-gray-800 sm:w-4/6 md:w-3/6 lg:w-4/6 xl:w-3/6 sm:px-0">
        <div className="flex flex-col items-center justify-center px-2 mt-8 sm:mt-0">
          <h2 className="mt-2 text-5xl font-bold leading-tight inter">LOGIN</h2>
          <div className="mt-1 text-lg text-gray-400 mb-8">UHGenie</div>
        </div>
        <div>
          <LoginForm />
        </div>
      </section>
    </>
  );
};

export default Login;
