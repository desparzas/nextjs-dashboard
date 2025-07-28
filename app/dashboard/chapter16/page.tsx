import { Metadata } from 'next';
import Link from 'next/link';
import { 
  CheckCircleIcon, 
  ExclamationTriangleIcon,
  InformationCircleIcon,
  GlobeAltIcon,
  MagnifyingGlassIcon,
  ShareIcon,
  EyeIcon
} from '@heroicons/react/24/outline';

export const metadata: Metadata = {
  title: 'Chapter 16: Adding Metadata',
  description: 'Learn about SEO optimization, metadata types, Open Graph images, and Next.js Metadata API',
};

export default function Chapter16Page() {
  return (
    <div className="w-full">
      <div className="flex w-full items-center justify-between">
        <h1 className="text-2xl font-bold">Chapter 16: Adding Metadata</h1>
      </div>

      {/* Introduction */}
      <div className="mt-6 grid gap-6 sm:grid-cols-1 lg:grid-cols-1">
        <div className="rounded-lg bg-blue-50 p-6">
          <div className="flex items-center gap-3">
            <InformationCircleIcon className="h-6 w-6 text-blue-600" />
            <h2 className="text-lg font-semibold text-blue-900">What You'll Learn</h2>
          </div>
          <div className="mt-4 space-y-2 text-blue-800">
            <p>• What metadata is and why it's important for SEO</p>
            <p>• Different types of metadata (title, description, Open Graph, etc.)</p>
            <p>• How to add favicon and Open Graph images using Next.js</p>
            <p>• How to use the Metadata API for page titles and descriptions</p>
            <p>• How to create metadata templates for consistent branding</p>
          </div>
        </div>
      </div>

      {/* Why Metadata Matters */}
      <div className="mt-8">
        <h2 className="text-xl font-semibold mb-4">🌐 Why Metadata Matters</h2>
        <div className="grid gap-4 sm:grid-cols-1 lg:grid-cols-3">
          <div className="rounded-lg bg-green-50 border border-green-200 p-4">
            <div className="flex items-center gap-2 mb-2">
              <MagnifyingGlassIcon className="h-5 w-5 text-green-600" />
              <h3 className="font-semibold text-green-900">SEO Optimization</h3>
            </div>
            <p className="text-green-800 text-sm">
              Search engines use metadata to understand and index your content, 
              improving your ranking in search results.
            </p>
          </div>

          <div className="rounded-lg bg-blue-50 border border-blue-200 p-4">
            <div className="flex items-center gap-2 mb-2">
              <ShareIcon className="h-5 w-5 text-blue-600" />
              <h3 className="font-semibold text-blue-900">Social Shareability</h3>
            </div>
            <p className="text-blue-800 text-sm">
              Open Graph metadata makes your links look appealing when shared 
              on social media platforms like Twitter, Facebook, and LinkedIn.
            </p>
          </div>

          <div className="rounded-lg bg-purple-50 border border-purple-200 p-4">
            <div className="flex items-center gap-2 mb-2">
              <EyeIcon className="h-5 w-5 text-purple-600" />
              <h3 className="font-semibold text-purple-900">User Experience</h3>
            </div>
            <p className="text-purple-800 text-sm">
              Proper metadata provides clear page titles in browser tabs and 
              descriptive previews in search results.
            </p>
          </div>
        </div>
      </div>

      {/* Types of Metadata */}
      <div className="mt-8">
        <h2 className="text-xl font-semibold mb-4">📋 Types of Metadata Implemented</h2>
        <div className="grid gap-4 sm:grid-cols-1 lg:grid-cols-2">
          <div className="rounded-lg bg-gray-50 border border-gray-200 p-4">
            <h3 className="font-semibold text-gray-900 mb-2">Title Metadata</h3>
            <div className="text-gray-700 text-sm space-y-2">
              <p>• <strong>Template:</strong> "%s | Acme Dashboard"</p>
              <p>• <strong>Default:</strong> "Acme Dashboard"</p>
              <p>• <strong>Purpose:</strong> Browser tab titles and search results</p>
              <div className="mt-2 p-2 bg-gray-100 rounded text-xs">
                <code>&lt;title&gt;Invoices | Acme Dashboard&lt;/title&gt;</code>
              </div>
            </div>
          </div>

          <div className="rounded-lg bg-gray-50 border border-gray-200 p-4">
            <h3 className="font-semibold text-gray-900 mb-2">Description Metadata</h3>
            <div className="text-gray-700 text-sm space-y-2">
              <p>• <strong>Purpose:</strong> Search engine result descriptions</p>
              <p>• <strong>Length:</strong> 150-160 characters optimal</p>
              <p>• <strong>Content:</strong> Brief overview of page functionality</p>
              <div className="mt-2 p-2 bg-gray-100 rounded text-xs">
                <code>&lt;meta name="description" content="Manage your invoices..."&gt;</code>
              </div>
            </div>
          </div>

          <div className="rounded-lg bg-gray-50 border border-gray-200 p-4">
            <h3 className="font-semibold text-gray-900 mb-2">Open Graph Metadata</h3>
            <div className="text-gray-700 text-sm space-y-2">
              <p>• <strong>Image:</strong> opengraph-image.jpg in /app</p>
              <p>• <strong>Purpose:</strong> Social media link previews</p>
              <p>• <strong>Auto-generated:</strong> By Next.js file conventions</p>
              <div className="mt-2 p-2 bg-gray-100 rounded text-xs">
                <code>&lt;meta property="og:image" content="/opengraph-image.jpg"&gt;</code>
              </div>
            </div>
          </div>

          <div className="rounded-lg bg-gray-50 border border-gray-200 p-4">
            <h3 className="font-semibold text-gray-900 mb-2">Favicon Metadata</h3>
            <div className="text-gray-700 text-sm space-y-2">
              <p>• <strong>File:</strong> favicon.ico in /app directory</p>
              <p>• <strong>Purpose:</strong> Browser tab and bookmark icons</p>
              <p>• <strong>Auto-detected:</strong> By Next.js file conventions</p>
              <div className="mt-2 p-2 bg-gray-100 rounded text-xs">
                <code>&lt;link rel="icon" href="/favicon.ico"&gt;</code>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Implementation Features */}
      <div className="mt-8">
        <h2 className="text-xl font-semibold mb-4">✅ Metadata Features Implemented</h2>
        <div className="grid gap-4 sm:grid-cols-1 lg:grid-cols-2">
          <div className="rounded-lg bg-green-50 border border-green-200 p-4">
            <div className="flex items-center gap-2 mb-2">
              <CheckCircleIcon className="h-5 w-5 text-green-600" />
              <h3 className="font-semibold text-green-900">Root Layout Template</h3>
            </div>
            <p className="text-green-800 text-sm">
              Configured title template and default metadata in app/layout.tsx 
              for consistent branding across all pages.
            </p>
          </div>

          <div className="rounded-lg bg-green-50 border border-green-200 p-4">
            <div className="flex items-center gap-2 mb-2">
              <CheckCircleIcon className="h-5 w-5 text-green-600" />
              <h3 className="font-semibold text-green-900">Page-Specific Titles</h3>
            </div>
            <p className="text-green-800 text-sm">
              Added custom titles to Login, Dashboard, Invoices, Customers, 
              Create Invoice, and Edit Invoice pages.
            </p>
          </div>

          <div className="rounded-lg bg-green-50 border border-green-200 p-4">
            <div className="flex items-center gap-2 mb-2">
              <CheckCircleIcon className="h-5 w-5 text-green-600" />
              <h3 className="font-semibold text-green-900">Descriptive Content</h3>
            </div>
            <p className="text-green-800 text-sm">
              Each page has a unique description that explains its functionality 
              and purpose for better SEO and user understanding.
            </p>
          </div>

          <div className="rounded-lg bg-green-50 border border-green-200 p-4">
            <div className="flex items-center gap-2 mb-2">
              <CheckCircleIcon className="h-5 w-5 text-green-600" />
              <h3 className="font-semibold text-green-900">Automatic Assets</h3>
            </div>
            <p className="text-green-800 text-sm">
              Favicon and Open Graph image automatically detected by Next.js 
              from app directory for seamless integration.
            </p>
          </div>
        </div>
      </div>

      {/* Page Metadata Examples */}
      <div className="mt-8">
        <h2 className="text-xl font-semibold mb-4">📄 Page Metadata Examples</h2>
        <div className="space-y-4">
          <div className="rounded-lg bg-blue-50 border border-blue-200 p-4">
            <h3 className="font-semibold text-blue-900 mb-2">Dashboard Pages</h3>
            <div className="grid gap-3 sm:grid-cols-1 lg:grid-cols-2 text-sm">
              <div className="bg-blue-100 p-3 rounded">
                <p><strong>Dashboard:</strong> "Dashboard | Acme Dashboard"</p>
                <p className="text-blue-700">Business overview and revenue trends</p>
              </div>
              <div className="bg-blue-100 p-3 rounded">
                <p><strong>Invoices:</strong> "Invoices | Acme Dashboard"</p>
                <p className="text-blue-700">Manage invoices with search and pagination</p>
              </div>
              <div className="bg-blue-100 p-3 rounded">
                <p><strong>Customers:</strong> "Customers | Acme Dashboard"</p>
                <p className="text-blue-700">Manage customer information and details</p>
              </div>
              <div className="bg-blue-100 p-3 rounded">
                <p><strong>Create Invoice:</strong> "Create Invoice | Acme Dashboard"</p>
                <p className="text-blue-700">Create a new invoice for customers</p>
              </div>
            </div>
          </div>

          <div className="rounded-lg bg-purple-50 border border-purple-200 p-4">
            <h3 className="font-semibold text-purple-900 mb-2">Authentication Pages</h3>
            <div className="bg-purple-100 p-3 rounded text-sm">
              <p><strong>Login:</strong> "Login | Acme Dashboard"</p>
              <p className="text-purple-700">Sign in to access your dashboard</p>
            </div>
          </div>
        </div>
      </div>

      {/* Testing Instructions */}
      <div className="mt-8">
        <h2 className="text-xl font-semibold mb-4">🧪 Test Metadata Implementation</h2>
        <div className="rounded-lg bg-yellow-50 border border-yellow-200 p-6">
          <div className="flex items-center gap-3 mb-4">
            <GlobeAltIcon className="h-6 w-6 text-yellow-600" />
            <h3 className="text-lg font-semibold text-yellow-900">How to Verify Metadata</h3>
          </div>
          <div className="space-y-4 text-yellow-800">
            <div>
              <h4 className="font-semibold mb-2">🔍 Browser Developer Tools:</h4>
              <ol className="list-decimal list-inside space-y-1 ml-4 text-sm">
                <li>Open any page in the dashboard</li>
                <li>Right-click and select "Inspect Element"</li>
                <li>Look in the &lt;head&gt; section for metadata tags</li>
                <li>Verify title, description, and Open Graph tags</li>
              </ol>
            </div>
            <div>
              <h4 className="font-semibold mb-2">📱 Social Media Testing:</h4>
              <ol className="list-decimal list-inside space-y-1 ml-4 text-sm">
                <li>Deploy your app to Vercel or another hosting service</li>
                <li>Share the URL on social media platforms</li>
                <li>Verify that Open Graph image and description appear</li>
                <li>Check link preview appearance</li>
              </ol>
            </div>
            <div>
              <h4 className="font-semibold mb-2">🏷️ Browser Tab Titles:</h4>
              <p className="text-sm ml-4">
                Navigate between different pages and observe how the browser tab 
                title changes to reflect the current page with consistent branding.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <div className="mt-8 flex justify-between">
        <Link
          href="/dashboard/chapter15"
          className="flex h-10 items-center rounded-lg bg-blue-600 px-4 text-sm font-medium text-white transition-colors hover:bg-blue-500"
        >
          ← Chapter 15: Adding Authentication
        </Link>
        <div className="flex gap-2">
          <Link
            href="/dashboard"
            className="flex h-10 items-center rounded-lg bg-green-600 px-4 text-sm font-medium text-white transition-colors hover:bg-green-500"
          >
            Test Dashboard Title
          </Link>
          <Link
            href="/dashboard/invoices"
            className="flex h-10 items-center rounded-lg bg-purple-600 px-4 text-sm font-medium text-white transition-colors hover:bg-purple-500"
          >
            Test Invoices Title →
          </Link>
        </div>
      </div>

      {/* SEO Best Practices */}
      <div className="mt-8">
        <div className="rounded-lg bg-green-50 border border-green-200 p-6">
          <div className="flex items-center gap-3 mb-4">
            <ExclamationTriangleIcon className="h-6 w-6 text-green-600" />
            <h3 className="text-lg font-semibold text-green-900">SEO Best Practices Implemented</h3>
          </div>
          <div className="text-green-700 space-y-2">
            <p>🎯 <strong>Title Templates:</strong> Consistent branding with "| Acme Dashboard" suffix</p>
            <p>🎯 <strong>Unique Descriptions:</strong> Each page has specific, descriptive content</p>
            <p>🎯 <strong>Optimal Length:</strong> Titles under 60 characters, descriptions under 160</p>
            <p>🎯 <strong>File-based Assets:</strong> Favicon and OG images automatically detected</p>
            <p>🎯 <strong>Metadata Base:</strong> Configured for absolute URLs in production</p>
            <p>🎯 <strong>Social Sharing:</strong> Open Graph metadata for appealing link previews</p>
          </div>
        </div>
      </div>
    </div>
  );
}
