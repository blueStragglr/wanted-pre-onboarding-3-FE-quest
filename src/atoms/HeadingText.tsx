export type HeadingTextPropsType = {
    content : string,
}

export function HeadingText({content}:HeadingTextPropsType) {
    return(
        <h2>{content}</h2>
    )
}