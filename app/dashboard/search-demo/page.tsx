import Pagination from '@/app/ui/invoices/pagination';
import Search from '@/app/ui/search';
import { CreateInvoice } from '@/app/ui/invoices/buttons';
import { lusitana } from '@/app/ui/fonts';
import { InvoicesTableSkeleton } from '@/app/ui/skeletons';
import { Suspense } from 'react';

// Mock data for demonstration
const mockInvoices = [
  { id: '1', customer: 'Acme Corp', email: 'acme@example.com', amount: 15795, status: 'pending' },
  { id: '2', customer: 'Delba de Oliveira', email: 'delba@example.com', amount: 20348, status: 'paid' },
  { id: '3', customer: 'Lee Robinson', email: 'lee@example.com', amount: 3040, status: 'paid' },
  { id: '4', customer: 'Michael Novotny', email: 'michael@example.com', amount: 44800, status: 'paid' },
  { id: '5', customer: 'Evil Rabbit', email: 'evil@example.com', amount: 34577, status: 'pending' },
  { id: '6', customer: 'Emil Kowalski', email: 'emil@example.com', amount: 54246, status: 'pending' },
  { id: '7', customer: 'Amy Burns', email: 'amy@example.com', amount: 666, status: 'paid' },
  { id: '8', customer: 'Balazs Orban', email: 'balazs@example.com', amount: 32545, status: 'paid' },
  { id: '9', customer: 'Tom Cook', email: 'tom@example.com', amount: 1250, status: 'pending' },
  { id: '10', customer: 'Alex Smith', email: 'alex@example.com', amount: 8945, status: 'paid' },
  { id: '11', customer: 'Jordan Johnson', email: 'jordan@example.com', amount: 12000, status: 'pending' },
  { id: '12', customer: 'Casey Miller', email: 'casey@example.com', amount: 7500, status: 'paid' },
];

function MockTable({ query, currentPage }: { query: string; currentPage: number }) {
  // Filter invoices based on query
  const filteredInvoices = mockInvoices.filter(invoice =>
    invoice.customer.toLowerCase().includes(query.toLowerCase()) ||
    invoice.email.toLowerCase().includes(query.toLowerCase()) ||
    invoice.amount.toString().includes(query)
  );

  // Paginate results (6 items per page)
  const itemsPerPage = 6;
  const startIndex = (currentPage - 1) * itemsPerPage;
  const paginatedInvoices = filteredInvoices.slice(startIndex, startIndex + itemsPerPage);

  // Simulate loading delay
  return (
    <div className="mt-6 flow-root">
      <div className="inline-block min-w-full align-middle">
        <div className="rounded-lg bg-gray-50 p-2 md:pt-0">
          <div className="md:hidden">
            {paginatedInvoices.map((invoice) => (
              <div key={invoice.id} className="mb-2 w-full rounded-md bg-white p-4">
                <div className="flex items-center justify-between border-b pb-4">
                  <div>
                    <div className="mb-2 flex items-center">
                      <p>{invoice.customer}</p>
                    </div>
                    <p className="text-sm text-gray-500">{invoice.email}</p>
                  </div>
                  <div className={`inline-flex items-center rounded-full px-2 py-1 text-xs ${
                    invoice.status === 'paid' 
                      ? 'bg-green-500 text-white' 
                      : 'bg-gray-100 text-gray-600'
                  }`}>
                    {invoice.status}
                  </div>
                </div>
                <div className="flex w-full items-center justify-between pt-4">
                  <div>
                    <p className="text-xl font-medium">
                      ${(invoice.amount / 100).toFixed(2)}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <table className="hidden min-w-full text-gray-900 md:table">
            <thead className="rounded-lg text-left text-sm font-normal">
              <tr>
                <th scope="col" className="px-4 py-5 font-medium sm:pl-6">
                  Customer
                </th>
                <th scope="col" className="px-3 py-5 font-medium">
                  Email
                </th>
                <th scope="col" className="px-3 py-5 font-medium">
                  Amount
                </th>
                <th scope="col" className="px-3 py-5 font-medium">
                  Status
                </th>
              </tr>
            </thead>
            <tbody className="bg-white">
              {paginatedInvoices.map((invoice, index) => (
                <tr
                  key={invoice.id}
                  className="w-full border-b py-3 text-sm last-of-type:border-none [&:first-child>td:first-child]:rounded-tl-lg [&:first-child>td:last-child]:rounded-tr-lg [&:last-child>td:first-child]:rounded-bl-lg [&:last-child>td:last-child]:rounded-br-lg"
                >
                  <td className="whitespace-nowrap py-3 pl-6 pr-3">
                    <div className="flex items-center gap-3">
                      <p>{invoice.customer}</p>
                    </div>
                  </td>
                  <td className="whitespace-nowrap px-3 py-3">
                    {invoice.email}
                  </td>
                  <td className="whitespace-nowrap px-3 py-3">
                    ${(invoice.amount / 100).toFixed(2)}
                  </td>
                  <td className="whitespace-nowrap px-3 py-3">
                    <div className={`inline-flex items-center rounded-full px-2 py-1 text-xs ${
                      invoice.status === 'paid' 
                        ? 'bg-green-500 text-white' 
                        : 'bg-gray-100 text-gray-600'
                    }`}>
                      {invoice.status}
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          
          {paginatedInvoices.length === 0 && (
            <div className="py-10 text-center text-gray-500">
              No invoices found matching "{query}"
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

function getMockTotalPages(query: string) {
  const filteredInvoices = mockInvoices.filter(invoice =>
    invoice.customer.toLowerCase().includes(query.toLowerCase()) ||
    invoice.email.toLowerCase().includes(query.toLowerCase()) ||
    invoice.amount.toString().includes(query)
  );
  return Math.ceil(filteredInvoices.length / 6);
}

export default async function Page(props: Readonly<{
  searchParams?: Promise<{
    query?: string;
    page?: string;
  }>;
}>) {
  const searchParams = await props.searchParams;
  const query = searchParams?.query || '';
  const currentPage = Number(searchParams?.page) || 1;
  const totalPages = getMockTotalPages(query);

  return (
    <div className="w-full">
      <div className="flex w-full items-center justify-between">
        <h1 className={`${lusitana.className} text-2xl`}>Search & Pagination Demo</h1>
      </div>
      
      <div className="mt-4 mb-4 p-4 bg-blue-50 rounded-lg">
        <p className="text-sm text-blue-800">
          <strong>Demo Instructions:</strong> This page demonstrates the search and pagination functionality 
          with mock data. Try searching for customer names (like "Delba" or "Lee") or amounts (like "666"). 
          Notice how the URL updates with your search parameters and pagination state.
        </p>
      </div>
      
      <div className="mt-4 flex items-center justify-between gap-2 md:mt-8">
        <Search placeholder="Search invoices..." />
        <CreateInvoice />
      </div>
      <Suspense key={query + currentPage} fallback={<InvoicesTableSkeleton />}>
        <MockTable query={query} currentPage={currentPage} />
      </Suspense>
      <div className="mt-5 flex w-full justify-center">
        <Pagination totalPages={totalPages} />
      </div>
    </div>
  );
}
