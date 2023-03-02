import React from 'react';
import styles from './Aside.module.css';
import { useNavigate } from 'react-router-dom';

export default function Aside() {
  const PageList = ['A', 'B', 'C'];
  const navigate = useNavigate();
  // 리스트들을 onClick 할 경우, 인라인 함수로 인자를 Page A 이런식으로 보내주기
  return (
    <aside className={styles.aside}>
      <ul>
        { PageList.map((page) => {
          return (
            <li 
            key={`Page ${page}`} 
            className={styles.page} 
            onClick={() => navigate(`/Page ${page}`)
            }>
              Page {page}
            </li>
          )
        }) }
      </ul>
    </aside>
  );
}

