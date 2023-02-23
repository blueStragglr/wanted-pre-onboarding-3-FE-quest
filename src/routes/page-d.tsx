import { RequireAuth } from '../context/auth';

function PageD() {
  return (
    <RequireAuth>
      <article>
        <h1>This is page D</h1>
        <p>page d</p>
      </article>
    </RequireAuth>
  );
}

export default PageD;
