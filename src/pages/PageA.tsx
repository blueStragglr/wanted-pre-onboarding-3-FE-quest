import { PageTemplate } from "../templates/PageTemplate";
import { MainText } from "../atoms/MainText";

export function PageA() {
    return(
        <PageTemplate pageType="A" content={<MainText content="This is Page C" />}/>
    )
}