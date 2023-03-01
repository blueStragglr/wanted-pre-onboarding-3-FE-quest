interface Props {
  children: React.ReactNode;
}

export const Container = ({ children }: Props) => {
  return <main className='main'>{children}</main>;
};
