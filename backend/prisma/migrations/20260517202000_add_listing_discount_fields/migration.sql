ALTER TABLE "FoodListing"
ADD COLUMN "originalPrice" DOUBLE PRECISION,
ADD COLUMN "discountPercentage" DOUBLE PRECISION;

UPDATE "FoodListing"
SET "originalPrice" = "price",
    "discountPercentage" = 0
WHERE "listingType" = 'DISCOUNTED' AND "price" IS NOT NULL;
