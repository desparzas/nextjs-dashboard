import { lusitana } from '@/app/ui/fonts';
import { Suspense } from 'react';

// Simulate static content - this would be prerendered
function StaticHeader() {
  return (
    <div className="mb-6 p-4 bg-blue-50 border border-blue-200 rounded-lg">
      <h1 className={`${lusitana.className} text-2xl mb-2`}>
        🏪 E-commerce Product Page Demo
      </h1>
      <p className="text-blue-700">
        This header, navigation, and product info are <strong>static</strong> - 
        prerendered at build time for instant loading.
      </p>
    </div>
  );
}

// Simulate static product info
function StaticProductInfo() {
  return (
    <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg">
      <h2 className={`${lusitana.className} text-xl mb-2`}>
        📱 Product: Next.js Dashboard Course
      </h2>
      <div className="space-y-2 text-green-700">
        <p><strong>Price:</strong> $99.99</p>
        <p><strong>Description:</strong> Learn to build modern dashboards with Next.js</p>
        <p><strong>Rating:</strong> ⭐⭐⭐⭐⭐ (4.9/5)</p>
        <p><strong>Availability:</strong> In Stock</p>
      </div>
      <div className="mt-3 text-sm text-green-600">
        ✅ This content is <strong>static</strong> - same for all users, cached globally
      </div>
    </div>
  );
}

// Simulate dynamic user cart - this would stream in
async function DynamicUserCart() {
  // Simulate API call delay
  await new Promise(resolve => setTimeout(resolve, 1000));
  
  return (
    <div className="mb-6 p-4 bg-orange-50 border border-orange-200 rounded-lg">
      <h3 className={`${lusitana.className} text-lg mb-2`}>
        🛒 Your Cart (User-Specific)
      </h3>
      <div className="space-y-1 text-orange-700">
        <p>• React Fundamentals Course - $49.99</p>
        <p>• TypeScript Basics - $29.99</p>
        <p><strong>Total: $79.98</strong></p>
      </div>
      <div className="mt-3 text-sm text-orange-600">
        🔄 This content is <strong>dynamic</strong> - personalized per user
      </div>
    </div>
  );
}

// Simulate dynamic recommendations - this would stream in
async function DynamicRecommendations() {
  // Simulate longer API call delay
  await new Promise(resolve => setTimeout(resolve, 2000));
  
  return (
    <div className="mb-6 p-4 bg-purple-50 border border-purple-200 rounded-lg">
      <h3 className={`${lusitana.className} text-lg mb-2`}>
        💡 Recommended for You
      </h3>
      <div className="space-y-1 text-purple-700">
        <p>• Advanced Next.js Patterns - $149.99</p>
        <p>• Database Design Course - $89.99</p>
        <p>• UI/UX for Developers - $119.99</p>
      </div>
      <div className="mt-3 text-sm text-purple-600">
        🤖 This content is <strong>dynamic</strong> - based on your browsing history
      </div>
    </div>
  );
}

// Loading skeletons for dynamic content
function CartSkeleton() {
  return (
    <div className="mb-6 p-4 bg-gray-100 border border-gray-200 rounded-lg animate-pulse">
      <div className="h-6 bg-gray-300 rounded mb-2 w-1/3"></div>
      <div className="space-y-2">
        <div className="h-4 bg-gray-300 rounded w-3/4"></div>
        <div className="h-4 bg-gray-300 rounded w-2/3"></div>
        <div className="h-4 bg-gray-300 rounded w-1/2"></div>
      </div>
    </div>
  );
}

function RecommendationsSkeleton() {
  return (
    <div className="mb-6 p-4 bg-gray-100 border border-gray-200 rounded-lg animate-pulse">
      <div className="h-6 bg-gray-300 rounded mb-2 w-1/2"></div>
      <div className="space-y-2">
        <div className="h-4 bg-gray-300 rounded w-4/5"></div>
        <div className="h-4 bg-gray-300 rounded w-3/4"></div>
        <div className="h-4 bg-gray-300 rounded w-4/5"></div>
      </div>
    </div>
  );
}

export default function PPRDemoPage() {
  return (
    <main className="max-w-4xl mx-auto p-6">
      {/* Static content - prerendered at build time */}
      <StaticHeader />
      <StaticProductInfo />
      
      {/* Dynamic content - streamed in asynchronously */}
      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <Suspense fallback={<CartSkeleton />}>
            <DynamicUserCart />
          </Suspense>
        </div>
        
        <div>
          <Suspense fallback={<RecommendationsSkeleton />}>
            <DynamicRecommendations />
          </Suspense>
        </div>
      </div>

      {/* Explanation section */}
      <div className="mt-8 p-6 bg-gray-50 border border-gray-200 rounded-lg">
        <h2 className={`${lusitana.className} text-xl mb-4`}>
          🧩 How Partial Prerendering (PPR) Works
        </h2>
        
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <h3 className="font-semibold text-blue-800 mb-2">⚡ Static Shell (Instant)</h3>
            <ul className="text-sm space-y-1 text-gray-600">
              <li>• Navigation and layout</li>
              <li>• Product information</li>
              <li>• Header and footer</li>
              <li>• Any content that's the same for everyone</li>
            </ul>
            <p className="text-xs text-blue-600 mt-2">
              Prerendered at build time, served from CDN
            </p>
          </div>
          
          <div>
            <h3 className="font-semibold text-orange-800 mb-2">🔄 Dynamic Holes (Streaming)</h3>
            <ul className="text-sm space-y-1 text-gray-600">
              <li>• User-specific cart contents</li>
              <li>• Personalized recommendations</li>
              <li>• Real-time data</li>
              <li>• Content requiring authentication</li>
            </ul>
            <p className="text-xs text-orange-600 mt-2">
              Generated at request time, streamed in parallel
            </p>
          </div>
        </div>

        <div className="mt-4 p-3 bg-yellow-50 border border-yellow-200 rounded">
          <p className="text-sm text-yellow-800">
            <strong>Result:</strong> Users see static content instantly (~0ms), 
            while dynamic content loads progressively (~1-2s). Best of both worlds!
          </p>
        </div>
      </div>
    </main>
  );
}
