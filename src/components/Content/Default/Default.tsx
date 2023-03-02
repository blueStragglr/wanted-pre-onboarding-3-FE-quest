import { useParams } from 'react-router-dom';
import styles from './Default.module.scss';

export const Default = () => {
  const params = useParams();
  const id = params.id;
  const text = id ? (
    `This is Page ${id?.slice(-1).toUpperCase()}!`
  ) : (
    <div className={styles.home}>
      <p>Home 입니다!</p>
      <br />
      <p>탭을 눌러 다른 페이지로 이동해주세요 :)</p>
    </div>
  );

  return <div className={styles.container}>{text}</div>;
};
