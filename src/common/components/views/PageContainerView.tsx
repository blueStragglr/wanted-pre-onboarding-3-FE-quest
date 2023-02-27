import styled from "@emotion/styled";
import { ReactNode } from "react";
import { flexCenter } from "../../styles/commonLayout";

const Container = styled.div`
  ${flexCenter}
  padding: 80px 50px;
  flex-grow: 1;
`;

const PageContainerView = ({ children }: { children: ReactNode }) => {
  return <Container>{children}</Container>;
};

export default PageContainerView;
