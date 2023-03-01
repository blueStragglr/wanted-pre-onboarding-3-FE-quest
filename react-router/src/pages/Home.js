import { Link, Outlet } from 'react-router-dom';

const Home = () => {
    return (
      <div>
        <h2>Wanted Pre-onboarding course</h2>
        {/* <p>가장 먼저 보여지는 페이지입니다.</p> */}
        <ul>
            <div><Link to="PageA">Page A</Link></div>
            <div><Link to="PageB">Page B</Link></div>
            <div><Link to="PageC">Page C</Link></div>
        </ul>
        <Outlet/>
      </div>
    );
  };
  
  export default Home;