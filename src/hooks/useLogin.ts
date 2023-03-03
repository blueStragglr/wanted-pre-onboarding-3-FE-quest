import { loginApi } from "@/api/login";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

export const useLogin = () => {
    const navi = useNavigate();
    const { register, handleSubmit, getValues } = useForm<ILogin>({
        defaultValues: {
            email: "ID",
            password: "PWD",
        },
    });

    const onSubmit = () => {
        const config = getValues();
        if (!loginApi(config)) {
            alert("아이디(로그인 전용 아이디) 또는 비밀번호를 잘못 입력했습니다.\n입력하신 내용을 다시 확인해주세요.");
        }
        navi("/");
    };

    return { register, handleSubmit, onSubmit };
};
