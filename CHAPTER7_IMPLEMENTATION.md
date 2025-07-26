# Chapter 7: Fetching Data - Implementation Guide

## Overview
This chapter covers different approaches to fetching data in Next.js applications and demonstrates how to avoid request waterfalls.

## Key Concepts Implemented

### 1. Data Fetching Approaches
- **API Layer**: For third-party services or client-side data fetching
- **Direct Database Queries**: Using SQL with React Server Components
- **Server Components**: Fetch data on the server without exposing secrets

### 2. Request Waterfalls vs Parallel Fetching

#### ❌ Waterfall Approach (Sequential)
```typescript
// Each request waits for the previous one to complete
const revenue = await fetchRevenue(); // 1st: Wait 2s
const latestInvoices = await fetchLatestInvoices(); // 2nd: Wait 1s 
const cardData = await fetchCardData(); // 3rd: Wait 1.5s
// Total time: 4.5s
```

#### ✅ Parallel Fetching (Optimized)
```typescript
// All requests start simultaneously
const revenuePromise = fetchRevenue();
const latestInvoicesPromise = fetchLatestInvoices();
const cardDataPromise = fetchCardData();

const [revenue, latestInvoices, cardData] = await Promise.all([
  revenuePromise,
  latestInvoicesPromise,
  cardDataPromise,
]);
// Total time: 2s (longest individual request)
```

### 3. Components Updated

#### Dashboard Page (`/app/dashboard/page.tsx`)
- Implemented parallel data fetching
- Added proper TypeScript typing
- Used async Server Component

#### Revenue Chart (`/app/ui/dashboard/revenue-chart.tsx`)
- Uncommented chart rendering code
- Displays 12 months of revenue data
- Handles empty data states

#### Latest Invoices (`/app/ui/dashboard/latest-invoices.tsx`)
- Uncommented invoice list rendering
- Shows last 5 invoices with customer details
- Responsive design with profile pictures

### 4. Database Functions Used

From `/app/lib/data.ts`:

- `fetchRevenue()`: Gets monthly revenue data
- `fetchLatestInvoices()`: Gets 5 most recent invoices with customer info
- `fetchCardData()`: Gets summary statistics (totals, counts)

### 5. SQL Examples

```sql
-- Latest Invoices Query
SELECT invoices.amount, customers.name, customers.image_url, customers.email, invoices.id
FROM invoices
JOIN customers ON invoices.customer_id = customers.id
ORDER BY invoices.date DESC
LIMIT 5;

-- Card Data Queries
SELECT COUNT(*) FROM invoices;
SELECT COUNT(*) FROM customers;
SELECT
  SUM(CASE WHEN status = 'paid' THEN amount ELSE 0 END) AS "paid",
  SUM(CASE WHEN status = 'pending' THEN amount ELSE 0 END) AS "pending"
FROM invoices;
```

## Next Steps

1. **Set up your database** (if not done):
   - Create `.env` file with Vercel database credentials
   - Visit `/seed` to populate database
   - Visit `/query` to test connection

2. **Test the implementation**:
   - Start dev server: `pnpm run dev`
   - Navigate to `/dashboard`
   - Check for all 4 cards, revenue chart, and latest invoices

3. **Performance considerations**:
   - The parallel fetching reduces total load time
   - Server Components keep database queries secure
   - Static rendering can be addressed in the next chapter

## Files Modified
- `/app/dashboard/page.tsx` - Main dashboard with parallel fetching
- `/app/ui/dashboard/revenue-chart.tsx` - Uncommented chart code
- `/app/ui/dashboard/latest-invoices.tsx` - Uncommented invoice list
- `/app/dashboard/page-sequential.tsx` - Example of waterfall approach

## Quiz Answers
1. **When not to query database directly**: A - When fetching data on the client
2. **Server Components advantage**: B - Query database directly without API layer
3. **SQL capability**: B - Fetch and manipulate specific data
