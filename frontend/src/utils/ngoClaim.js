const NGO_CLAIM_KEY = "feedback_ngo_claim";

export function setStoredNgoClaim(claim) {
  sessionStorage.setItem(NGO_CLAIM_KEY, JSON.stringify(claim));
}

export function getStoredNgoClaim() {
  const raw = sessionStorage.getItem(NGO_CLAIM_KEY);
  return raw ? JSON.parse(raw) : null;
}

export function clearStoredNgoClaim() {
  sessionStorage.removeItem(NGO_CLAIM_KEY);
}
