export const setToLocalStorage = (key, token) => {
    if (!key || typeof window === "undefined") {
      return "";
    }
    return localStorage.setItem(key, token);
  };
  
  export const getFormLocalStorage = (key) => {
    if (!key || typeof window === "undefined") {
      return "";
    }
    return localStorage.getItem(key);
  };
  export const removeFormLocalStorage = (key) => {
    if (!key || typeof window === "undefined") {
      return "";
    }
    return localStorage.removeItem(key);
  };
  