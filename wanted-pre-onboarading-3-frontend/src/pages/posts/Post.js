import { useLocation } from "react-router-dom";
import styled from "styled-components";

const Post = () => {
    const location = useLocation();
    const { state } = location;

    return (
        <PostWrapper>
            <PostContent>This is Post {state}</PostContent>
        </PostWrapper>
    );
};

export default Post;

const PostWrapper = styled.section`
    display: flex;
    align-items: center;
    justify-content: center;
    width: calc(100vw - 15rem);
    height: calc(100vh - 5rem);
    margin-left: 15rem;
    margin-top: 5rem;
`;

const PostContent = styled.h1`
    color: skyblue;
    font-size: 1.7rem;
    font-weight: bold;
`;
