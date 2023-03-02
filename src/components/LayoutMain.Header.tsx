import { useNavigate } from "react-router-dom";
import { path } from "../routes/router";
import { storage } from "../utils/storage";

export default function Header() {
  const navigator = useNavigate();
  return (
    <>
      <h1>Wanted Pre-onborading course</h1>
      <button
        type="button"
        onClick={() => {
          storage.remove("ACCESS_TOKEN");
          navigator(path.login);
        }}
      >
        logout
      </button>
    </>
  );
}
