import styled from "styled-components"

const BaseLabel = styled.label`
    font-size: 1.5rem;
    font-weight: bold;
    margin: 0 0 10px 0;
`

const BaseInput = styled.input.attrs(props => ({
    type: props.types,
    size: props.small ? 5 : (props.big ? 50 : undefined),
    placeholder: props.placeholders,
    autoFocus: props.focus === "true" ? true : false,
  }))`
  border-radius: 0.5rem;
  margin: 10px 10px 0 10px;
  font-size: 1.5rem;
  border: 3px solid #1E3269;
  ::placeholder {
    color : #2828CD
  }
`

const InputBase = ({types, names, content, isFocus}) => {
    return (
    <>
        <BaseLabel htmlFor={names}></BaseLabel>
        <BaseInput types={types} id={names} name={names} placeholders={content} focus={isFocus} required></BaseInput><br />
    </>
    )

}

export default InputBase;