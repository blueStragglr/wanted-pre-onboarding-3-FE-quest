import styled from 'styled-components';

const PageC = () => {
  return (
    <Section>
      <div>
        <h2>
          Page <strong>C</strong>
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
        color: #3b82f6;
      }
    }
  }
`;

export default PageC;
