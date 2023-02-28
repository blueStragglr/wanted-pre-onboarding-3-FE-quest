import React from 'react';
import styles from './Content.module.css';
import { useParams } from 'react-router-dom';

export default function Content() {
  const { tabId } = useParams();
  return (
    <article className={styles.article}>
      <h1>{ tabId ? `This is ${tabId}!` : '탭을 클릭하면 각 페이지의 내용이 이곳에 표시됩니다.'} </h1>
    </article>
  );
}

