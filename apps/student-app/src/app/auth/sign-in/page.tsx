import { SignInForm } from '@ui/modules/auth/auth';
import Image from 'next/image';
import React from 'react';
import AuthPlaceholder from '@assets/auth/auth-placeholder.jpg';

export default function SignIn() {
  return (
    <div className="flex">
      <div className="w-[50%]">
        <SignInForm />
      </div>

      <div className="w-[50%]">
        <Image fill src={AuthPlaceholder} alt="auth-placeholder" />
      </div>
    </div>
  );
}
