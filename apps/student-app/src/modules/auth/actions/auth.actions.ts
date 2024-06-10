'use server';

import { SignUpCommand } from '@aws-sdk/client-cognito-identity-provider';
import { actionClient } from '@common/libs/libs';
import { signInValidationSchema } from '@repo/shared-libs';
import { AuthError, CredentialsSigninError } from '../exceptions/exceptions';
import { cognitoClient } from '../libs/cognito-client.lib';
import { signIn, signOut } from '../libs/next-auth.lib';

export const signInAction = actionClient
  .metadata({ actionName: 'signInAction' })
  .schema(signInValidationSchema)
  .action(async (payload) => {
    try {
      const result = await signIn('credentials', payload);

      return result;
    } catch (error) {
      throw new CredentialsSigninError('Invalid credentials');
    }
  });

export const signOutAction = actionClient
  .metadata({ actionName: 'signOutAction' })
  .action(async () => {
    try {
      const result = await signOut();

      return result;
    } catch (error) {
      throw new AuthError('SignOut Error');
    }
  });
