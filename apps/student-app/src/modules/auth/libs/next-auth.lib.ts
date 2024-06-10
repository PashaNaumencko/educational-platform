import NextAuth from 'next-auth';
import { nextAuthConfig } from '../auth';

import 'next-auth/jwt';

export const { handlers, auth, signIn, signOut } = NextAuth(nextAuthConfig);
