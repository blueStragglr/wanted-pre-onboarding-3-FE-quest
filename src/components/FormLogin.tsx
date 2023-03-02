import { useNavigate } from "react-router-dom";
import { storage } from "../utils/storage";

export default function FormLogin() {
  const navigator = useNavigate();

  return (
    <>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          storage.set("ACCESS_TOKEN", "temp");
          navigator("/");
        }}
      >
        <label>
          id
          <input type="email" name="id" />
        </label>
        <label>
          password
          <input type="password" name="password" />
        </label>
        <button type="submit">login</button>
      </form>
    </>
  );
}
