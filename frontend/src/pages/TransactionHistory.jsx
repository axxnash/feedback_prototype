import { useEffect, useState } from "react";
import { getTransactionHistory, updateTransactionStatus, verifyPickupCode } from "../api/transactionApi";
import StatusBadge from "../components/StatusBadge";

function TransactionHistory({ auth }) {
  const [transactions, setTransactions] = useState([]);
  const [error, setError] = useState("");
  const [message, setMessage] = useState("");
  const [pickupCodes, setPickupCodes] = useState({});

  const loadTransactions = async () => {
    try {
      const data = await getTransactionHistory();
      setTransactions(data.transactions);
    } catch (requestError) {
      setError(requestError.response?.data?.message || "Unable to load transactions.");
    }
  };

  useEffect(() => {
    if (auth.user.role === "ADMIN" || auth.user.approvalStatus === "APPROVED") {
      loadTransactions();
    }
  }, []);

  const handleStatusUpdate = async (transactionId, status) => {
    try {
      setError("");
      setMessage("");
      await updateTransactionStatus(transactionId, status);
      setMessage(`Transaction updated to ${status.replaceAll("_", " ")}.`);
      await loadTransactions();
    } catch (requestError) {
      setError(requestError.response?.data?.message || "Unable to update transaction status.");
    }
  };

  const handleVerifyPickupCode = async (transactionId) => {
    try {
      setError("");
      setMessage("");
      await verifyPickupCode(transactionId, pickupCodes[transactionId] || "");
      setMessage("Pickup code verified successfully.");
      await loadTransactions();
    } catch (requestError) {
      setError(requestError.response?.data?.message || "Unable to verify pickup code.");
    }
  };

  const canManage = (transaction) => auth.user.role === "ADMIN" || transaction.vendorId === auth.user.id;

  return (
    <main className="app-page">
      <div className="container-shell">
        <div className="page-header">
          <div className="space-y-3">
            <span className="page-kicker">Tracking</span>
            <div>
              <h1 className="page-title">Transaction History</h1>
              <p className="page-subtitle">Track donation claims from pickup through completion.</p>
            </div>
          </div>
        </div>

        {auth.user.role !== "ADMIN" && auth.user.approvalStatus !== "APPROVED" && (
          <div className="feedback-warning">
            Transaction access becomes available after your account is approved.
          </div>
        )}

        {message && <p className="mb-4 feedback-success">{message}</p>}
        {error && <p className="mb-4 feedback-error">{error}</p>}

        <div className="space-y-4">
        {transactions.map((transaction) => (
          <div key={transaction.id} className="card">
            <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
              <div className="space-y-1">
                <h2 className="text-xl font-semibold text-ink-900" style={{ fontFamily: "'Lora', Georgia, serif" }}>{transaction.listing?.foodName}</h2>
                <p className="text-sm text-ink-700">
                  Vendor: {transaction.vendor?.organizationName || transaction.vendor?.name}
                </p>
                <p className="text-sm text-ink-700">
                  Recipient: {transaction.recipient?.organizationName || transaction.recipient?.name}
                </p>
                <p className="text-sm text-ink-700">
                  Created: {new Date(transaction.createdAt).toLocaleString()}
                </p>
                {transaction.paymentStatus === "PAID_MOCK" && (
                  <p className="text-sm text-citrus-600">
                    Payment received: RM {Number(transaction.amountPaid || 0).toFixed(2)}
                  </p>
                )}
                {transaction.pickupCodeVerifiedAt && (
                  <p className="text-sm text-leaf-700">
                    Pickup verified: {new Date(transaction.pickupCodeVerifiedAt).toLocaleString()}
                  </p>
                )}
                {auth.user.id === transaction.recipientId && (
                  <p className="text-sm font-semibold text-citrus-600">
                    Show this pickup code at the shop: {transaction.listing?.pickupCode}
                  </p>
                )}
              </div>
              <StatusBadge status={transaction.status} />
            </div>

            {canManage(transaction) && (
              <div className="mt-4 flex flex-wrap gap-3">
                {!transaction.isPickupCodeVerified && (
                  <>
                    <input
                      className="input max-w-xs"
                      placeholder="Enter NGO pickup code"
                      value={pickupCodes[transaction.id] || ""}
                      onChange={(event) =>
                        setPickupCodes((prev) => ({ ...prev, [transaction.id]: event.target.value }))
                      }
                    />
                    <button type="button" className="btn-secondary py-2" onClick={() => handleVerifyPickupCode(transaction.id)}>
                      Verify code
                    </button>
                  </>
                )}
                <button type="button" className="btn-primary py-2" onClick={() => handleStatusUpdate(transaction.id, "COMPLETED")}>
                  Mark completed
                </button>
                <button type="button" className="btn-danger py-2" onClick={() => handleStatusUpdate(transaction.id, "CANCELLED")}>
                  Cancel
                </button>
              </div>
            )}
          </div>
        ))}
        </div>
      </div>
    </main>
  );
}

export default TransactionHistory;
