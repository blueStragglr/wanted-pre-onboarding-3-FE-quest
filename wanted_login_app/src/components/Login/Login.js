import Input from "../Form/Input";
import SubmitButton from "../UI/SubmitButton";

const Login = () => {

	return (
		<article className="absolute flex flex-col items-center w-full h-full px-5 py-10 bg-white login">
<form className="flex flex-col w-1/2">
        <Input
          id="user_name" 
          label="Name" 
          type="text" 
        />
        <Input 
          id="password"
          label="Password"
          type="password"
        />
				<SubmitButton type="submit" text="Login"/>
      </form>
		</article>
	)
};

export default Login;