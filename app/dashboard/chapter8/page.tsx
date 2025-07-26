import Link from 'next/link';
import { lusitana } from '@/app/ui/fonts';

export default function Chapter8Navigation() {
  return (
    <div className="p-6 bg-gray-50">
      <h1 className={`${lusitana.className} mb-6 text-2xl md:text-3xl`}>
        Chapter 8: Static vs Dynamic Rendering
      </h1>
      
      <div className="grid gap-4 md:grid-cols-3">
        <Link 
          href="/dashboard/static-example"
          className="block p-4 bg-blue-100 border border-blue-300 rounded-lg hover:bg-blue-200 transition-colors"
        >
          <h3 className="font-semibold text-blue-800 mb-2">📊 Static Rendering</h3>
          <p className="text-sm text-blue-700">
            Fast loading, cached content. Good for unchanging data like blog posts.
          </p>
          <p className="text-xs text-blue-600 mt-2">⚡ Loads instantly</p>
        </Link>

        <Link 
          href="/dashboard/demo"
          className="block p-4 bg-yellow-100 border border-yellow-300 rounded-lg hover:bg-yellow-200 transition-colors"
        >
          <h3 className="font-semibold text-yellow-800 mb-2">🐌 Dynamic Rendering (Slow)</h3>
          <p className="text-sm text-yellow-700">
            Shows the blocking problem - slow data fetch delays entire page.
          </p>
          <p className="text-xs text-yellow-600 mt-2">⏱️ 3 second delay</p>
        </Link>

        <Link 
          href="/dashboard"
          className="block p-4 bg-red-100 border border-red-300 rounded-lg hover:bg-red-200 transition-colors"
        >
          <h3 className="font-semibold text-red-800 mb-2">💾 Real Dashboard</h3>
          <p className="text-sm text-red-700">
            Your actual dashboard (requires database setup).
          </p>
          <p className="text-xs text-red-600 mt-2">🔗 Needs database connection</p>
        </Link>
      </div>

      <div className="mt-8 p-4 bg-white border border-gray-200 rounded-lg">
        <h2 className={`${lusitana.className} mb-3 text-lg`}>Key Learnings:</h2>
        
        <div className="grid gap-4 md:grid-cols-2">
          <div>
            <h4 className="font-semibold text-green-700 mb-2">✅ Static Rendering Benefits:</h4>
            <ul className="text-sm space-y-1 text-gray-600">
              <li>• Instant loading from cache</li>
              <li>• Better SEO optimization</li>
              <li>• Lower server costs</li>
              <li>• Global CDN distribution</li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold text-blue-700 mb-2">🔄 Dynamic Rendering Benefits:</h4>
            <ul className="text-sm space-y-1 text-gray-600">
              <li>• Real-time data updates</li>
              <li>• User-specific content</li>
              <li>• Request-time information</li>
              <li>• Interactive dashboards</li>
            </ul>
          </div>
        </div>

        <div className="mt-4 p-3 bg-orange-50 border border-orange-200 rounded">
          <p className="text-sm text-orange-800">
            <strong>The Problem:</strong> With dynamic rendering, your app is only as fast as your slowest data fetch. 
            Future chapters will show how to solve this with streaming and Suspense.
          </p>
        </div>
      </div>
    </div>
  );
}
