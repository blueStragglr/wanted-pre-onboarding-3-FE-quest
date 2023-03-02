export type HeadingTextPropsType = {
    content : string,
}

export function HeadingText({content}:HeadingTextPropsType) {
    return(
        <h3>{content}</h3>
    )
}