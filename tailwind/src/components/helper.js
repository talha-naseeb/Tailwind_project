export const userLoginHandler = (data, setAuthenticated, setLoginError) => {
  const storedUserData = JSON.parse(localStorage.getItem("userData")) || [];
  const user = storedUserData.find((user) => user.email === data.email && user.password === data.password);

  if (user) {
    localStorage.setItem("user", JSON.stringify(user));
    localStorage.setItem("token", user.email);

    setAuthenticated(true);
  } else {
    setLoginError(true);
  }
};
