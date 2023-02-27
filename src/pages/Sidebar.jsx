import { useNavigate } from "react-router-dom";
import "../styles.scss";

const Sidebar = () => {
  const navigate = useNavigate();
  const handleClickSidebarMenu = (e) => {
    const id = e.target.id;
    navigate(`/${id}`);
  };

  return (
    <>
      <div className="Sidebar">
        <ul>
          <li onClick={handleClickSidebarMenu} id="public">
            Public Contents
          </li>
          <li onClick={handleClickSidebarMenu} id="private">
            Private Contents
          </li>
        </ul>
      </div>
    </>
  );
};

export default Sidebar;
