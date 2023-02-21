import styled from '@emotion/styled';
import {useCallback} from "react";
import {Link} from "react-router-dom";


/**
 *
 */
const Button = ({title}) => {
  const transTitle = title.toLowerCase();
  console.log(transTitle);
  return (
    <ButtonStyle>
      <Link className={'link'} to={`/${transTitle}`}>
        {title}
      </Link>
    </ButtonStyle>
  );
};

const ButtonStyle = styled.button`
  color: white;
  background-color: #444;
  border-radius: 8px;
  margin-bottom: 16px;
  .link {
    color: white;
    display: inline-block;
    padding: 8px 30px;
  }
`;


export default Button;
