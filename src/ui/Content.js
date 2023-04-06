import React from "react";
import styled from "styled-components";

const Content = props => {
	return <Wrapper>This is {props.page} page !</Wrapper>;
};

const Wrapper = styled.div`
	grid-area: content;
	margin: auto;
	height: 500px;
	font-size: 80px;
	color: #434343;
`;

export default Content;
