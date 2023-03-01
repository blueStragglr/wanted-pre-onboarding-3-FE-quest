import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <>
      <div>
        <Link to="page1">A</Link>
      </div>
      <div>
        <Link to="page2">B</Link>
      </div>
      <div>
        <Link to="page3">C</Link>
      </div>
    </>
  );
};

export default Nav;
