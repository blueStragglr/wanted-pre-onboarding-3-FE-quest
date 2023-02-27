import { useNavigate } from "react-router-dom";
import { HandleRouteFn } from "../types/route";

const useRoute = () => {
  const navigate = useNavigate();

  const handleRoute: HandleRouteFn = (route) => {
    navigate(route);
  };

  return [handleRoute];
};

export default useRoute;
