import React from 'react';
import styled from 'styled-components';

const Main = () => {
  return (
    <>
      <Section>
        <Container>
          <Banner
            src="https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fwanted-marketing-image.s3.ap-northeast-2.amazonaws.com%2Fcareer-biz-banner%2F20230215_total_event_web__2000x300.jpg&w=2000&q=100"
            alt="banner img"
          ></Banner>
        </Container>
      </Section>
    </>
  );
};
const Section = styled.section`
  width: 100vw;
  height: calc(100vh - 5rem);
`;
const Container = styled.div`
  margin-left: 20rem;
`;
const Banner = styled.img`
  width: 100%;
`;
export default Main;
