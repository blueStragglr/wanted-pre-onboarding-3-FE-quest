import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div className="w-full h-full py-40">
      <p className="font-bold text-center text-gray-700 text-3xl">
        Not Found 😢
      </p>
      <p className="mt-10 font-semibold text-center text-gray-700 text-md underline">
        <Link to="/">Main Page 로 이동</Link>
      </p>
    </div>
  );
};

export default NotFound;
