import { useContext } from "react";
import { UserContext } from "../contexts/UserContext";
import "../styles/pages/page.css";

export const Page1 = (): React.ReactElement => {
  const { user } = useContext(UserContext);
  return (
    <div className="page">
      <h1 className="page_text">
        Hello{user ? ` ${user}` : ""}, this is page 1
      </h1>
    </div>
  );
};
