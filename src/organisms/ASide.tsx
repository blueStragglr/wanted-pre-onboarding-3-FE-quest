import { useEffect } from 'react';
import { SideLinkText } from "../atoms/SideLinkText";

export type ASidePropsType = {
    pageType? : string,
}

export function ASide({pageType}: ASidePropsType) {
    return(
        <aside>
            <SideLinkText content="Page A" url="/A"/>
            <SideLinkText content="Page B" url="/B"/>
            <SideLinkText content="Page C" url="/C"/>
        </aside>
    )
}