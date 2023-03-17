import { useState } from 'react';
import { UserInfo } from 'types/user';
import styles from './Login.module.scss';

export const Login = () => {
  const [userInfo, setUserInfo] = useState<UserInfo>({ name: '' });

  const loginSubmitHandler = async () => {};

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Login with Mock API</h1>
      <form className={styles.form} onSubmit={loginSubmitHandler}>
        <label className={styles.label}>
          Username:
          <input className={styles.input} type='text' name='username' />
        </label>
        <label className={styles.label}>
          Password:
          <input className={styles.input} type='password' name='password' />
        </label>
        {/* submit 버튼 */}
        <button className={styles.submitButton} type='submit'>
          Submit
        </button>
      </form>
      <div>
        <h2>User info</h2>
        {/* useState의 userInfo를 렌더링 */}
        {JSON.stringify(userInfo)}
      </div>
    </div>
  );
};
