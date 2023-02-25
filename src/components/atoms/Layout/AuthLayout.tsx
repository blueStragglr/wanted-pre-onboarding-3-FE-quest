import Lottie from 'react-lottie';
import animationData from '@/constants/loginAnimation.json';

const defaultOptions = {
  loop: true,
  autoplay: true,
  animationData,
  rendererSettings: {
    preserveAspectRatio: 'xMidYMid slice',
  },
};

const AuthLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <div className="flex min-h-screen bg-white items-centerw-full">
        <div className={`relative hidden w-1/2 lg:block`}>
          <div className="absolute top-0 left-0 w-full h-full bg-blue-50" />
          <div className="absolute inline-flex items-center gap-1 px-3 py-2 font-semibold left-10 bottom-10 ">
            <Lottie options={defaultOptions} height={375} width={325} />
          </div>
        </div>
        <div className="w-full lg:w-1/2">
          <div className="relative flex items-center justify-center h-full">{children}</div>
        </div>
      </div>
    </>
  );
};

export default AuthLayout;
