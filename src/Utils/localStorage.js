export const getDataFromLocalStorage = (type) => {
  if (type === "cartItems") {
    return localStorage.getItem(type)
      ? JSON.parse(localStorage.getItem(type))
      : [];
  }
  if (type === "totalCount") {
    return localStorage.getItem(type)
      ? JSON.parse(localStorage.getItem(type))
      : 0;
  }
  if (type === "totalPrice") {
    return localStorage.getItem(type)
      ? JSON.parse(localStorage.getItem(type))
      : 0;
  }
};
export const getUserFromLocalStorage = () => {
  return localStorage.getItem("user")
    ? JSON.parse(localStorage.getItem("user"))
    : { userName: null, token: null };
};
