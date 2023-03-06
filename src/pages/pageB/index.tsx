import styled from 'styled-components';

const PageB = () => {
  return (
    <Section>
      <div>
        <h2>
          Page <strong>B</strong>
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
        color: #22c55e;
      }
    }
  }
`;

export default PageB;
