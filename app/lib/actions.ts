'use server';

import { z } from 'zod';
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';

// We'll use the sql connection from data.ts for database operations
// In production, you would connect to your actual database here

const FormSchema = z.object({
  id: z.string(),
  customerId: z.string({
    invalid_type_error: 'Please select a customer.',
  }),
  amount: z.coerce
    .number()
    .gt(0, { message: 'Please enter an amount greater than $0.' }),
  status: z.enum(['pending', 'paid'], {
    invalid_type_error: 'Please select an invoice status.',
  }),
  date: z.string(),
});

const CreateInvoice = FormSchema.omit({ id: true, date: true });
const UpdateInvoice = FormSchema.omit({ id: true, date: true });

export async function createInvoice(formData: FormData) {
  // Validate form using Zod
  const { customerId, amount, status } = CreateInvoice.parse({
    customerId: formData.get('customerId'),
    amount: formData.get('amount'),
    status: formData.get('status'),
  });

  // Convert amount to cents
  const amountInCents = amount * 100;
  
  // Create date in YYYY-MM-DD format
  const date = new Date().toISOString().split('T')[0];

  // For demo purposes, we'll simulate the database operation
  // In a real app, you would insert into your database here

  console.log('Creating invoice:', {
    customerId,
    amountInCents,
    status,
    date,
  });

  // Simulate a delay
  await new Promise(resolve => setTimeout(resolve, 1000));

  // Revalidate the cache for the invoices page and redirect the user
  revalidatePath('/dashboard/invoices');
  redirect('/dashboard/invoices');
}

export async function updateInvoice(id: string, formData: FormData) {
  const { customerId, amount, status } = UpdateInvoice.parse({
    customerId: formData.get('customerId'),
    amount: formData.get('amount'),
    status: formData.get('status'),
  });

  const amountInCents = amount * 100;

  // For demo purposes, we'll simulate the database operation
  // In a real app, you would update your database here

  console.log('Updating invoice:', {
    id,
    customerId,
    amountInCents,
    status,
  });

  // Simulate a delay
  await new Promise(resolve => setTimeout(resolve, 1000));

  revalidatePath('/dashboard/invoices');
  redirect('/dashboard/invoices');
}

export async function deleteInvoice(id: string) {
  // For demo purposes, we'll simulate the database operation
  // In a real app, you would delete from your database here

  console.log('Deleting invoice:', id);

  // Simulate a delay
  await new Promise(resolve => setTimeout(resolve, 500));

  revalidatePath('/dashboard/invoices');
}
