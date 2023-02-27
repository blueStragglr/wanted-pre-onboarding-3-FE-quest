import styled from 'styled-components';

const PageA = () => {
  return (
    <Section>
      <div>
        <h2>
          Page <strong>A</strong>
        </h2>
      </div>
    </Section>
  );
};

const Section = styled.section`
  width: 100%;
  display: flex;
  justify-content: center;
  > div {
    margin-top: 40px;
    h2 {
      font-size: 24px;
      font-weight: 800;
      > strong {
        color: #f97316;
      }
    }
  }
`;

export default PageA;
