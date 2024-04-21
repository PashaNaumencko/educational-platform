import { getServerSession } from 'next-auth/next';
import { nextAuthConfig } from '../config/next-auth.config';

export const getSession = () => getServerSession(nextAuthConfig);
