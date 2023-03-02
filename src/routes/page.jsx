import { useParams } from "react-router-dom"
import { getPages, getPage } from "../pages";

export default function Page() {
    const param = useParams();
    let page = getPage(parseInt(param.pageId));
    return (
        <div className="page-content">
            <p>This is Page {page.title}!</p>
        </div>
    )
}

