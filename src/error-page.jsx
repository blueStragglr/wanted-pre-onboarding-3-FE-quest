import { useRouteError } from "react-router-dom";

export default function ErrorPage() {
    const error = useRouteError();
    console.error(error);
    
    return (
        <div id="error-page">
            <h1>Oops!</h1>
            <p>Error has occured! Go back!!</p>
            <p>
                {error.statusText || error.message}
            </p>
        </div>
    )
}