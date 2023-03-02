import { React } from 'react';
import { Link } from 'react-router-dom';
//TODO Link태크 반복문 돌릴 방법 찾기
const SNB = () => {
  return (
    <>
      <ul>
        <li>
          <Link to="pageA">pageA</Link>
        </li>
        <li>
          <Link to="pageB">pageB</Link>
        </li>
        <li>
          <Link to="pageC">pageC</Link>
        </li>
      </ul>
    </>
  );
};

export default SNB;
