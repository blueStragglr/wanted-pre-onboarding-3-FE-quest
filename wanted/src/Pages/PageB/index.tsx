import styled from 'styled-components';
import { pageLayout } from '../../Style/Common';

export default function PageB() {
  return (
    <S_Div>This is Page B!</S_Div>
  );
}

const S_Div = styled.div`
  ${pageLayout}
`;