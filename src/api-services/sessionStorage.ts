export function setUser(token_response: string, name: string) {
  sessionStorage.setItem("token_response", token_response);
  sessionStorage.setItem("user_name", name);
}

export function getUser(): { tokenResponse: string | null; userName: string | null } {
  return {
    tokenResponse: sessionStorage.getItem("token_response"),
    userName: sessionStorage.getItem("user_name"),
  };
}

export function clearUser() {
  sessionStorage.removeItem("token_response");
  sessionStorage.removeItem("user_name");
}
