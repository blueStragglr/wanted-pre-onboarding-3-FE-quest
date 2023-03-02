export const setIsLogin = () => {
  localStorage.setItem('isLogin', true);
};

export const removeIsLogin = () => {
  localStorage.removeItem('isLogin');
};

export const isLogin = () => localStorage.getItem('isLogin');
