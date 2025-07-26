import Link from 'next/link';
import { lusitana } from '@/app/ui/fonts';

export default function Chapter11Page() {
  return (
    <div className="w-full">
      <div className="flex w-full items-center justify-between">
        <h1 className={`${lusitana.className} text-2xl`}>Chapter 11: Adding Search and Pagination</h1>
      </div>
      
      <div className="mt-4 text-gray-600">
        <p className="mb-4">
          In this chapter, you learned how to implement search and pagination functionality using URL search parameters.
        </p>
        
        <div className="bg-blue-50 p-6 rounded-lg mb-6">
          <h2 className="text-lg font-semibold mb-3">Key Concepts Implemented:</h2>
          <ul className="space-y-2">
            <li className="flex items-start">
              <span className="text-green-500 mr-2">✓</span>
              <span><strong>URL Search Parameters:</strong> Using query params for search state management</span>
            </li>
            <li className="flex items-start">
              <span className="text-green-500 mr-2">✓</span>
              <span><strong>Next.js Client Hooks:</strong> useSearchParams, usePathname, and useRouter</span>
            </li>
            <li className="flex items-start">
              <span className="text-green-500 mr-2">✓</span>
              <span><strong>Debounced Search:</strong> Optimized search with use-debounce library</span>
            </li>
            <li className="flex items-start">
              <span className="text-green-500 mr-2">✓</span>
              <span><strong>Pagination Logic:</strong> Client-side pagination with URL state</span>
            </li>
            <li className="flex items-start">
              <span className="text-green-500 mr-2">✓</span>
              <span><strong>Server Components:</strong> Data fetching on the server side</span>
            </li>
          </ul>
        </div>

        <div className="bg-yellow-50 p-6 rounded-lg mb-6">
          <h2 className="text-lg font-semibold mb-3">Benefits of URL Search Parameters:</h2>
          <ul className="space-y-2">
            <li className="flex items-start">
              <span className="text-yellow-500 mr-2">📝</span>
              <span><strong>Bookmarkable URLs:</strong> Users can bookmark and share search states</span>
            </li>
            <li className="flex items-start">
              <span className="text-yellow-500 mr-2">🖥️</span>
              <span><strong>Server-side Rendering:</strong> Initial state can be rendered on the server</span>
            </li>
            <li className="flex items-start">
              <span className="text-yellow-500 mr-2">📊</span>
              <span><strong>Analytics:</strong> Easier tracking of user search behavior</span>
            </li>
            <li className="flex items-start">
              <span className="text-yellow-500 mr-2">⚡</span>
              <span><strong>Performance:</strong> Debouncing reduces database query load</span>
            </li>
          </ul>
        </div>

        <div className="bg-green-50 p-6 rounded-lg mb-6">
          <h2 className="text-lg font-semibold mb-3">Try It Out:</h2>
          <p className="mb-3">
            The search and pagination functionality is now fully implemented in the invoices page. 
            Here's what you can test:
          </p>
          <ul className="space-y-2 mb-4">
            <li className="flex items-start">
              <span className="text-green-500 mr-2">🔍</span>
              <span>Search for customer names or invoice amounts</span>
            </li>
            <li className="flex items-start">
              <span className="text-green-500 mr-2">📄</span>
              <span>Navigate between pages using pagination controls</span>
            </li>
            <li className="flex items-start">
              <span className="text-green-500 mr-2">🔗</span>
              <span>Notice how the URL updates with your search queries and page numbers</span>
            </li>
            <li className="flex items-start">
              <span className="text-green-500 mr-2">⏱️</span>
              <span>Experience the debounced search (300ms delay) in action</span>
            </li>
          </ul>
          
          <div className="flex gap-4">
            <Link
              href="/dashboard/search-demo"
              className="flex h-10 items-center rounded-lg bg-blue-600 px-4 text-sm font-medium text-white transition-colors hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
            >
              Try Search & Pagination Demo →
            </Link>
            <Link
              href="/dashboard/invoices"
              className="flex h-10 items-center rounded-lg bg-gray-600 px-4 text-sm font-medium text-white transition-colors hover:bg-gray-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-600"
            >
              Original Invoices Page →
            </Link>
          </div>
        </div>

        <div className="bg-gray-50 p-6 rounded-lg">
          <h2 className="text-lg font-semibold mb-3">Implementation Notes:</h2>
          <ul className="space-y-2">
            <li className="flex items-start">
              <span className="text-gray-500 mr-2">•</span>
              <span><strong>Client vs Server:</strong> Search component uses client hooks, while Table component receives props from server</span>
            </li>
            <li className="flex items-start">
              <span className="text-gray-500 mr-2">•</span>
              <span><strong>Debouncing:</strong> Prevents excessive database queries by waiting 300ms after user stops typing</span>
            </li>
            <li className="flex items-start">
              <span className="text-gray-500 mr-2">•</span>
              <span><strong>Page Reset:</strong> Search queries automatically reset pagination to page 1</span>
            </li>
            <li className="flex items-start">
              <span className="text-gray-500 mr-2">•</span>
              <span><strong>Suspense:</strong> Loading states are handled with Suspense boundaries</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
