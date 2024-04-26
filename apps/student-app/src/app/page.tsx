import { Typography, Checkbox, Button, Input } from '@repo/shared-ui';
import { FC } from 'react';

const Page: FC = () => {
  return (
    <main className="flex h-full flex-col items-center justify-center">
      <Typography variant="h3">H3 Example</Typography>
      <Typography variant="body1">Body1 Example</Typography>
      <Button />
      <Checkbox />
      <Input type="email" label="Email" placeholder="Enter your email" />
    </main>
  );
};

export default Page;
