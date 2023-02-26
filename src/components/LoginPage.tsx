const LoginPage = () => {
  return (
    <div className="loginPage">
      <form action="post">
        <input type="text" placeholder="ID ..." />
        <input type="password" placeholder="PW ..." />
        <div className="errorDiv"></div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default LoginPage;
