export const login = (id, navigate) => {
  sessionStorage.setItem("id", id);
  navigate("/");
};

export const logout = (navigate) => {
  sessionStorage.removeItem("id");
  navigate("/login");
};

export const checkLoggedIn = () => {
  return !!sessionStorage.getItem("id");
};
