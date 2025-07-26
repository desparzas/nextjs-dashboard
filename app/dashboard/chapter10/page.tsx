import Link from 'next/link';
import { lusitana } from '@/app/ui/fonts';

export default function Chapter10Navigation() {
  return (
    <div className="p-6 bg-gray-50">
      <h1 className={`${lusitana.className} mb-6 text-2xl md:text-3xl`}>
        Chapter 10: Partial Prerendering (PPR)
      </h1>
      
      <div className="mb-6 p-4 bg-yellow-100 border border-yellow-400 rounded-lg">
        <h2 className="font-semibold text-yellow-800 mb-2">⚠️ Experimental Feature</h2>
        <p className="text-sm text-yellow-700">
          PPR is an experimental feature in Next.js 14+ canary. We've installed{' '}
          <code>next@canary</code> and enabled it for demonstration purposes.
        </p>
      </div>
      
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        <Link 
          href="/dashboard/ppr-demo"
          className="block p-4 bg-blue-100 border border-blue-300 rounded-lg hover:bg-blue-200 transition-colors"
        >
          <h3 className="font-semibold text-blue-800 mb-2">🧩 PPR Concept Demo</h3>
          <p className="text-sm text-blue-700">
            See how static and dynamic content combine in a simulated e-commerce page.
          </p>
          <p className="text-xs text-blue-600 mt-2">✨ Shows "holes" concept</p>
        </Link>

        <Link 
          href="/dashboard"
          className="block p-4 bg-green-100 border border-green-300 rounded-lg hover:bg-green-200 transition-colors"
        >
          <h3 className="font-semibold text-green-800 mb-2">📊 PPR-Enabled Dashboard</h3>
          <p className="text-sm text-green-700">
            Your dashboard now has PPR enabled! Static shell + dynamic streaming.
          </p>
          <p className="text-xs text-green-600 mt-2">🚀 Production implementation</p>
        </Link>

        <Link 
          href="/dashboard/streaming-demo"
          className="block p-4 bg-purple-100 border border-purple-300 rounded-lg hover:bg-purple-200 transition-colors"
        >
          <h3 className="font-semibold text-purple-800 mb-2">🔄 Streaming Foundation</h3>
          <p className="text-sm text-purple-700">
            PPR builds on the streaming you implemented in Chapter 9.
          </p>
          <p className="text-xs text-purple-600 mt-2">📈 Chapter 9 + PPR</p>
        </Link>
      </div>

      <div className="mt-8 grid gap-6 md:grid-cols-2">
        <div className="p-4 bg-white border border-gray-200 rounded-lg">
          <h2 className={`${lusitana.className} mb-3 text-lg`}>🔥 Before PPR: Choose One</h2>
          
          <div className="space-y-3">
            <div className="p-3 bg-blue-50 border border-blue-200 rounded">
              <h4 className="font-semibold text-blue-800">Static Rendering</h4>
              <p className="text-sm text-blue-700">
                ✅ Fast loading, ❌ No personalization
              </p>
            </div>
            
            <div className="p-3 bg-orange-50 border border-orange-200 rounded">
              <h4 className="font-semibold text-orange-800">Dynamic Rendering</h4>
              <p className="text-sm text-orange-700">
                ✅ Personalized, ❌ Slower loading
              </p>
            </div>
          </div>
          
          <p className="text-sm text-gray-600 mt-3">
            Entire route was either fully static or fully dynamic.
          </p>
        </div>

        <div className="p-4 bg-white border border-gray-200 rounded-lg">
          <h2 className={`${lusitana.className} mb-3 text-lg`}>✨ With PPR: Best of Both</h2>
          
          <div className="space-y-3">
            <div className="p-3 bg-green-50 border border-green-200 rounded">
              <h4 className="font-semibold text-green-800">Static Shell</h4>
              <p className="text-sm text-green-700">
                Navigation, layout, product info - instant load
              </p>
            </div>
            
            <div className="p-3 bg-purple-50 border border-purple-200 rounded">
              <h4 className="font-semibold text-purple-800">Dynamic Holes</h4>
              <p className="text-sm text-purple-700">
                User cart, recommendations - stream in async
              </p>
            </div>
          </div>
          
          <p className="text-sm text-gray-600 mt-3">
            Combine static and dynamic in the same route!
          </p>
        </div>
      </div>

      <div className="mt-8 p-4 bg-white border border-gray-200 rounded-lg">
        <h2 className={`${lusitana.className} mb-3 text-lg`}>🛠️ Implementation Steps</h2>
        
        <div className="grid gap-4 md:grid-cols-2">
          <div>
            <h4 className="font-semibold text-indigo-700 mb-2">1. Configuration</h4>
            <div className="text-sm space-y-1 text-gray-600">
              <p>• Installed <code>next@canary</code></p>
              <p>• Added <code>ppr: 'incremental'</code> to config</p>
              <p>• Set <code>experimental_ppr = true</code> in layout</p>
            </div>
          </div>
          
          <div>
            <h4 className="font-semibold text-green-700 mb-2">2. Automatic Benefits</h4>
            <div className="text-sm space-y-1 text-gray-600">
              <p>• Static content prerendered</p>
              <p>• Suspense boundaries create "holes"</p>
              <p>• Dynamic content streams in</p>
            </div>
          </div>
        </div>

        <div className="mt-4 p-3 bg-blue-50 border border-blue-200 rounded">
          <p className="text-sm text-blue-800">
            <strong>Magic:</strong> No code changes needed! Your existing Suspense boundaries 
            from Chapter 9 automatically become PPR "holes".
          </p>
        </div>
      </div>

      <div className="mt-6 p-4 bg-orange-50 border border-orange-200 rounded">
        <h3 className="font-semibold text-orange-800 mb-2">🧪 How to Test PPR</h3>
        <ol className="text-sm text-orange-700 space-y-1">
          <li>1. Visit the <strong>PPR Demo</strong> to understand the concept</li>
          <li>2. Check your <strong>Dashboard</strong> - it now has PPR enabled</li>
          <li>3. In production builds, you'd see faster initial loads</li>
          <li>4. Static parts are cached, dynamic parts stream</li>
          <li>5. Use browser DevTools to see the streaming behavior</li>
        </ol>
      </div>

      <div className="mt-6 p-4 bg-green-50 border border-green-200 rounded">
        <h3 className="font-semibold text-green-800 mb-2">🚀 Performance Benefits</h3>
        <div className="grid gap-4 md:grid-cols-3">
          <div>
            <h4 className="font-semibold text-sm">⚡ Instant Shell</h4>
            <p className="text-xs text-green-700">Static content loads immediately</p>
          </div>
          <div>
            <h4 className="font-semibold text-sm">🎯 Personalized</h4>
            <p className="text-xs text-green-700">Dynamic content is user-specific</p>
          </div>
          <div>
            <h4 className="font-semibold text-sm">📈 Scalable</h4>
            <p className="text-xs text-green-700">Static parts cached globally</p>
          </div>
        </div>
      </div>
    </div>
  );
}
