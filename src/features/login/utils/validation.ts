export const checkIdInput = (id: string) => {
  return id.length >= 8;
};

export const checkPasswordInput = (password: string) => {
  const passwordExp = /(?=.*[a-zA-ZS])(?=.*?[#?!@$%^&*-]).{8,20}/;

  return passwordExp.test(password);
};
