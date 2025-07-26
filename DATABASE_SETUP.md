# Database Setup Instructions

## If you haven't set up your database yet:

### 1. Create a Vercel Account and Deploy
1. Go to [vercel.com/signup](https://vercel.com/signup)
2. Connect with GitHub
3. Import your `nextjs-dashboard` repository
4. Deploy the project

### 2. Create PostgreSQL Database
1. In Vercel dashboard, go to Storage tab
2. Click "Create Database"
3. Choose PostgreSQL
4. Select your region (Washington D.C recommended)
5. Create the database

### 3. Set Up Environment Variables
1. In Vercel, go to your project's Storage tab
2. Click on your database
3. Go to `.env.local` tab
4. Click "Show secret" and "Copy Snippet"
5. In your local project, rename `.env.example` to `.env`
6. Paste the copied environment variables

### 4. Seed Your Database
1. Start your dev server: `pnpm run dev`
2. Visit `http://localhost:3000/seed`
3. You should see "Database seeded successfully"

### 5. Test Your Implementation
1. Visit `http://localhost:3000/dashboard`
2. You should see:
   - 4 dashboard cards with real data
   - Revenue chart showing 12 months
   - Latest 5 invoices with customer info

### 6. Test Database Query
1. Visit `http://localhost:3000/query`
2. You should see invoice data returned

## If you already have a database:
Your dashboard should now be working! The implementation includes:

✅ Parallel data fetching (faster performance)
✅ Revenue chart with real data
✅ Latest invoices with customer details
✅ Dashboard cards with totals and counts

## Troubleshooting:
- Make sure `.env` file exists and has valid database credentials
- Check that database is seeded by visiting `/seed`
- Verify connection by visiting `/query`
- Check terminal for any error messages
