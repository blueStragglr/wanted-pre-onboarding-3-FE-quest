import React from 'react';
import styled from 'styled-components';
function Page1() {
  return (
    <>
      <Section>
        <Container>
          <Video autoPlay loop playsInline>
            <source
              src="https://s3.ap-northeast-2.amazonaws.com/static.wanted.co.kr/images/wantedplus_event/preonboarding/v2/challenge/2023_03/backend_web.mp4"
              type="video/mp4"
            />
          </Video>
        </Container>
      </Section>
    </>
  );
}
const Section = styled.section`
  width: 100vw;
  height: calc(100vh - 5rem);
`;
const Container = styled.div`
  margin-left: 20rem;
`;
const Video = styled.video`
  width: 100%;
  height: 100%;
`;
export default Page1;
