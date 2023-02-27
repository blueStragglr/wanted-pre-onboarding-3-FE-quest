import { redirect } from "react-router-dom";

const loginAction = async ({ request }) => {
  const formData = await request.formData();
  console.log(formData, request);
  return redirect("/");
};

export default loginAction;
