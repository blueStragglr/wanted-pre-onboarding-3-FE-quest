import { ReactNode } from "react";
import { ASide } from "../organisms/ASide";
import { Header } from "../molecules/Header";
import { Main } from "../molecules/Main";

export type PageTemplatePropsType = {
    pageType: string,
    content:ReactNode,
}

export function PageTemplate({pageType ,content}:PageTemplatePropsType) {
    return (
        <div>
            <Header />
            <main>
                <ASide pageType={pageType} />
                <Main content={content}/>
            </main>
        </div>
    )
}