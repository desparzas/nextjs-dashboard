import { Suspense } from 'react';
import { lusitana } from '@/app/ui/fonts';
import { 
  RevenueChartSkeleton, 
  LatestInvoicesSkeleton,
  CardsSkeleton 
} from '@/app/ui/skeletons';

// Mock data and components for streaming demo
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

const mockInvoices = [
  { id: '1', amount: '$250.00', name: 'John Doe', email: 'john@example.com', image_url: '/customers/amy-burns.png' },
  { id: '2', amount: '$150.00', name: 'Jane Smith', email: 'jane@example.com', image_url: '/customers/balazs-orban.png' },
  { id: '3', amount: '$350.00', name: 'Bob Johnson', email: 'bob@example.com', image_url: '/customers/delba-de-oliveira.png' },
  { id: '4', amount: '$450.00', name: 'Alice Brown', email: 'alice@example.com', image_url: '/customers/lee-robinson.png' },
  { id: '5', amount: '$200.00', name: 'Charlie Wilson', email: 'charlie@example.com', image_url: '/customers/michael-novotny.png' }
];

// Fast-loading cards component
async function StreamingCards() {
  // Simulate fast API call
  console.log('Fetching card data...');
  await new Promise(resolve => setTimeout(resolve, 200));
  console.log('Card data fetched quickly!');

  return (
    <>
      <div className="rounded-xl bg-gray-50 p-2 shadow-sm">
        <div className="flex p-4">
          <div className="h-5 w-5 rounded-md bg-blue-600" />
          <h3 className="ml-2 text-sm font-medium">Collected</h3>
        </div>
        <p className="truncate rounded-xl bg-white px-4 py-8 text-center text-2xl">$15,234.00</p>
      </div>
      
      <div className="rounded-xl bg-gray-50 p-2 shadow-sm">
        <div className="flex p-4">
          <div className="h-5 w-5 rounded-md bg-yellow-600" />
          <h3 className="ml-2 text-sm font-medium">Pending</h3>
        </div>
        <p className="truncate rounded-xl bg-white px-4 py-8 text-center text-2xl">$3,456.00</p>
      </div>

      <div className="rounded-xl bg-gray-50 p-2 shadow-sm">
        <div className="flex p-4">
          <div className="h-5 w-5 rounded-md bg-green-600" />
          <h3 className="ml-2 text-sm font-medium">Total Invoices</h3>
        </div>
        <p className="truncate rounded-xl bg-white px-4 py-8 text-center text-2xl">89</p>
      </div>

      <div className="rounded-xl bg-gray-50 p-2 shadow-sm">
        <div className="flex p-4">
          <div className="h-5 w-5 rounded-md bg-purple-600" />
          <h3 className="ml-2 text-sm font-medium">Total Customers</h3>
        </div>
        <p className="truncate rounded-xl bg-white px-4 py-8 text-center text-2xl">125</p>
      </div>
    </>
  );
}

// Slow-loading chart component
async function StreamingChart() {
  // Simulate slow API call
  console.log('Fetching revenue data...');
  await new Promise(resolve => setTimeout(resolve, 3000));
  console.log('Revenue data fetched after 3 seconds!');

  return (
    <div className="w-full md:col-span-4">
      <h2 className={`${lusitana.className} mb-4 text-xl md:text-2xl`}>Recent Revenue</h2>
      <div className="rounded-xl bg-gray-50 p-4">
        <div className="bg-white p-4 rounded-md">
          <div className="flex items-end space-x-2 h-40">
            {mockRevenue.map((month, i) => (
              <div key={month.month} className="flex flex-col items-center flex-1">
                <div 
                  className="w-full bg-blue-300 rounded-sm"
                  style={{ height: `${(month.revenue / 5000) * 100}%` }}
                />
                <p className="text-xs mt-2 text-gray-600">{month.month}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

// Fast-loading invoices component  
async function StreamingInvoices() {
  // Simulate fast API call
  console.log('Fetching invoices data...');
  await new Promise(resolve => setTimeout(resolve, 100));
  console.log('Invoices data fetched quickly!');

  return (
    <div className="flex w-full flex-col md:col-span-4">
      <h2 className={`${lusitana.className} mb-4 text-xl md:text-2xl`}>Latest Invoices</h2>
      <div className="flex grow flex-col justify-between rounded-xl bg-gray-50 p-4">
        <div className="bg-white px-6">
          {mockInvoices.map((invoice, i) => (
            <div key={invoice.id} className={`flex flex-row items-center justify-between py-4 ${i !== 0 ? 'border-t' : ''}`}>
              <div className="flex items-center">
                <div className="mr-4 h-8 w-8 rounded-full bg-gray-200" />
                <div className="min-w-0">
                  <p className="truncate text-sm font-semibold md:text-base">{invoice.name}</p>
                  <p className="hidden text-sm text-gray-500 sm:block">{invoice.email}</p>
                </div>
              </div>
              <p className={`${lusitana.className} truncate text-sm font-medium md:text-base`}>
                {invoice.amount}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function StreamingDemo() {
  return (
    <main>
      <h1 className={`${lusitana.className} mb-4 text-xl md:text-2xl`}>
        🚀 Streaming Demo - Chapter 9
      </h1>
      
      <div className="mb-4 p-4 bg-blue-100 border border-blue-400 rounded">
        <p className="text-sm text-blue-800">
          <strong>Watch the progressive loading!</strong> Fast components (cards, invoices) appear first, 
          slow chart appears after 3 seconds. Check terminal for timing logs.
        </p>
      </div>

      {/* Cards - Load fast (200ms) */}
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4 mb-6">
        <Suspense fallback={<CardsSkeleton />}>
          <StreamingCards />
        </Suspense>
      </div>

      {/* Chart and Invoices - Load at different speeds */}
      <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-4 lg:grid-cols-8">
        <Suspense fallback={<RevenueChartSkeleton />}>
          <StreamingChart />
        </Suspense>
        
        <Suspense fallback={<LatestInvoicesSkeleton />}>
          <StreamingInvoices />
        </Suspense>
      </div>

      <div className="mt-6 p-4 bg-green-100 border border-green-400 rounded">
        <h3 className="font-semibold text-green-800 mb-2">✅ Streaming Benefits Demonstrated:</h3>
        <ul className="text-sm text-green-700 space-y-1">
          <li>• Cards appear in ~200ms (fast data)</li>
          <li>• Invoices appear in ~100ms (fastest data)</li>
          <li>• Chart appears in ~3000ms (slow data) - doesn't block others!</li>
          <li>• Users see progress, not blank screen</li>
          <li>• Page is interactive immediately</li>
        </ul>
      </div>
    </main>
  );
}
