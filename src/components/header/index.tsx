import { Link } from "react-router-dom"
import * as S from "./styles"

const Header = () => {
  return (
    <S.Base>
      <Link to="/">
        <h1>Wanted Pre-onboarding course</h1>
      </Link>
    </S.Base>
  )
}

export default Header
