'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { signInValidationSchema } from '@repo/shared-libs';
import { Button, Input } from '@repo/shared-ui';
import { Form } from '@ui/common/common';
import { FC, MouseEvent, useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import * as z from 'zod';

type Props = {
  onSignIn: () => void;
};

type FormPayload = z.infer<typeof signInValidationSchema>;

const SignInForm: FC<Props> = ({ onSignIn }) => {
  const [isPasswordShown, setIsPasswordShown] = useState<boolean>(false);
  const { handleSubmit, control } = useForm<FormPayload>({
    resolver: zodResolver(signInValidationSchema),
  });

  const handleSignInSubmit: SubmitHandler<FormPayload> = (values) => {
    onSignIn(values);
  };

  const handleShownPassword = () => {
    setIsPasswordShown((prevState) => !prevState);
  };

  const handleMouseDownPassword = (event: MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
  };

  return (
    <Form onSubmit={handleSubmit(handleSignInSubmit)} className="">
      <Form.Input
        name="email"
        control={control}
        type="email"
        label="Enter email"
        placeholder="mail@example.com"
        autoComplete="off"
      />

      <Form.Input
        name="password"
        control={control}
        label="Enter password"
        type={isPasswordShown ? 'text' : 'password'}
        placeholder="••••••"
      />

      <Button variant="solid" color="primary">
        Sign In
      </Button>
      {/* <input type="submit" /> */}
    </Form>
  );
};

export { SignInForm };
