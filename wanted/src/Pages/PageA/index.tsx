import styled from 'styled-components';
import { pageLayout } from '../../Style/Common';

export default function PageA() {
  return <S_Div>This is Page A!</S_Div>;
}

const S_Div = styled.div`
  ${pageLayout}
`;
