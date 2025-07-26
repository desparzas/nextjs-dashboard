import { Metadata } from 'next';
import Link from 'next/link';
import { 
  CheckCircleIcon, 
  ExclamationTriangleIcon,
  InformationCircleIcon,
  LightBulbIcon 
} from '@heroicons/react/24/outline';

export const metadata: Metadata = {
  title: 'Chapter 14: Improving Accessibility | Next.js Dashboard',
  description: 'Learn about accessibility features, form validation, and server-side validation with Next.js',
};

export default function Chapter14Page() {
  return (
    <div className="w-full">
      <div className="flex w-full items-center justify-between">
        <h1 className="text-2xl font-bold">Chapter 14: Improving Accessibility</h1>
      </div>

      {/* Introduction */}
      <div className="mt-6 grid gap-6 sm:grid-cols-1 lg:grid-cols-1">
        <div className="rounded-lg bg-blue-50 p-6">
          <div className="flex items-center gap-3">
            <InformationCircleIcon className="h-6 w-6 text-blue-600" />
            <h2 className="text-lg font-semibold text-blue-900">What You'll Learn</h2>
          </div>
          <div className="mt-4 space-y-2 text-blue-800">
            <p>• How to use ESLint accessibility plugin for Next.js</p>
            <p>• How to implement server-side form validation</p>
            <p>• How to use React's useActionState hook for form errors</p>
            <p>• How to make forms accessible with ARIA labels</p>
            <p>• How to provide meaningful error messages to screen readers</p>
          </div>
        </div>
      </div>

      {/* Accessibility Features Implemented */}
      <div className="mt-8">
        <h2 className="text-xl font-semibold mb-4">✅ Accessibility Features Implemented</h2>
        <div className="grid gap-4 sm:grid-cols-1 lg:grid-cols-2">
          <div className="rounded-lg bg-green-50 border border-green-200 p-4">
            <div className="flex items-center gap-2 mb-2">
              <CheckCircleIcon className="h-5 w-5 text-green-600" />
              <h3 className="font-semibold text-green-900">Semantic HTML</h3>
            </div>
            <p className="text-green-800 text-sm">
              Using proper HTML elements like &lt;input&gt;, &lt;select&gt;, &lt;fieldset&gt;, and &lt;legend&gt; 
              for assistive technology support.
            </p>
          </div>

          <div className="rounded-lg bg-green-50 border border-green-200 p-4">
            <div className="flex items-center gap-2 mb-2">
              <CheckCircleIcon className="h-5 w-5 text-green-600" />
              <h3 className="font-semibold text-green-900">ARIA Labels</h3>
            </div>
            <p className="text-green-800 text-sm">
              Proper aria-describedby, aria-live="polite", and aria-atomic="true" 
              for screen reader accessibility.
            </p>
          </div>

          <div className="rounded-lg bg-green-50 border border-green-200 p-4">
            <div className="flex items-center gap-2 mb-2">
              <CheckCircleIcon className="h-5 w-5 text-green-600" />
              <h3 className="font-semibold text-green-900">Form Labels</h3>
            </div>
            <p className="text-green-800 text-sm">
              Every form field has a descriptive label with htmlFor attribute 
              linking to the corresponding input.
            </p>
          </div>

          <div className="rounded-lg bg-green-50 border border-green-200 p-4">
            <div className="flex items-center gap-2 mb-2">
              <CheckCircleIcon className="h-5 w-5 text-green-600" />
              <h3 className="font-semibold text-green-900">Focus Outline</h3>
            </div>
            <p className="text-green-800 text-sm">
              Visible focus indicators for keyboard navigation with proper 
              outline styling.
            </p>
          </div>

          <div className="rounded-lg bg-green-50 border border-green-200 p-4">
            <div className="flex items-center gap-2 mb-2">
              <CheckCircleIcon className="h-5 w-5 text-green-600" />
              <h3 className="font-semibold text-green-900">Server-Side Validation</h3>
            </div>
            <p className="text-green-800 text-sm">
              Zod validation with meaningful error messages and proper error handling 
              using useActionState hook.
            </p>
          </div>

          <div className="rounded-lg bg-green-50 border border-green-200 p-4">
            <div className="flex items-center gap-2 mb-2">
              <CheckCircleIcon className="h-5 w-5 text-green-600" />
              <h3 className="font-semibold text-green-900">Progressive Enhancement</h3>
            </div>
            <p className="text-green-800 text-sm">
              Forms work without JavaScript and gracefully enhance with 
              client-side interactions.
            </p>
          </div>
        </div>
      </div>

      {/* Form Validation Demo */}
      <div className="mt-8">
        <h2 className="text-xl font-semibold mb-4">🧪 Form Validation Testing</h2>
        <div className="rounded-lg bg-yellow-50 border border-yellow-200 p-6">
          <div className="flex items-center gap-3 mb-4">
            <LightBulbIcon className="h-6 w-6 text-yellow-600" />
            <h3 className="text-lg font-semibold text-yellow-900">Test the Validation</h3>
          </div>
          <div className="space-y-4 text-yellow-800">
            <div>
              <h4 className="font-semibold mb-2">📝 Create Invoice Form Testing:</h4>
              <ol className="list-decimal list-inside space-y-1 ml-4">
                <li>Go to the Create Invoice page</li>
                <li>Try submitting an empty form - see validation errors</li>
                <li>Enter amount as "0" or negative - see amount validation</li>
                <li>Select customer but leave other fields - see specific errors</li>
                <li>Test with keyboard navigation (Tab key)</li>
                <li>Notice how errors are announced to screen readers</li>
              </ol>
            </div>
            <div>
              <h4 className="font-semibold mb-2">✏️ Edit Invoice Form Testing:</h4>
              <ol className="list-decimal list-inside space-y-1 ml-4">
                <li>Go to any Edit Invoice page</li>
                <li>Clear required fields and submit</li>
                <li>Observe the same validation patterns</li>
                <li>Test screen reader compatibility with aria-live regions</li>
              </ol>
            </div>
            <div className="mt-4 p-3 bg-yellow-100 rounded border">
              <p className="font-semibold text-yellow-900">Key Accessibility Features to Notice:</p>
              <ul className="mt-2 space-y-1 text-sm">
                <li>• Error messages are announced immediately by screen readers</li>
                <li>• Each form field has clear labels and descriptions</li>
                <li>• Keyboard navigation works throughout the form</li>
                <li>• Focus indicators are clearly visible</li>
                <li>• Error messages persist until corrected</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Technical Implementation */}
      <div className="mt-8">
        <h2 className="text-xl font-semibold mb-4">⚙️ Technical Implementation</h2>
        <div className="grid gap-6 sm:grid-cols-1 lg:grid-cols-2">
          <div className="rounded-lg bg-blue-50 border border-blue-200 p-4">
            <h3 className="font-semibold text-blue-900 mb-2">useActionState Hook</h3>
            <div className="text-blue-800 text-sm space-y-2">
              <p>• Replaced useFormState with useActionState</p>
              <p>• Manages form state and validation errors</p>
              <p>• Provides formAction for form submission</p>
              <p>• Returns [state, formAction] for error handling</p>
            </div>
          </div>

          <div className="rounded-lg bg-blue-50 border border-blue-200 p-4">
            <h3 className="font-semibold text-blue-900 mb-2">Zod Validation Schema</h3>
            <div className="text-blue-800 text-sm space-y-2">
              <p>• safeParse() for graceful error handling</p>
              <p>• Custom error messages for each field</p>
              <p>• Type coercion for number inputs</p>
              <p>• Enum validation for status field</p>
            </div>
          </div>

          <div className="rounded-lg bg-blue-50 border border-blue-200 p-4">
            <h3 className="font-semibold text-blue-900 mb-2">Error Display</h3>
            <div className="text-blue-800 text-sm space-y-2">
              <p>• Field-specific error containers</p>
              <p>• aria-live="polite" for screen readers</p>
              <p>• aria-atomic="true" for complete announcements</p>
              <p>• Red text styling for visual indication</p>
            </div>
          </div>

          <div className="rounded-lg bg-blue-50 border border-blue-200 p-4">
            <h3 className="font-semibold text-blue-900 mb-2">Server Actions</h3>
            <div className="text-blue-800 text-sm space-y-2">
              <p>• Server-side validation with Zod</p>
              <p>• Early return for validation failures</p>
              <p>• Structured error object with field mapping</p>
              <p>• Database error handling separation</p>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <div className="mt-8 flex justify-between">
        <Link
          href="/dashboard/chapter13"
          className="flex h-10 items-center rounded-lg bg-blue-600 px-4 text-sm font-medium text-white transition-colors hover:bg-blue-500"
        >
          ← Chapter 13: Handling Errors
        </Link>
        <div className="flex gap-2">
          <Link
            href="/dashboard/invoices/create"
            className="flex h-10 items-center rounded-lg bg-green-600 px-4 text-sm font-medium text-white transition-colors hover:bg-green-500"
          >
            Test Create Form
          </Link>
          <Link
            href="/dashboard/invoices"
            className="flex h-10 items-center rounded-lg bg-purple-600 px-4 text-sm font-medium text-white transition-colors hover:bg-purple-500"
          >
            Test Edit Forms →
          </Link>
        </div>
      </div>

      {/* ESLint Info */}
      <div className="mt-8">
        <div className="rounded-lg bg-gray-50 border border-gray-200 p-6">
          <div className="flex items-center gap-3 mb-4">
            <ExclamationTriangleIcon className="h-6 w-6 text-gray-600" />
            <h3 className="text-lg font-semibold text-gray-900">ESLint Accessibility Plugin</h3>
          </div>
          <div className="text-gray-700 space-y-2">
            <p>✅ <strong>ESLint configured</strong> with Next.js accessibility rules</p>
            <p>✅ <strong>Accessibility linting</strong> included in eslint-config-next</p>
            <p>✅ <strong>Run `pnpm lint`</strong> to check for accessibility issues</p>
            <p>✅ <strong>jsx-a11y plugin</strong> helps catch common accessibility problems</p>
          </div>
          <div className="mt-4 p-3 bg-gray-100 rounded border text-sm text-gray-600">
            <p><strong>Command:</strong> <code>pnpm lint</code></p>
            <p><strong>Checks:</strong> Missing alt text, incorrect ARIA usage, keyboard navigation issues</p>
          </div>
        </div>
      </div>
    </div>
  );
}
