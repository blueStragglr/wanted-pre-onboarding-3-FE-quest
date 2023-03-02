import { React } from 'react';
import { Link } from 'react-router-dom';

//TODO Link태크 반복문 돌릴 방법 찾기
const SNB = () => {
  return (
    <>
      <ul className="SNB">
        <li>
          <Link to="pageA">page A</Link>
        </li>
        <li>
          <Link to="pageB">page B</Link>
        </li>
        <li>
          <Link to="pageC">page C</Link>
        </li>
      </ul>
    </>
  );
};

export default SNB;
