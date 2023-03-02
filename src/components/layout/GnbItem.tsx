import { NavLink } from "react-router-dom";
import styled from "styled-components";

const GnbLink = styled(NavLink)`
  display: block;
  font-size: 20px;
  color: ${(props) => props.theme.darkGray};
  margin-top: 10px;

  &.active {
    color: ${(props) => props.theme.pointColor};
  }
`;

interface IGnbItem {
  path: string;
  label: string;
}

const GnbItem = ({ path, label }: IGnbItem) => {
  return (
    <div>
      <GnbLink to={path}>{label}</GnbLink>
    </div>
  );
};

export default GnbItem;
