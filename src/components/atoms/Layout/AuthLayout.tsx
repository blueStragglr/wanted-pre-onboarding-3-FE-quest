const AuthLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <div>
        <main>{children}</main>
      </div>
    </>
  );
};

export default AuthLayout;
