import { MainText } from "../atoms/MainText";

export type MainPropsType = {
    content: string,
}

export function Main({content}: MainPropsType ) {
    return(
        <main>
            <MainText content={content} />
        </main>
    )
}