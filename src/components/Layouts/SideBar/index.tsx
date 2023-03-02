import { useNavigate } from 'react-router-dom'
import * as S from './styles'

const SideBar = () => {
  const navigate = useNavigate()
  const navigationHandler = (e: React.MouseEvent<HTMLButtonElement>) => {}
  return (
    <S.sidebarContainer>
      <div>
        <button type='button'>Site A</button>
        <button type='button'>Site B</button>
        <button type='button'>Site C</button>
      </div>
    </S.sidebarContainer>
  )
}

export default SideBar
