import {
  GetUserCommand,
  InitiateAuthCommand,
  InitiateAuthCommandInput,
} from '@aws-sdk/client-cognito-identity-provider';
import z from 'zod';

import { signInValidationSchema } from '@repo/shared-libs';
import { cognitoClient } from '../libs/cognito-client.lib';

const { NEXT_PUBLIC_APP_CLIENT_ID } = process.env;

export const signInWithCredentials = async (
  credentials?: z.infer<typeof signInValidationSchema>,
) => {
  if (!credentials) {
    return null;
  }

  const params: InitiateAuthCommandInput = {
    AuthFlow: 'USER_PASSWORD_AUTH',
    ClientId: NEXT_PUBLIC_APP_CLIENT_ID,
    AuthParameters: {
      USERNAME: credentials.email,
      PASSWORD: credentials.password,
    },
  };

  try {
    const response = await cognitoClient.send(
      new InitiateAuthCommand({ ...params }),
    );

    console.log('response', response);

    if (response.AuthenticationResult) {
      const getUserCommand = new GetUserCommand({
        AccessToken: response.AuthenticationResult.AccessToken,
      });

      const userResponse = await cognitoClient.send(getUserCommand);

      console.log('userResponse', userResponse);

      if (userResponse.UserAttributes) {
        const customAttributes = userResponse.UserAttributes.filter((attr) =>
          attr.Name?.startsWith('custom:'),
        );

        return {
          id: credentials.email,
          ...response.AuthenticationResult,
          customAttributes: customAttributes,
        };
      } else {
        return {
          id: credentials.email,
          ...response.AuthenticationResult,
        };
      }
    } else {
      return null;
    }
  } catch (error) {
    console.error(error);
    return null;
  }
};
