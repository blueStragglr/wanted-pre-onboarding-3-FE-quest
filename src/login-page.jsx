export default function LoginPage() {
    const onSubmitHandler = (event) => {
        event.preventDefault();
        alert("Coming soon");
    }

    return (
        <div id="login-page">
            <h2>로그인</h2>
            <form onSubmit={onSubmitHandler}>
                <label>Username <br/>
                    <input type="text"/>
                </label>
                <br/>
                <label>Password <br/>
                    <input type="password"/>
                </label>
                <br/>
                <input type="submit" value="Login"></input>
            </form>
        </div>
    )
}