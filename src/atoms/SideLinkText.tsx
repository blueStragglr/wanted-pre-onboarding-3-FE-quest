export type SideLinkTextPropsType = {
    content : string,
    url: string,
    highlightColor? : string
}

export function SideLinkText({content, url, highlightColor}:SideLinkTextPropsType) {
    return(
        <a href={url} style={{color:highlightColor?highlightColor:"black"}}>{content}</a>
    )
}