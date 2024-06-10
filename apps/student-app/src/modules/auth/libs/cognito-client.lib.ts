import { CognitoIdentityProviderClient } from '@aws-sdk/client-cognito-identity-provider';
const { COGNITO_REGION } = process.env;

export const cognitoClient = new CognitoIdentityProviderClient({
  region: COGNITO_REGION,
});
