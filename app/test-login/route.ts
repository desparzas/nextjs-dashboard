import bcrypt from 'bcrypt';
import postgres from 'postgres';

const sql = postgres(process.env.POSTGRES_URL!, { ssl: 'require' });

export async function GET() {
  try {
    const email = 'user@nextmail.com';
    const password = '123456';
    
    // Get user from database
    const users = await sql`SELECT * FROM users WHERE email=${email}`;
    
    if (users.length === 0) {
      return Response.json({ error: 'User not found' }, { status: 404 });
    }
    
    const user = users[0];
    
    // Compare password
    const passwordsMatch = await bcrypt.compare(password, user.password);
    
    // Create a new hash for comparison
    const newHash = await bcrypt.hash(password, 10);
    
    return Response.json({ 
      userFound: true,
      email: user.email,
      name: user.name,
      storedPasswordHash: user.password,
      passwordsMatch,
      newHashForComparison: newHash,
      testPassword: password
    });
  } catch (error) {
    console.error('Test login error:', error);
    return Response.json({ 
      error: error instanceof Error ? error.message : 'Unknown error',
      details: error 
    }, { status: 500 });
  }
}
