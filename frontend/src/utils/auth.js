const AUTH_KEY = "feedback_auth";

export function getStoredAuth() {
  const raw = localStorage.getItem(AUTH_KEY);
  return raw ? JSON.parse(raw) : null;
}

export function setStoredAuth(authData) {
  localStorage.setItem(AUTH_KEY, JSON.stringify(authData));
}

export function clearStoredAuth() {
  localStorage.removeItem(AUTH_KEY);
}

export function getToken() {
  return getStoredAuth()?.token || "";
}
