import Button from '@mui/material/Button';
import Lottie from 'react-lottie';
import { useRouteError } from 'react-router-dom';
import animationData from '@/constants/notFound.json';
import { useNavigate } from 'react-router-dom';
import { PATH } from '@/constants';

const defaultOptions = {
  loop: true,
  autoplay: true,
  animationData,
  rendererSettings: {
    preserveAspectRatio: 'xMidYMid slice',
  },
};

const ErrorPage = () => {
  const error = useRouteError();
  console.error(error);
  const navigate = useNavigate();
  const gotoMain = () => navigate(PATH.MAIN, { replace: true });
  return (
    <div
      id="error-page"
      className="flex flex-col	 items-center justify-center min-h-screen  items-centerw-full"
    >
      <Lottie options={defaultOptions} height={375} width={325} />
      <p className="text-lg mb-3">없는 페이지입니다</p>
      <Button variant="outlined" onClick={gotoMain}>
        메인으로 가기
      </Button>
    </div>
  );
};

export default ErrorPage;
