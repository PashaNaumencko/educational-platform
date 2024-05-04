import { SignInForm } from '@ui/modules/auth/auth';
import { signIn } from 'next-auth/react';
import React from 'react';

export default function SignIn() {
  const handleSignIn = (values) => {
    signIn('credentials', values);
  };

  return <SignInForm onSignIn={handleSignIn} />;
}
