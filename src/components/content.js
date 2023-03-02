import styled from 'styled-components';

const SContent = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-grow: 1;
  font-size: var(--text-xxl);
  font-weight: 900;
  color: var(--color-blue);
`;

export const Content = ({ text }) => {
  return (
    <SContent>
      { text ? `This is Page ${text}!` : 'welcome to my page'}
    </SContent>
  )
}