import styled from '@emotion/styled';
import {Link} from "react-router-dom";


/**
 *
 */
const Button = ({title, onClick}) => {
  const transTitle = title.toLowerCase();
  return (
    <ButtonStyle onClick={onClick}>
      <Link className={'link'} to={`${transTitle}`}>
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
  padding: 8px 30px;
  .link {
    color: white;
    display: inline-block;
    padding: 8px 30px;
  }
`;


export default Button;
