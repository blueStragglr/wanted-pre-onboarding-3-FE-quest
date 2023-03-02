import { useEffect, useState } from "react";

function useIsLogin() {
    useEffect(() => {
        const myId = localStorage.getItem("id");
        if (myId) {
            return;
        } else if (!myId) {
            alert("Please Login");
            window.location.href = "/login";
        }
    }, []);

    return;
}

export default useIsLogin;