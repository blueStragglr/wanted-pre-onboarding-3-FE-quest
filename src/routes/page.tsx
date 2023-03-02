import { useParams } from 'react-router';

function Page() {
  const isLoggedIn = false;
  const page = useParams().page;

  return <div>This is page {page}</div>;
}

export default Page;
