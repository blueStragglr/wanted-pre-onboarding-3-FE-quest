
import { useEffect, useState } from "react";

function Auth() {
    useEffect(() => {
        const id = localStorage.getItem("id");
        if (id) {
            return;
        } else if (!id) {
            alert("로그인이 필요한 페이지입니다.");
            window.location.href = "/login";
        }
    }, []);

    return;
}

export default Auth;