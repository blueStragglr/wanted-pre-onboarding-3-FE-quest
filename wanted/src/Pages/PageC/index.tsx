import styled from 'styled-components';
import { pageLayout } from '../../Style/Common';

export default function PageC() {
  return (
    <S_Div>This is Page C!</S_Div>
  );
}

const S_Div = styled.div`
  ${pageLayout}
`;