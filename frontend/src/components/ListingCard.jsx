import StatusBadge from "./StatusBadge";

function ListingCard({ listing, actionLabel, onAction, disabled }) {
  return (
    <article className="card flex h-full flex-col gap-4">
      {listing.imageUrl ? (
        <img
          src={listing.imageUrl}
          alt={listing.foodName}
          className="h-44 w-full rounded-2xl object-cover"
        />
      ) : (
        <div className="flex h-44 items-center justify-center rounded-2xl bg-sand-100 text-sm text-ink-700">
          No image uploaded
        </div>
      )}

      <div className="flex items-start justify-between gap-3">
        <div>
          <h3 className="text-lg font-semibold text-ink-900" style={{ fontFamily: "'Lora', Georgia, serif" }}>
            {listing.foodName}
          </h3>
          <p className="text-sm text-citrus-600">{listing.foodType}</p>
        </div>
        <StatusBadge status={listing.status} />
      </div>

      <div className="space-y-2 text-sm text-ink-700">
<<<<<<< HEAD
        <p>{listing.description}</p>
=======
>>>>>>> 9a07e37 (Initial local commit)
        <p><span className="font-semibold">Category:</span> {listing.category}</p>
        <p><span className="font-semibold">Mode:</span> {listing.listingType === "DISCOUNTED" ? "Discounted" : "Donation"}</p>
        {listing.listingType === "DISCOUNTED" && (
          <p>
            <span className="font-semibold">Price:</span> RM {Number(listing.originalPrice || listing.price || 0).toFixed(2)}
<<<<<<< HEAD
            {"  "}
            <span className="font-semibold">Discount:</span> {Number(listing.discountPercentage || 0).toFixed(0)}%
            {"  "}
            <span className="font-semibold">Now:</span> RM {Number(listing.price || 0).toFixed(2)}
=======
            <div>
            <span className="font-semibold">Discounted Price:</span> RM {Number(listing.price || 0).toFixed(2)}
            </div>
>>>>>>> 9a07e37 (Initial local commit)
          </p>
        )}
        <p><span className="font-semibold">Quantity:</span> {listing.quantity}</p>
        <p><span className="font-semibold">Pickup:</span> {listing.pickupLocation}</p>
        <p><span className="font-semibold">Expiry:</span> {new Date(listing.expiryDateTime).toLocaleString()}</p>
        {listing.distanceKm !== undefined && (
          <p><span className="font-semibold">Distance:</span> {listing.distanceKm.toFixed(2)} km</p>
        )}
      </div>

      {actionLabel && (
        <button type="button" className="btn-primary mt-auto" onClick={() => onAction?.(listing)} disabled={disabled}>
          {actionLabel}
        </button>
      )}
    </article>
  );
}

export default ListingCard;
