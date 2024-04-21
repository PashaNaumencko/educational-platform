import { nextAuthConfig } from '@modules/auth/config/next-auth.config';
import NextAuth from 'next-auth';

const handler = NextAuth(nextAuthConfig);

export { handler as GET, handler as POST };
