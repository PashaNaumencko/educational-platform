import { CognitoIdentityProviderClient } from '@aws-sdk/client-cognito-identity-provider';
const { NEXT_PUBLIC_COGNITO_REGION } = process.env;

export const cognitoClient = new CognitoIdentityProviderClient({
  region: NEXT_PUBLIC_COGNITO_REGION,
});
