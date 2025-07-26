import Link from 'next/link';
import { lusitana } from '@/app/ui/fonts';

export default function Chapter13Page() {
  return (
    <div className="w-full">
      <div className="flex w-full items-center justify-between">
        <h1 className={`${lusitana.className} text-2xl`}>Chapter 13: Handling Errors</h1>
      </div>
      
      <div className="mt-4 text-gray-600">
        <p className="mb-4">
          In this chapter, you learned how to handle errors gracefully using JavaScript's try/catch statements 
          and Next.js APIs for both expected and unexpected errors.
        </p>
        
        <div className="bg-blue-50 p-6 rounded-lg mb-6">
          <h2 className="text-lg font-semibold mb-3">Key Concepts Implemented:</h2>
          <ul className="space-y-2">
            <li className="flex items-start">
              <span className="text-green-500 mr-2">✓</span>
              <span><strong>Try/Catch in Server Actions:</strong> Graceful error handling for database operations</span>
            </li>
            <li className="flex items-start">
              <span className="text-green-500 mr-2">✓</span>
              <span><strong>Form Validation:</strong> Client-side error display with Zod validation</span>
            </li>
            <li className="flex items-start">
              <span className="text-green-500 mr-2">✓</span>
              <span><strong>Error Boundaries:</strong> Using error.tsx for unexpected errors</span>
            </li>
            <li className="flex items-start">
              <span className="text-green-500 mr-2">✓</span>
              <span><strong>404 Handling:</strong> Using notFound() and not-found.tsx for missing resources</span>
            </li>
            <li className="flex items-start">
              <span className="text-green-500 mr-2">✓</span>
              <span><strong>User Feedback:</strong> Proper error messages and recovery options</span>
            </li>
          </ul>
        </div>

        <div className="bg-yellow-50 p-6 rounded-lg mb-6">
          <h2 className="text-lg font-semibold mb-3">Error Handling Strategies:</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-white p-4 rounded border">
              <h3 className="font-semibold text-yellow-600 mb-2">Expected Errors</h3>
              <ul className="text-sm space-y-1">
                <li>• Form validation errors</li>
                <li>• Database constraint violations</li>
                <li>• Business logic failures</li>
                <li>• User input validation</li>
              </ul>
            </div>
            <div className="bg-white p-4 rounded border">
              <h3 className="font-semibold text-red-600 mb-2">Unexpected Errors</h3>
              <ul className="text-sm space-y-1">
                <li>• Network connection failures</li>
                <li>• Server crashes</li>
                <li>• Runtime exceptions</li>
                <li>• Third-party service failures</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="bg-green-50 p-6 rounded-lg mb-6">
          <h2 className="text-lg font-semibold mb-3">Error Handling Features:</h2>
          <div className="space-y-4">
            <div className="bg-white p-4 rounded border">
              <h3 className="font-semibold text-green-600 mb-2">🛡️ Server Action Error Handling</h3>
              <p className="text-sm mb-2">Server actions now include comprehensive try/catch blocks:</p>
              <ul className="text-sm space-y-1">
                <li>• Zod validation with detailed field errors</li>
                <li>• Database error catching and user-friendly messages</li>
                <li>• Proper error logging for debugging</li>
                <li>• Graceful degradation on failures</li>
              </ul>
            </div>
            
            <div className="bg-white p-4 rounded border">
              <h3 className="font-semibold text-blue-600 mb-2">📋 Form Error Display</h3>
              <p className="text-sm mb-2">Forms now show real-time validation errors:</p>
              <ul className="text-sm space-y-1">
                <li>• Field-level error messages</li>
                <li>• Accessible error announcements</li>
                <li>• General form submission errors</li>
                <li>• User-friendly error formatting</li>
              </ul>
            </div>
            
            <div className="bg-white p-4 rounded border">
              <h3 className="font-semibold text-purple-600 mb-2">⚠️ Error Boundaries</h3>
              <p className="text-sm mb-2">Fallback UI for unexpected errors:</p>
              <ul className="text-sm space-y-1">
                <li>• error.tsx catches unhandled exceptions</li>
                <li>• Reset functionality to retry operations</li>
                <li>• Error logging for debugging</li>
                <li>• User-friendly error messages</li>
              </ul>
            </div>
            
            <div className="bg-white p-4 rounded border">
              <h3 className="font-semibold text-orange-600 mb-2">🔍 404 Not Found Handling</h3>
              <p className="text-sm mb-2">Specific handling for missing resources:</p>
              <ul className="text-sm space-y-1">
                <li>• notFound() function for missing invoices</li>
                <li>• Custom not-found.tsx pages</li>
                <li>• Clear navigation back to safety</li>
                <li>• Better UX than generic error pages</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="bg-purple-50 p-6 rounded-lg mb-6">
          <h2 className="text-lg font-semibold mb-3">Test Error Handling:</h2>
          <div className="space-y-4">
            <div className="bg-white p-4 rounded border">
              <h3 className="font-semibold mb-2">🧪 Form Validation Errors</h3>
              <p className="text-sm mb-2">Try these to test form error handling:</p>
              <ul className="text-sm space-y-1">
                <li>• Submit form without selecting a customer</li>
                <li>• Enter a negative or zero amount</li>
                <li>• Leave required fields empty</li>
                <li>• Watch for real-time error messages</li>
              </ul>
            </div>
            
            <div className="bg-white p-4 rounded border">
              <h3 className="font-semibold mb-2">💥 Simulate Database Errors</h3>
              <p className="text-sm mb-2">Our server actions randomly simulate errors (10% chance):</p>
              <ul className="text-sm space-y-1">
                <li>• Try creating/updating invoices multiple times</li>
                <li>• Watch for "Database Error" messages</li>
                <li>• Notice graceful error handling</li>
                <li>• Check console for error logs</li>
              </ul>
            </div>
            
            <div className="bg-white p-4 rounded border">
              <h3 className="font-semibold mb-2">🔗 Test 404 Handling</h3>
              <p className="text-sm mb-2">Try accessing non-existent resources:</p>
              <ul className="text-sm space-y-1">
                <li>• Edit a fake invoice ID</li>
                <li>• See custom 404 page</li>
                <li>• Use navigation to return safely</li>
                <li>• Compare to generic error boundary</li>
              </ul>
            </div>
          </div>
          
          <div className="flex flex-wrap gap-4 mt-4">
            <Link
              href="/dashboard/invoices/create"
              className="flex h-10 items-center rounded-lg bg-green-600 px-4 text-sm font-medium text-white transition-colors hover:bg-green-500"
            >
              Test Form Errors →
            </Link>
            <Link
              href="/dashboard/invoices/fake-id-12345/edit"
              className="flex h-10 items-center rounded-lg bg-orange-600 px-4 text-sm font-medium text-white transition-colors hover:bg-orange-500"
            >
              Test 404 Error →
            </Link>
            <Link
              href="/dashboard/invoices"
              className="flex h-10 items-center rounded-lg bg-blue-600 px-4 text-sm font-medium text-white transition-colors hover:bg-blue-500"
            >
              View All Invoices →
            </Link>
          </div>
        </div>

        <div className="bg-gray-50 p-6 rounded-lg">
          <h2 className="text-lg font-semibold mb-3">Error Handling Best Practices:</h2>
          <ul className="space-y-2">
            <li className="flex items-start">
              <span className="text-gray-500 mr-2">•</span>
              <span><strong>User-Friendly Messages:</strong> Convert technical errors to user-understandable messages</span>
            </li>
            <li className="flex items-start">
              <span className="text-gray-500 mr-2">•</span>
              <span><strong>Proper Logging:</strong> Log technical details for developers while showing friendly messages to users</span>
            </li>
            <li className="flex items-start">
              <span className="text-gray-500 mr-2">•</span>
              <span><strong>Recovery Options:</strong> Always provide users a way to recover or retry</span>
            </li>
            <li className="flex items-start">
              <span className="text-gray-500 mr-2">•</span>
              <span><strong>Accessibility:</strong> Use ARIA attributes for screen reader compatibility</span>
            </li>
            <li className="flex items-start">
              <span className="text-gray-500 mr-2">•</span>
              <span><strong>Graceful Degradation:</strong> Application should continue working even when errors occur</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
