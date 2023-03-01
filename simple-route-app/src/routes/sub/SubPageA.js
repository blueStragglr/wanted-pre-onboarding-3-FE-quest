import { useEffect, useState } from "react";
import styles from "./subPage.module.css";

const SubPageA = (props) => {
  const [login] = useState(false);

  useEffect(() => {
    //로그인 여부를 상태관리 라이브러리로 확인
  }, []);

  return (
    <div className={styles.wrapper}>
      {login && <h1> A 페이지 입니다. </h1>}
      {!login && <h1> 로그인이 필요합니다. </h1>}
    </div>
  );
};

export default SubPageA;
