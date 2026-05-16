function StatusBadge({ status }) {
  const styles = {
    AVAILABLE: "bg-leaf-100 text-leaf-700",
    APPROVED: "bg-leaf-100 text-leaf-700",
    CLAIMED: "bg-citrus-100 text-citrus-600",
    PICKED_UP: "bg-sand-100 text-ink-900",
    COMPLETED: "bg-leaf-50 text-leaf-700",
    CANCELLED: "bg-red-50 text-red-700",
    PENDING: "bg-citrus-50 text-citrus-600",
    REJECTED: "bg-red-50 text-red-700"
  };

  return (
    <span className={`inline-flex rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-[0.08em] ${styles[status] || "bg-sand-100 text-ink-700"}`}>
      {status?.replaceAll("_", " ")}
    </span>
  );
}

export default StatusBadge;
