export const PageC = () => {
  const isAuth = localStorage.getItem('user');

  return (
    <>
      {isAuth ? (
        <h1>This is Page C!</h1>
      ) : (
        <>
          <h1>Page C requires login to access! Please log in first.</h1>
          <a href='/login' className='login'>
            login
          </a>
        </>
      )}
    </>
  );
};
