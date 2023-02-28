import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

export default function useAuthRedirect() {
  const accessFlag = sessionStorage.getItem('accessFlag');
  const navigate = useNavigate();

  useEffect(() => {
    if (!accessFlag) {
      alert('로그인이 필요합니다');
      navigate('/login');
    }
  });
}
