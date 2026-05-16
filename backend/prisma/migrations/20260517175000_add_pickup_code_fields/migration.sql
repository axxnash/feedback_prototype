ALTER TABLE "FoodListing"
ADD COLUMN "pickupCode" TEXT;

UPDATE "FoodListing"
SET "pickupCode" = 'LEGACY-' || "id"
WHERE "pickupCode" IS NULL;

ALTER TABLE "FoodListing"
ALTER COLUMN "pickupCode" SET NOT NULL;

ALTER TABLE "Transaction"
ADD COLUMN "isPickupCodeVerified" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN "pickupCodeVerifiedAt" TIMESTAMP(3);
