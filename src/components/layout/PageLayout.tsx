type PageLayoutProps = {
  children: React.ReactNode;
};

const PageLayout = ({ children }: PageLayoutProps) => {
  return (
    <section className="w-full flex justify-center items-center font-bold text-2xl">
      {children}
    </section>
  );
};

export default PageLayout;
