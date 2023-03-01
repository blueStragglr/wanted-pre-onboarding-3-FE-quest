import { ASide } from "../molecules/ASide";
import { Header } from "../molecules/Header";
import { Main } from "../molecules/Main";

export type MainTemplatePropsType = {
    content:string,
}

export function MainTemplate({content}:MainTemplatePropsType) {
    return (
        <div>
            <Header />
            <main>
                <ASide />
                <Main content={`This is ${content}`}/>
            </main>
        </div>
    )
}