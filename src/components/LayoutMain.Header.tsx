import { useNavigate } from "react-router-dom";
import { path } from "../routes/router";
import { storage } from "../utils/storage";

export default function Header() {
  const navigator = useNavigate();
  return (
    <div className="fixed bg-white flex p-3 border-b border-black h-14 w-screen">
      <h1 className="text-2xl mr-4">Wanted Pre-onborading course</h1>
      <button
        type="button"
        onClick={() => {
          storage.remove("ACCESS_TOKEN");
          navigator(path.login);
        }}
      >
        logout
      </button>
    </div>
  );
}
