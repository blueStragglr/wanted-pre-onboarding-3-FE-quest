import { Link } from "react-router-dom";
import { DefaultButton } from "../General";
import { Container } from "./style";
import { Box } from "./style";
const Header = () => {
  return (
    <>
      <Container>
        <Box>
          <div>Wanted Pre-onboarding course</div>
        </Box>
        <Box className="loginblank">
          <Link to="/login">
            <DefaultButton text="login" />
          </Link>
        </Box>
      </Container>
    </>
  );
};
export default Header;
