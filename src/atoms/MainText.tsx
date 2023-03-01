export type MainTextPropsType = {
    content : string,
}

export function MainText({content}:MainTextPropsType) {
    return(
        <span>{content}</span>
    )
}