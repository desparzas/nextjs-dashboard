import { Metadata } from 'next';
import Link from 'next/link';
import { 
  CheckCircleIcon, 
  ExclamationTriangleIcon,
  InformationCircleIcon,
  ShieldCheckIcon,
  UserIcon,
  KeyIcon
} from '@heroicons/react/24/outline';

export const metadata: Metadata = {
  title: 'Chapter 15: Adding Authentication',
  description: 'Learn about authentication with NextAuth.js, middleware protection, and secure user sessions',
};

export default function Chapter15Page() {
  return (
    <div className="w-full">
      <div className="flex w-full items-center justify-between">
        <h1 className="text-2xl font-bold">Chapter 15: Adding Authentication</h1>
      </div>

      {/* Introduction */}
      <div className="mt-6 grid gap-6 sm:grid-cols-1 lg:grid-cols-1">
        <div className="rounded-lg bg-blue-50 p-6">
          <div className="flex items-center gap-3">
            <InformationCircleIcon className="h-6 w-6 text-blue-600" />
            <h2 className="text-lg font-semibold text-blue-900">What You'll Learn</h2>
          </div>
          <div className="mt-4 space-y-2 text-blue-800">
            <p>• What is authentication vs authorization</p>
            <p>• How to add authentication to your app using NextAuth.js</p>
            <p>• How to use Middleware to redirect users and protect routes</p>
            <p>• How to use React's useActionState for form errors and pending states</p>
            <p>• How to implement secure login and logout functionality</p>
          </div>
        </div>
      </div>

      {/* Authentication vs Authorization */}
      <div className="mt-8">
        <h2 className="text-xl font-semibold mb-4">🔐 Authentication vs Authorization</h2>
        <div className="grid gap-4 sm:grid-cols-1 lg:grid-cols-2">
          <div className="rounded-lg bg-green-50 border border-green-200 p-4">
            <div className="flex items-center gap-2 mb-2">
              <UserIcon className="h-5 w-5 text-green-600" />
              <h3 className="font-semibold text-green-900">Authentication</h3>
            </div>
            <p className="text-green-800 text-sm mb-2">
              <strong>Who are you?</strong> - Verifying user identity
            </p>
            <ul className="text-green-700 text-sm space-y-1">
              <li>• Username and password verification</li>
              <li>• Two-factor authentication (2FA)</li>
              <li>• Biometric verification</li>
              <li>• OAuth with Google, GitHub, etc.</li>
            </ul>
          </div>

          <div className="rounded-lg bg-blue-50 border border-blue-200 p-4">
            <div className="flex items-center gap-2 mb-2">
              <ShieldCheckIcon className="h-5 w-5 text-blue-600" />
              <h3 className="font-semibold text-blue-900">Authorization</h3>
            </div>
            <p className="text-blue-800 text-sm mb-2">
              <strong>What can you do?</strong> - Determining permissions
            </p>
            <ul className="text-blue-700 text-sm space-y-1">
              <li>• Role-based access control (RBAC)</li>
              <li>• Resource permissions</li>
              <li>• Admin vs user privileges</li>
              <li>• API endpoint restrictions</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Features Implemented */}
      <div className="mt-8">
        <h2 className="text-xl font-semibold mb-4">✅ Authentication Features Implemented</h2>
        <div className="grid gap-4 sm:grid-cols-1 lg:grid-cols-2">
          <div className="rounded-lg bg-green-50 border border-green-200 p-4">
            <div className="flex items-center gap-2 mb-2">
              <CheckCircleIcon className="h-5 w-5 text-green-600" />
              <h3 className="font-semibold text-green-900">NextAuth.js Integration</h3>
            </div>
            <p className="text-green-800 text-sm">
              Configured NextAuth.js with Credentials provider for secure authentication 
              with session management and cookie encryption.
            </p>
          </div>

          <div className="rounded-lg bg-green-50 border border-green-200 p-4">
            <div className="flex items-center gap-2 mb-2">
              <CheckCircleIcon className="h-5 w-5 text-green-600" />
              <h3 className="font-semibold text-green-900">Middleware Protection</h3>
            </div>
            <p className="text-green-800 text-sm">
              Next.js Middleware protects routes before they render, redirecting 
              unauthenticated users to login automatically.
            </p>
          </div>

          <div className="rounded-lg bg-green-50 border border-green-200 p-4">
            <div className="flex items-center gap-2 mb-2">
              <CheckCircleIcon className="h-5 w-5 text-green-600" />
              <h3 className="font-semibold text-green-900">Secure Login Form</h3>
            </div>
            <p className="text-green-800 text-sm">
              Login form with useActionState for error handling, form validation, 
              and pending states with accessibility features.
            </p>
          </div>

          <div className="rounded-lg bg-green-50 border border-green-200 p-4">
            <div className="flex items-center gap-2 mb-2">
              <CheckCircleIcon className="h-5 w-5 text-green-600" />
              <h3 className="font-semibold text-green-900">Password Hashing</h3>
            </div>
            <p className="text-green-800 text-sm">
              bcrypt password hashing for secure credential verification with 
              salt-based protection against rainbow table attacks.
            </p>
          </div>

          <div className="rounded-lg bg-green-50 border border-green-200 p-4">
            <div className="flex items-center gap-2 mb-2">
              <CheckCircleIcon className="h-5 w-5 text-green-600" />
              <h3 className="font-semibold text-green-900">Logout Functionality</h3>
            </div>
            <p className="text-green-800 text-sm">
              Secure logout with session termination and redirect to home page 
              using Server Actions in the sidebar navigation.
            </p>
          </div>

          <div className="rounded-lg bg-green-50 border border-green-200 p-4">
            <div className="flex items-center gap-2 mb-2">
              <CheckCircleIcon className="h-5 w-5 text-green-600" />
              <h3 className="font-semibold text-green-900">Route Protection</h3>
            </div>
            <p className="text-green-800 text-sm">
              All dashboard routes are protected. Unauthenticated access 
              automatically redirects to login with callback URL preservation.
            </p>
          </div>
        </div>
      </div>

      {/* Testing Credentials */}
      <div className="mt-8">
        <h2 className="text-xl font-semibold mb-4">🧪 Test Authentication</h2>
        <div className="rounded-lg bg-yellow-50 border border-yellow-200 p-6">
          <div className="flex items-center gap-3 mb-4">
            <KeyIcon className="h-6 w-6 text-yellow-600" />
            <h3 className="text-lg font-semibold text-yellow-900">Demo Credentials</h3>
          </div>
          <div className="grid gap-4 sm:grid-cols-1 lg:grid-cols-2">
            <div className="bg-yellow-100 p-4 rounded border">
              <h4 className="font-semibold text-yellow-900 mb-2">Login Credentials:</h4>
              <p className="text-yellow-800 text-sm">
                <strong>Email:</strong> user@nextmail.com<br />
                <strong>Password:</strong> 123456
              </p>
            </div>
            <div className="bg-yellow-100 p-4 rounded border">
              <h4 className="font-semibold text-yellow-900 mb-2">Testing Steps:</h4>
              <ol className="list-decimal list-inside text-yellow-800 text-sm space-y-1">
                <li>Try accessing dashboard without login</li>
                <li>Get redirected to login page</li>
                <li>Use credentials above to sign in</li>
                <li>Access dashboard successfully</li>
                <li>Test logout functionality</li>
              </ol>
            </div>
          </div>
        </div>
      </div>

      {/* Technical Implementation */}
      <div className="mt-8">
        <h2 className="text-xl font-semibold mb-4">⚙️ Technical Implementation</h2>
        <div className="grid gap-6 sm:grid-cols-1 lg:grid-cols-2">
          <div className="rounded-lg bg-blue-50 border border-blue-200 p-4">
            <h3 className="font-semibold text-blue-900 mb-2">NextAuth.js Configuration</h3>
            <div className="text-blue-800 text-sm space-y-2">
              <p>• <strong>auth.config.ts:</strong> Authentication configuration</p>
              <p>• <strong>middleware.ts:</strong> Route protection middleware</p>
              <p>• <strong>auth.ts:</strong> Credentials provider setup</p>
              <p>• <strong>Callbacks:</strong> Custom authorization logic</p>
            </div>
          </div>

          <div className="rounded-lg bg-blue-50 border border-blue-200 p-4">
            <h3 className="font-semibold text-blue-900 mb-2">Security Features</h3>
            <div className="text-blue-800 text-sm space-y-2">
              <p>• <strong>Session encryption:</strong> AUTH_SECRET for cookies</p>
              <p>• <strong>Password hashing:</strong> bcrypt with salt</p>
              <p>• <strong>CSRF protection:</strong> Built-in NextAuth.js security</p>
              <p>• <strong>Secure redirects:</strong> Callback URL validation</p>
            </div>
          </div>

          <div className="rounded-lg bg-blue-50 border border-blue-200 p-4">
            <h3 className="font-semibold text-blue-900 mb-2">Form Handling</h3>
            <div className="text-blue-800 text-sm space-y-2">
              <p>• <strong>useActionState:</strong> Form state management</p>
              <p>• <strong>Server Actions:</strong> Secure authentication logic</p>
              <p>• <strong>Error handling:</strong> User-friendly error messages</p>
              <p>• <strong>Pending states:</strong> Loading indicators during auth</p>
            </div>
          </div>

          <div className="rounded-lg bg-blue-50 border border-blue-200 p-4">
            <h3 className="font-semibold text-blue-900 mb-2">Route Protection</h3>
            <div className="text-blue-800 text-sm space-y-2">
              <p>• <strong>Middleware matcher:</strong> Protects all dashboard routes</p>
              <p>• <strong>Authorization callback:</strong> Session verification</p>
              <p>• <strong>Automatic redirects:</strong> Login/dashboard routing</p>
              <p>• <strong>Performance:</strong> Protection before page render</p>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <div className="mt-8 flex justify-between">
        <Link
          href="/dashboard/chapter14"
          className="flex h-10 items-center rounded-lg bg-blue-600 px-4 text-sm font-medium text-white transition-colors hover:bg-blue-500"
        >
          ← Chapter 14: Improving Accessibility
        </Link>
        <Link
          href="/login"
          className="flex h-10 items-center rounded-lg bg-green-600 px-4 text-sm font-medium text-white transition-colors hover:bg-green-500"
        >
          Test Login Page →
        </Link>
      </div>

      {/* Security Best Practices */}
      <div className="mt-8">
        <div className="rounded-lg bg-red-50 border border-red-200 p-6">
          <div className="flex items-center gap-3 mb-4">
            <ExclamationTriangleIcon className="h-6 w-6 text-red-600" />
            <h3 className="text-lg font-semibold text-red-900">Security Best Practices</h3>
          </div>
          <div className="text-red-700 space-y-2">
            <p>🔒 <strong>Environment Variables:</strong> AUTH_SECRET stored securely in .env</p>
            <p>🔒 <strong>Password Hashing:</strong> bcrypt with salt for secure storage</p>
            <p>🔒 <strong>Session Management:</strong> Encrypted cookies with NextAuth.js</p>
            <p>🔒 <strong>Route Protection:</strong> Middleware prevents unauthorized access</p>
            <p>🔒 <strong>HTTPS in Production:</strong> Always use HTTPS for authentication</p>
            <p>🔒 <strong>Regular Updates:</strong> Keep NextAuth.js and dependencies updated</p>
          </div>
        </div>
      </div>
    </div>
  );
}
