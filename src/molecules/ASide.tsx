import { SideLinkText } from "../atoms/SideLinkText";

export function ASide() {
    return(
        <aside>
            <SideLinkText content="Page A" url="/A"/>
            <SideLinkText content="Page B" url="/B"/>
            <SideLinkText content="Page C" url="/C"/>
        </aside>
    )
}