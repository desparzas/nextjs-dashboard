import { lusitana } from '@/app/ui/fonts';

// This would be generated at BUILD TIME, not REQUEST TIME
const staticData = {
  totalVisitors: '1,234,567',
  totalPageViews: '9,876,543',
  bounceRate: '32%',
  avgSessionDuration: '2m 45s',
  lastUpdated: 'January 1, 2024 (at build time)'
};

export default function StaticExample() {
  return (
    <main className="p-6">
      <h1 className={`${lusitana.className} mb-4 text-xl md:text-2xl`}>
        Static Rendering Example
      </h1>
      
      <div className="mb-6 p-4 bg-blue-100 border border-blue-400 rounded">
        <p className="text-sm text-blue-800">
          <strong>Static Rendering:</strong> This content was generated at build time. 
          It loads instantly but won't show real-time data changes.
        </p>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        <div className="rounded-xl bg-gray-50 p-2 shadow-sm">
          <div className="flex p-4">
            <div className="h-5 w-5 rounded-md bg-blue-600" />
            <h3 className="ml-2 text-sm font-medium">Total Visitors</h3>
          </div>
          <p className="truncate rounded-xl bg-white px-4 py-8 text-center text-2xl">
            {staticData.totalVisitors}
          </p>
        </div>

        <div className="rounded-xl bg-gray-50 p-2 shadow-sm">
          <div className="flex p-4">
            <div className="h-5 w-5 rounded-md bg-green-600" />
            <h3 className="ml-2 text-sm font-medium">Page Views</h3>
          </div>
          <p className="truncate rounded-xl bg-white px-4 py-8 text-center text-2xl">
            {staticData.totalPageViews}
          </p>
        </div>

        <div className="rounded-xl bg-gray-50 p-2 shadow-sm">
          <div className="flex p-4">
            <div className="h-5 w-5 rounded-md bg-orange-600" />
            <h3 className="ml-2 text-sm font-medium">Bounce Rate</h3>
          </div>
          <p className="truncate rounded-xl bg-white px-4 py-8 text-center text-2xl">
            {staticData.bounceRate}
          </p>
        </div>

        <div className="rounded-xl bg-gray-50 p-2 shadow-sm">
          <div className="flex p-4">
            <div className="h-5 w-5 rounded-md bg-purple-600" />
            <h3 className="ml-2 text-sm font-medium">Avg Session</h3>
          </div>
          <p className="truncate rounded-xl bg-white px-4 py-8 text-center text-2xl">
            {staticData.avgSessionDuration}
          </p>
        </div>
      </div>

      <div className="mt-6 p-4 bg-gray-100 rounded">
        <h2 className={`${lusitana.className} mb-2 text-lg`}>
          Benefits of Static Rendering:
        </h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>⚡ <strong>Instant Loading:</strong> Content is pre-generated and cached</li>
          <li>🌍 <strong>Global CDN:</strong> Served from nearest edge location</li>
          <li>💰 <strong>Lower Costs:</strong> No server computation per request</li>
          <li>🔍 <strong>Better SEO:</strong> Content ready for search engine crawlers</li>
        </ul>
        
        <div className="mt-4 p-3 bg-yellow-50 border border-yellow-200 rounded">
          <p className="text-sm text-yellow-800">
            <strong>Limitation:</strong> Data was last updated: {staticData.lastUpdated}
          </p>
        </div>
      </div>

      <div className="mt-6 p-4 bg-red-50 border border-red-200 rounded">
        <h3 className="font-semibold text-red-800 mb-2">Not Suitable For:</h3>
        <ul className="list-disc pl-6 space-y-1 text-red-700">
          <li>Real-time dashboards</li>
          <li>User-specific content</li>
          <li>Frequently changing data</li>
          <li>Content that depends on request-time information</li>
        </ul>
      </div>
    </main>
  );
}
