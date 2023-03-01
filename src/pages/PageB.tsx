export const PageB = () => {
  const isAuth = localStorage.getItem('user');
  console.log(isAuth);

  return (
    <>
      {isAuth ? (
        <h1>This is Page B!</h1>
      ) : (
        <>
          <h1>Page B requires login to access! Please log in first.</h1>
          <a href='/login' className='login'>login</a>
        </>
      )}
    </>
  );
};
