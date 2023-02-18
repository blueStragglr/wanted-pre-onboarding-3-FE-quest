import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { PATH } from '@/constants';
import { useNavigate } from 'react-router-dom';
const LoginForm = () => {
  const navigate = useNavigate();
  const gotoJoin = () => navigate(`${PATH.AUTH}/${PATH.JOIN}`);
  const gotoMain = () => navigate(PATH.MAIN);

  return (
    <>
      <Box component="form" noValidate autoComplete="off">
        <div>
          <TextField
            fullWidth
            required
            id="outlined-required"
            label="아이디"
            sx={{ marginBottom: 2 }}
          />
          <TextField
            fullWidth
            required
            id="outlined-password-input"
            label="비밀번호"
            type="password"
            sx={{ marginBottom: 4 }}
          />
        </div>
        <div className="mb-2">
          <Button fullWidth variant="contained" onClick={gotoMain}>
            로그인
          </Button>
        </div>
      </Box>
      <div>
        <Button fullWidth variant="outlined" onClick={gotoJoin}>
          회원가입
        </Button>
      </div>
    </>
  );
};

export default LoginForm;
