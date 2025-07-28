import NextAuth from 'next-auth';
import Credentials from 'next-auth/providers/credentials';
import { authConfig } from './auth.config';
import { z } from 'zod';
import type { User } from '@/app/lib/definitions';
import bcrypt from 'bcrypt';
import postgres from 'postgres';

const sql = postgres(process.env.POSTGRES_URL!, { ssl: 'require' });

async function getUser(email: string): Promise<User | undefined> {
  try {
    console.log('Searching for user with email:', email);
    const users = await sql<User[]>`SELECT * FROM users WHERE email=${email}`;
    console.log('Found users:', users.length);
    if (users.length > 0) {
      console.log('User found:', { id: users[0].id, email: users[0].email, name: users[0].name });
    }
    return users[0];
  } catch (error) {
    console.error('Failed to fetch user:', error);
    throw new Error('Failed to fetch user.');
  }
}
 
export const { auth, signIn, signOut } = NextAuth({
  ...authConfig,
  providers: [
    Credentials({
      async authorize(credentials) {
        console.log('Authorization attempt with credentials:', credentials);
        const parsedCredentials = z
          .object({ email: z.string().email(), password: z.string().min(6) })
          .safeParse(credentials);
 
        if (parsedCredentials.success) {
          const { email, password } = parsedCredentials.data;
          console.log('Parsed credentials successfully, email:', email);
          const user = await getUser(email);
          if (!user) {
            console.log('User not found in database');
            return null;
          }
          console.log('User found, comparing passwords...');
          const passwordsMatch = await bcrypt.compare(password, user.password);
          console.log('Password match result:', passwordsMatch);
 
          if (passwordsMatch) {
            console.log('Login successful for user:', user.email);
            return user;
          }
        } else {
          console.log('Credential validation failed:', parsedCredentials.error);
        }
 
        console.log('Invalid credentials');
        return null;
      },
    }),
  ],
});
