import { useParams } from 'react-router-dom';

const GreetingPage = () => {
  const { id } = useParams();
  return <div className="content-page">Hello this is page {id}</div>;
};

export default GreetingPage;
