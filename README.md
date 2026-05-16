# FeedBack Prototype

FeedBack is a prototype food donation and matching platform that connects vendors with NGOs to reduce food waste. This repo contains:

- `backend/` - Express, Prisma, PostgreSQL, JWT auth, role-based access, Cloudinary upload support
- `frontend/` - React, Vite, Tailwind UI for vendor, NGO, and admin workflows

## Core Workflow

1. Vendor or NGO registers and uploads verification documents.
2. Admin reviews the account and changes approval from `PENDING` to `APPROVED`.
3. Vendor creates food listings.
4. NGO browses available or nearby listings and claims one.
5. The claim creates a transaction record.
6. Vendor or admin updates the transaction to `PICKED_UP` and `COMPLETED`.

## Backend Setup

1. Open a terminal in `backend/`
2. Install dependencies:

```bash
npm install
```

3. Copy `.env.example` to `.env` and update:
   - `DATABASE_URL`
   - `DIRECT_URL`
   - `JWT_SECRET`
   - Cloudinary keys if you want file uploads enabled

4. Run Prisma migration:

```bash
npx prisma migrate dev
```

5. Seed the admin account:

```bash
npx prisma db seed
```

6. Start the backend:

```bash
npm run dev
```

Backend default URL: `http://localhost:5000`

Prisma 7 reads the database connection for CLI commands from [backend/prisma.config.ts](/abs/path/c:/Users/abina/feedback_prototype/backend/prisma.config.ts:1), which loads `DIRECT_URL` from `backend/.env`. The running app uses `DATABASE_URL`.

For Neon:

- `DATABASE_URL` should be the pooled Neon host with `-pooler` in the hostname.
- `DIRECT_URL` should be the direct Neon host without `-pooler`.
- Both URLs should include `?sslmode=require`.

### Seeded Admin

- Email: `admin@feedback.local`
- Password: `Admin123!`

## Frontend Setup

1. Open a second terminal in `frontend/`
2. Install dependencies:

```bash
npm install
```

3. Copy `.env.example` to `.env`

4. Start the frontend:

```bash
npm run dev
```

Frontend default URL: `http://localhost:5173`

## API Summary

### Auth

- `POST /api/auth/register`
- `POST /api/auth/login`
- `GET /api/auth/me`

### Listings

- `POST /api/listings`
- `GET /api/listings`
- `GET /api/listings/:id`
- `GET /api/listings/vendor/my-listings`
- `PUT /api/listings/:id`
- `DELETE /api/listings/:id`

### Claims

- `POST /api/claims/:listingId`

### Transactions

- `GET /api/transactions/history`
- `PUT /api/transactions/:transactionId/status`

### Admin

- `GET /api/admin/users`
- `PUT /api/admin/users/:id/approval`
- `GET /api/admin/listings`
- `GET /api/admin/transactions`

### Matching

- `GET /api/matching/nearby?latitude=&longitude=&radius=`
- `POST /api/matching/ai`

## Database Models

- `User`
- `FoodListing`
- `Transaction`

Enums included in Prisma:

- `Role`
- `ApprovalStatus`
- `ListingStatus`
- `TransactionStatus`

## Notes

- This is intentionally a prototype, not a full production system.
- Payments, rider logistics, chat, and real-time delivery tracking are not included.
- The AI recommendation route uses simple rule-based logic for nearest, earliest-expiry, and food-type relevance.
- Cloudinary uploads are optional at runtime, but the API already supports document and listing image uploads when credentials are configured.
