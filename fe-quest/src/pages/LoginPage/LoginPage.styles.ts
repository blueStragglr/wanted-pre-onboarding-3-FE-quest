import { css } from "@emotion/css";

export const loginBoxStyle = css({
    backgroundColor: "#f5f5f5",
    padding: "40px",
    borderRadius: "20px",
});

export const loginInputBoxStyle = css({
    backgroundColor: "#fff",
    padding: "10px",
    marginBottom: "20px",
    borderRadius: "10px",
    input: {
        border: "none",
        marginLeft: "10px",
    }
});

export const loginButtonStyle = css({
    backgroundColor: "#fef156",
    padding: "10px",
    borderRadius: "10px",
    border: "1px solid #003d7a",
    width: "100%",
    '&:hover': {
        backgroundColor: "#3399FF",
    }
});
