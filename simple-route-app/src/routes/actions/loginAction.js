import { redirect } from "react-router-dom";

const loginAction = async ({ request }) => {
  //   const formData = await request.formData();
  const data = Object.fromEntries(await request.formData());
  console.log(data, request);
  //아이디 비밀번호를 확인하는 로직
  if (data) {
    //성공 시
    return redirect("/");
  } else {
    //실패 시
  }
};

export default loginAction;
