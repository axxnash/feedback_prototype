const CHECKOUT_KEY = "feedback_individual_checkout";

export function setStoredCheckout(items) {
  sessionStorage.setItem(CHECKOUT_KEY, JSON.stringify(items));
}

export function getStoredCheckout() {
  const raw = sessionStorage.getItem(CHECKOUT_KEY);
  return raw ? JSON.parse(raw) : [];
}

export function clearStoredCheckout() {
  sessionStorage.removeItem(CHECKOUT_KEY);
}
