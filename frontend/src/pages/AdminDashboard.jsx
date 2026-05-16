import { useEffect, useState } from "react";
import {
  getAdminListings,
  getAdminUsers,
  updateApprovalStatus
} from "../api/adminApi";
import { getTransactionHistory } from "../api/transactionApi";
import StatusBadge from "../components/StatusBadge";

function AdminDashboard() {
  const [users, setUsers] = useState([]);
  const [listings, setListings] = useState([]);
  const [transactions, setTransactions] = useState([]);
  const [error, setError] = useState("");
  const [listingError, setListingError] = useState("");
  const [transactionError, setTransactionError] = useState("");

  const loadDashboard = async () => {
    setError("");
    setListingError("");
    setTransactionError("");

    const [usersResult, listingsResult, transactionsResult] = await Promise.allSettled([
      getAdminUsers(),
      getAdminListings(),
      getTransactionHistory()
    ]);

    let dashboardError = "";

    if (usersResult.status === "fulfilled") {
      setUsers(usersResult.value.users);
    } else {
      dashboardError = usersResult.reason?.response?.data?.message || "Unable to load admin dashboard.";
    }

    if (listingsResult.status === "fulfilled") {
      setListings(listingsResult.value.listings);
    } else {
      setListings([]);
      setListingError(listingsResult.reason?.response?.data?.message || "Unable to load listings.");
    }

    if (transactionsResult.status === "fulfilled") {
      setTransactions(transactionsResult.value.transactions);
    } else {
      setTransactions([]);
      setTransactionError(transactionsResult.reason?.response?.data?.message || "Unable to load transactions.");
    }

    setError(dashboardError);
  };

  useEffect(() => {
    loadDashboard();
  }, []);

  const handleApproval = async (id, approvalStatus) => {
    try {
      await updateApprovalStatus(id, approvalStatus);
      await loadDashboard();
    } catch (requestError) {
      setError(requestError.response?.data?.message || "Unable to update approval.");
    }
  };

  return (
    <main className="app-page">
      <div className="container-shell space-y-8">
        <div className="page-header">
          <div className="space-y-3">
            <span className="page-kicker">Operations</span>
            <div>
              <h1 className="page-title">Admin Dashboard</h1>
              <p className="page-subtitle">Approve users and monitor platform activity.</p>
            </div>
          </div>
        </div>

        {error && <p className="feedback-error">{error}</p>}

        <section className="table-shell">
          <div className="mb-4 flex items-center justify-between">
            <h2 className="text-xl font-semibold text-ink-900" style={{ fontFamily: "'Lora', Georgia, serif" }}>User approvals</h2>
            <span className="text-sm text-ink-700">{users.length} users</span>
          </div>
          <table>
            <thead>
              <tr>
                <th>Name</th>
                <th>Role</th>
                <th>Organization</th>
                <th>Document</th>
                <th>Status</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user) => (
                <tr key={user.id}>
                  <td>{user.name}</td>
                  <td>{user.role}</td>
                  <td>{user.organizationName || "-"}</td>
                  <td>
                    {user.documentUrl ? (
                      <a
                        href={user.documentUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="font-semibold text-leaf-600 hover:text-leaf-700"
                      >
                        View document
                      </a>
                    ) : (
                      "-"
                    )}
                  </td>
                  <td><StatusBadge status={user.approvalStatus} /></td>
                  <td>
                    {user.role !== "ADMIN" && (
                      <div className="flex flex-wrap gap-2">
                        <button type="button" className="btn-secondary py-2" onClick={() => handleApproval(user.id, "APPROVED")}>
                          Approve
                        </button>
                        <button type="button" className="btn-primary py-2" onClick={() => handleApproval(user.id, "REJECTED")}>
                          Reject
                        </button>
                      </div>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </section>

        <section className="table-shell">
          <h2 className="mb-4 text-xl font-semibold text-ink-900" style={{ fontFamily: "'Lora', Georgia, serif" }}>All listings</h2>
          {listingError && <p className="mb-4 feedback-error">{listingError}</p>}
          <table>
            <thead>
              <tr>
                <th>Food</th>
                <th>Vendor</th>
                <th>Type</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {listings.map((listing) => (
                <tr key={listing.id}>
                  <td>{listing.foodName}</td>
                  <td>{listing.createdBy?.organizationName || listing.createdBy?.name}</td>
                  <td>{listing.foodType}</td>
                  <td><StatusBadge status={listing.status} /></td>
                </tr>
              ))}
            </tbody>
          </table>
        </section>

        <section className="table-shell">
          <h2 className="mb-4 text-xl font-semibold text-ink-900" style={{ fontFamily: "'Lora', Georgia, serif" }}>All transactions</h2>
          {transactionError && <p className="mb-4 feedback-error">{transactionError}</p>}
          <table>
            <thead>
              <tr>
                <th>Listing</th>
                <th>Vendor</th>
                <th>Recipient</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {transactions.map((transaction) => (
                <tr key={transaction.id}>
                  <td>{transaction.listing?.foodName}</td>
                  <td>{transaction.vendor?.organizationName || transaction.vendor?.name}</td>
                  <td>{transaction.recipient?.organizationName || transaction.recipient?.name}</td>
                  <td><StatusBadge status={transaction.status} /></td>
                </tr>
              ))}
            </tbody>
          </table>
        </section>
      </div>
    </main>
  );
}

export default AdminDashboard;
