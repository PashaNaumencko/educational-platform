'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { signInAction } from '@modules/auth/auth';
import { signInValidationSchema } from '@repo/shared-libs';
import { Button, Input } from '@repo/shared-ui';
import { Form, Icon } from '@ui/common/common';
import { useAction } from 'next-safe-action/hooks';
import { FC, MouseEvent, useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import * as z from 'zod';

type FormPayload = z.infer<typeof signInValidationSchema>;

type Props = {
  onSignIn: (payload: FormPayload) => void;
};

const SignInForm: FC = () => {
  const [isPasswordShown, setIsPasswordShown] = useState<boolean>(false);
  const { handleSubmit, control } = useForm<FormPayload>({
    resolver: zodResolver(signInValidationSchema),
  });
  const { execute, result } = useAction(signInAction);

  const handleSignInSubmit: SubmitHandler<FormPayload> = (values) => {
    execute(values);
  };

  const handleShownPassword = () => {
    setIsPasswordShown((prevState) => !prevState);
  };

  return (
    <Form
      onSubmit={handleSubmit(handleSignInSubmit)}
      className="w flex flex-col border border-solid border-[] p-5"
    >
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
        endContent={
          <button
            className="focus:outline-none"
            type="button"
            onClick={handleShownPassword}
          >
            {isPasswordShown ? (
              <Icon
                name="eye-off"
                className="pointer-events-none text-2xl text-default-400"
              />
            ) : (
              <Icon
                name="eye"
                className="pointer-events-none text-2xl text-default-400"
              />
            )}
          </button>
        }
      />

      <Button variant="solid" color="primary">
        Sign In
      </Button>
      {/* <input type="submit" /> */}
    </Form>
  );
};

export { SignInForm };
