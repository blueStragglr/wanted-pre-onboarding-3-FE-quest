import { PageTemplate } from "../templates/PageTemplate"
import { MainText } from "../atoms/MainText"

export function PageB() {
    return(
        <PageTemplate pageType="B" content={<MainText content="This is Page C" />}/>
    )
}