export type SideLinkTextPropsType = {
    content : string,
    url: string,
}

export function SideLinkText({content, url}:SideLinkTextPropsType) {
    return(
        <a href={url}>{content}</a>
    )
}