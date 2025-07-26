import { Card } from '@/app/ui/dashboard/cards';
import RevenueChart from '@/app/ui/dashboard/revenue-chart';
import LatestInvoices from '@/app/ui/dashboard/latest-invoices';
import { lusitana } from '@/app/ui/fonts';

// Mock data for demonstration
const mockRevenue = [
  { month: 'Jan', revenue: 2000 },
  { month: 'Feb', revenue: 1800 },
  { month: 'Mar', revenue: 2200 },
  { month: 'Apr', revenue: 2500 },
  { month: 'May', revenue: 2300 },
  { month: 'Jun', revenue: 3200 },
  { month: 'Jul', revenue: 3500 },
  { month: 'Aug', revenue: 3700 },
  { month: 'Sep', revenue: 2500 },
  { month: 'Oct', revenue: 2800 },
  { month: 'Nov', revenue: 3000 },
  { month: 'Dec', revenue: 4800 }
];

const mockLatestInvoices = [
  { id: '1', amount: '$250.00', name: 'John Doe', email: 'john@example.com', image_url: '/customers/amy-burns.png' },
  { id: '2', amount: '$150.00', name: 'Jane Smith', email: 'jane@example.com', image_url: '/customers/balazs-orban.png' },
  { id: '3', amount: '$350.00', name: 'Bob Johnson', email: 'bob@example.com', image_url: '/customers/delba-de-oliveira.png' },
  { id: '4', amount: '$450.00', name: 'Alice Brown', email: 'alice@example.com', image_url: '/customers/lee-robinson.png' },
  { id: '5', amount: '$200.00', name: 'Charlie Wilson', email: 'charlie@example.com', image_url: '/customers/michael-novotny.png' }
];

// Simulate slow data fetch
async function fetchSlowRevenue() {
  console.log('Fetching revenue data...');
  await new Promise((resolve) => setTimeout(resolve, 3000));
  console.log('Data fetch completed after 3 seconds.');
  return mockRevenue;
}

// Simulate fast data fetch
async function fetchFastInvoices() {
  console.log('Fetching invoices data...');
  await new Promise((resolve) => setTimeout(resolve, 100));
  console.log('Invoices data fetched quickly.');
  return mockLatestInvoices;
}

// Simulate fast card data
async function fetchFastCardData() {
  console.log('Fetching card data...');
  await new Promise((resolve) => setTimeout(resolve, 200));
  console.log('Card data fetched quickly.');
  return {
    numberOfCustomers: 125,
    numberOfInvoices: 89,
    totalPaidInvoices: '$15,234.00',
    totalPendingInvoices: '$3,456.00',
  };
}

export default async function DemoPage() {
  // PARALLEL FETCHING - but one is still slow
  const revenuePromise = fetchSlowRevenue(); // 3 seconds
  const latestInvoicesPromise = fetchFastInvoices(); // 0.1 seconds
  const cardDataPromise = fetchFastCardData(); // 0.2 seconds

  // Wait for ALL requests to complete before showing ANY UI
  const [revenue, latestInvoices, cardData] = await Promise.all([
    revenuePromise,
    latestInvoicesPromise,
    cardDataPromise,
  ]);

  return (
    <main>
      <h1 className={`${lusitana.className} mb-4 text-xl md:text-2xl`}>
        Dashboard Demo (Shows Blocking Behavior)
      </h1>
      
      <div className="mb-4 p-4 bg-yellow-100 border border-yellow-400 rounded">
        <p className="text-sm text-yellow-800">
          <strong>Performance Demo:</strong> This page waits 3 seconds before showing ANY content, 
          even though most data loads quickly. Check your terminal for timing logs!
        </p>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        <Card title="Collected" value={cardData.totalPaidInvoices} type="collected" />
        <Card title="Pending" value={cardData.totalPendingInvoices} type="pending" />
        <Card title="Total Invoices" value={cardData.numberOfInvoices} type="invoices" />
        <Card title="Total Customers" value={cardData.numberOfCustomers} type="customers" />
      </div>
      
      <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-4 lg:grid-cols-8">
        <RevenueChart revenue={revenue} />
        <LatestInvoices latestInvoices={latestInvoices} />
      </div>
    </main>
  );
}
