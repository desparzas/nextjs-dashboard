import Link from 'next/link';
import { lusitana } from '@/app/ui/fonts';

export default function Chapter12Page() {
  return (
    <div className="w-full">
      <div className="flex w-full items-center justify-between">
        <h1 className={`${lusitana.className} text-2xl`}>Chapter 12: Mutating Data</h1>
      </div>
      
      <div className="mt-4 text-gray-600">
        <p className="mb-4">
          In this chapter, you learned how to use React Server Actions to mutate data. 
          Server Actions provide a secure and efficient way to handle form submissions and data mutations.
        </p>
        
        <div className="bg-blue-50 p-6 rounded-lg mb-6">
          <h2 className="text-lg font-semibold mb-3">Key Concepts Implemented:</h2>
          <ul className="space-y-2">
            <li className="flex items-start">
              <span className="text-green-500 mr-2">✓</span>
              <span><strong>React Server Actions:</strong> Server-side functions for data mutation</span>
            </li>
            <li className="flex items-start">
              <span className="text-green-500 mr-2">✓</span>
              <span><strong>Form Handling:</strong> Using the action attribute with Server Actions</span>
            </li>
            <li className="flex items-start">
              <span className="text-green-500 mr-2">✓</span>
              <span><strong>Data Validation:</strong> Type-safe validation using Zod schema</span>
            </li>
            <li className="flex items-start">
              <span className="text-green-500 mr-2">✓</span>
              <span><strong>Progressive Enhancement:</strong> Forms work without JavaScript</span>
            </li>
            <li className="flex items-start">
              <span className="text-green-500 mr-2">✓</span>
              <span><strong>Cache Revalidation:</strong> Using revalidatePath to update client cache</span>
            </li>
            <li className="flex items-start">
              <span className="text-green-500 mr-2">✓</span>
              <span><strong>Dynamic Routes:</strong> Creating routes with dynamic segments [id]</span>
            </li>
          </ul>
        </div>

        <div className="bg-yellow-50 p-6 rounded-lg mb-6">
          <h2 className="text-lg font-semibold mb-3">Server Actions Benefits:</h2>
          <ul className="space-y-2">
            <li className="flex items-start">
              <span className="text-yellow-500 mr-2">🔒</span>
              <span><strong>Security:</strong> Encrypted closures, input validation, error hashing</span>
            </li>
            <li className="flex items-start">
              <span className="text-yellow-500 mr-2">⚡</span>
              <span><strong>Performance:</strong> No need for separate API endpoints</span>
            </li>
            <li className="flex items-start">
              <span className="text-yellow-500 mr-2">🔄</span>
              <span><strong>Progressive Enhancement:</strong> Works without client-side JavaScript</span>
            </li>
            <li className="flex items-start">
              <span className="text-yellow-500 mr-2">🏗️</span>
              <span><strong>Architecture:</strong> Server and client components integration</span>
            </li>
          </ul>
        </div>

        <div className="bg-green-50 p-6 rounded-lg mb-6">
          <h2 className="text-lg font-semibold mb-3">CRUD Operations Implemented:</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
            <div className="bg-white p-4 rounded border">
              <h3 className="font-semibold text-green-600 mb-2">Create Invoice</h3>
              <p className="text-sm">Form with validation, data transformation, and database insertion</p>
            </div>
            <div className="bg-white p-4 rounded border">
              <h3 className="font-semibold text-blue-600 mb-2">Update Invoice</h3>
              <p className="text-sm">Pre-populated form with dynamic routing and data binding</p>
            </div>
            <div className="bg-white p-4 rounded border">
              <h3 className="font-semibold text-red-600 mb-2">Delete Invoice</h3>
              <p className="text-sm">One-click deletion with form-based Server Action</p>
            </div>
          </div>
          
          <div className="flex flex-wrap gap-4">
            <Link
              href="/dashboard/invoices/create"
              className="flex h-10 items-center rounded-lg bg-green-600 px-4 text-sm font-medium text-white transition-colors hover:bg-green-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-600"
            >
              Create Invoice Demo →
            </Link>
            <Link
              href="/dashboard/invoices"
              className="flex h-10 items-center rounded-lg bg-blue-600 px-4 text-sm font-medium text-white transition-colors hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
            >
              View All Invoices →
            </Link>
          </div>
        </div>

        <div className="bg-gray-50 p-6 rounded-lg mb-6">
          <h2 className="text-lg font-semibold mb-3">Implementation Details:</h2>
          <ul className="space-y-2">
            <li className="flex items-start">
              <span className="text-gray-500 mr-2">•</span>
              <span><strong>Zod Validation:</strong> Type-safe form data validation and coercion</span>
            </li>
            <li className="flex items-start">
              <span className="text-gray-500 mr-2">•</span>
              <span><strong>FormData Processing:</strong> Extract and validate form field values</span>
            </li>
            <li className="flex items-start">
              <span className="text-gray-500 mr-2">•</span>
              <span><strong>Data Transformation:</strong> Converting amounts to cents, generating dates</span>
            </li>
            <li className="flex items-start">
              <span className="text-gray-500 mr-2">•</span>
              <span><strong>Function Binding:</strong> Using bind() to pass IDs to Server Actions</span>
            </li>
            <li className="flex items-start">
              <span className="text-gray-500 mr-2">•</span>
              <span><strong>Cache Management:</strong> revalidatePath() for fresh data fetching</span>
            </li>
            <li className="flex items-start">
              <span className="text-gray-500 mr-2">•</span>
              <span><strong>Navigation:</strong> redirect() for post-mutation navigation</span>
            </li>
          </ul>
        </div>

        <div className="bg-purple-50 p-6 rounded-lg">
          <h2 className="text-lg font-semibold mb-3">What to Test:</h2>
          <ul className="space-y-2">
            <li className="flex items-start">
              <span className="text-purple-500 mr-2">🧪</span>
              <span>Create new invoices with different customers and amounts</span>
            </li>
            <li className="flex items-start">
              <span className="text-purple-500 mr-2">✏️</span>
              <span>Edit existing invoices and see real-time updates</span>
            </li>
            <li className="flex items-start">
              <span className="text-purple-500 mr-2">🗑️</span>
              <span>Delete invoices and observe cache revalidation</span>
            </li>
            <li className="flex items-start">
              <span className="text-purple-500 mr-2">🔍</span>
              <span>Check browser console for Server Action logs</span>
            </li>
            <li className="flex items-start">
              <span className="text-purple-500 mr-2">📱</span>
              <span>Test forms without JavaScript enabled (progressive enhancement)</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
