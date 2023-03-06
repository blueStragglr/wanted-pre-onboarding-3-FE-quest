import { apiClient } from '../client';
import { SignInRequestProps, SignUpRequestProps, SignResponseProps } from './auth.types';
import { handleError } from '../utils/error';
import { toast } from 'react-toastify';

export async function signUp(data: SignUpRequestProps) {
  try {
    await apiClient.post('/auth/signup', data);
    toast.success('회원가입 완료');
  } catch (e: unknown) {
    let message = handleError(e);
    toast.error(message);
  }
}

export async function signIn(data: SignInRequestProps) {
  try {
    await apiClient.post('/auth/signin', data);
    toast.success('로그인 성공');
  } catch (e: unknown) {
    let message = handleError(e);
    toast.error(message);
  }
}
