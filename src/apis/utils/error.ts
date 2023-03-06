import { AxiosError } from 'axios';

export function handleError(e: unknown) {
  let message: string;
  if (e instanceof AxiosError && e.response?.data.message) {
    message = 'Unauthorized user';
  } else if (e instanceof Error) {
    message = e.message;
  } else {
    message = 'unknown error';
  }
  return message;
}
