import styled from 'styled-components';

const SHeader = styled.header`
  display: flex;
  align-items: center;
  width: 100%;
  height: 10vh;
  padding-left: var(--spacing-xs);
  border-bottom: 2px solid var(--color-black);
  font-size: var(--text-lg);
  font-weight: 900;
  font-style: italic;
`;

export const Header = () => {
  return (
    <SHeader>
      Wanted Pre-onboarding course
    </SHeader>
  )
}