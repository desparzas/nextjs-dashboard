import Link from 'next/link';
import { lusitana } from '@/app/ui/fonts';

export default function Chapter9Navigation() {
  return (
    <div className="p-6 bg-gray-50">
      <h1 className={`${lusitana.className} mb-6 text-2xl md:text-3xl`}>
        Chapter 9: Streaming Implementation
      </h1>
      
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        <Link 
          href="/dashboard/streaming-demo"
          className="block p-4 bg-green-100 border border-green-300 rounded-lg hover:bg-green-200 transition-colors"
        >
          <h3 className="font-semibold text-green-800 mb-2">🚀 Working Streaming Demo</h3>
          <p className="text-sm text-green-700">
            See streaming in action! Components load progressively with mock data.
          </p>
          <p className="text-xs text-green-600 mt-2">✅ No database required</p>
        </Link>

        <Link 
          href="/dashboard"
          className="block p-4 bg-blue-100 border border-blue-300 rounded-lg hover:bg-blue-200 transition-colors"
        >
          <h3 className="font-semibold text-blue-800 mb-2">📊 Real Dashboard (Streaming)</h3>
          <p className="text-sm text-blue-700">
            Production implementation with Suspense boundaries and real data fetching.
          </p>
          <p className="text-xs text-blue-600 mt-2">🔗 Needs database setup</p>
        </Link>

        <Link 
          href="/dashboard/demo"
          className="block p-4 bg-yellow-100 border border-yellow-300 rounded-lg hover:bg-yellow-200 transition-colors"
        >
          <h3 className="font-semibold text-yellow-800 mb-2">🐌 Chapter 8: Blocking</h3>
          <p className="text-sm text-yellow-700">
            Compare with old approach - everything waits for slowest request.
          </p>
          <p className="text-xs text-yellow-600 mt-2">⏱️ 3 second delay</p>
        </Link>
      </div>

      <div className="mt-8 grid gap-6 md:grid-cols-2">
        <div className="p-4 bg-white border border-gray-200 rounded-lg">
          <h2 className={`${lusitana.className} mb-3 text-lg`}>🔄 Before: Blocking (Chapter 8)</h2>
          <div className="space-y-2 text-sm text-gray-600">
            <div className="flex items-center">
              <div className="w-4 h-4 bg-red-300 rounded mr-2"></div>
              <span>All data fetched at page level</span>
            </div>
            <div className="flex items-center">
              <div className="w-4 h-4 bg-red-300 rounded mr-2"></div>
              <span>3-second wait for ANY content</span>
            </div>
            <div className="flex items-center">
              <div className="w-4 h-4 bg-red-300 rounded mr-2"></div>
              <span>Poor user experience</span>
            </div>
            <div className="flex items-center">
              <div className="w-4 h-4 bg-red-300 rounded mr-2"></div>
              <span>Page feels unresponsive</span>
            </div>
          </div>
        </div>

        <div className="p-4 bg-white border border-gray-200 rounded-lg">
          <h2 className={`${lusitana.className} mb-3 text-lg`}>✅ After: Streaming (Chapter 9)</h2>
          <div className="space-y-2 text-sm text-gray-600">
            <div className="flex items-center">
              <div className="w-4 h-4 bg-green-400 rounded mr-2"></div>
              <span>Components fetch their own data</span>
            </div>
            <div className="flex items-center">
              <div className="w-4 h-4 bg-green-400 rounded mr-2"></div>
              <span>Progressive loading (~100ms to 3s)</span>
            </div>
            <div className="flex items-center">
              <div className="w-4 h-4 bg-green-400 rounded mr-2"></div>
              <span>Great user experience</span>
            </div>
            <div className="flex items-center">
              <div className="w-4 h-4 bg-green-400 rounded mr-2"></div>
              <span>Immediately interactive</span>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-8 p-4 bg-white border border-gray-200 rounded-lg">
        <h2 className={`${lusitana.className} mb-3 text-lg`}>🛠️ Implementation Highlights</h2>
        
        <div className="grid gap-4 md:grid-cols-2">
          <div>
            <h4 className="font-semibold text-purple-700 mb-2">🏗️ Architecture Changes:</h4>
            <ul className="text-sm space-y-1 text-gray-600">
              <li>• Route groups: <code>(overview)</code></li>
              <li>• Page-level: <code>loading.tsx</code></li>
              <li>• Component-level: <code>&lt;Suspense&gt;</code></li>
              <li>• Data fetching moved to components</li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold text-indigo-700 mb-2">⚡ Performance Benefits:</h4>
            <ul className="text-sm space-y-1 text-gray-600">
              <li>• Parallel data fetching</li>
              <li>• Non-blocking slow requests</li>
              <li>• Skeleton loading states</li>
              <li>• Interruptible navigation</li>
            </ul>
          </div>
        </div>

        <div className="mt-4 p-3 bg-blue-50 border border-blue-200 rounded">
          <p className="text-sm text-blue-800">
            <strong>Key Principle:</strong> Move data fetching DOWN to the components that need it, 
            then wrap those components in Suspense for independent loading.
          </p>
        </div>
      </div>

      <div className="mt-6 p-4 bg-orange-50 border border-orange-200 rounded">
        <h3 className="font-semibold text-orange-800 mb-2">🧪 Test Instructions:</h3>
        <ol className="text-sm text-orange-700 space-y-1">
          <li>1. Visit the <strong>Streaming Demo</strong> to see progressive loading</li>
          <li>2. Compare with <strong>Chapter 8 Blocking</strong> version</li>
          <li>3. Check browser Network tab to see parallel requests</li>
          <li>4. Notice skeletons appearing before content</li>
          <li>5. Check terminal for timing logs</li>
        </ol>
      </div>
    </div>
  );
}
