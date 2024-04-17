import { NextAuthOptions } from 'next-auth';

import CredentialsProvider from 'next-auth/providers/credentials';
import { signInWithCredentials } from '../api/sign-in-with-credentials';

const nextAuthConfig = {
  pages: {
    signIn: '/sign-in',
  },
  // session: {
  //   strategy: 'jwt',
  //   maxAge: 1 * 24 * 60 * 60, // 1 day
  // },
  providers: [
    CredentialsProvider({
      name: 'Credentials',
      credentials: {
        email: { label: 'Email', type: 'email', placeholder: 'Email' },
        password: { label: 'Password', type: 'password' },
      },
      authorize: signInWithCredentials,
    }),
  ],
} satisfies NextAuthOptions;

export { nextAuthConfig };
