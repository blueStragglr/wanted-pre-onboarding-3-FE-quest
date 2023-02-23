import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const Aside = ({ pageList }) => {
  const { pageId } = useParams();
  const navigate = useNavigate();
  let isLogin = Boolean(localStorage.getItem('isLogin'));

  return (
    <ul className='aside'>
      {pageList?.map((page) => {
        return (
          <li
            key={page.id}
            // 클릭된 페이지 색상 변경
            style={{
              color: pageId === page.id && 'dodgerblue',
            }}
          >
            <button
              onClick={() => {
                // 로그인이 필요한 페이지인지
                if (page.needLogin) {
                  // 로그인 여부
                  if (isLogin) {
                    navigate(`/${page.id}`);
                  } else {
                    window.alert('로그인이 필요한 페이지입니다.');
                  }
                } else {
                  navigate(`/${page.id}`);
                }
              }}
            >
              {page.page}
            </button>
          </li>
        );
      })}
    </ul>
  );
};

export default Aside;
