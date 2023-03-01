import styled from 'styled-components';

const SHeader = styled.header`
  font-size: var(--text-lg);
  font-weight: 900;
  font-style: italic;
  padding: var(--spacing-sm);
  border-bottom: 2px solid black;
`;

export const Header = () => {
  return (
    <SHeader>
      Wanted Pre-onboarding course
    </SHeader>
  )
}