import { Link } from "react-router-dom";

export const Navigator = (): React.ReactElement => {
  return (
    <>
      <ul>
        <li>
          <Link to={"/"}>Page1</Link>
        </li>
        <li>
          <Link to={"/page2"}>Page2</Link>
        </li>
        <li>
          <Link to={"/page3"}>Page3</Link>
        </li>
      </ul>
    </>
  );
};
