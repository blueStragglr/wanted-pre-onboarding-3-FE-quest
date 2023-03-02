import { MainText } from "../atoms/MainText"
import { PageTemplate } from "../templates/PageTemplate"

export function PageC() {
    return(
        <PageTemplate pageType="C" content={<MainText content="This is Page C" />}/>
    )
}