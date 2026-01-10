'use client';

import React from 'react';
import { useRouter } from 'next/navigation';

const LoginPage: React.FC = () => {
  const router = useRouter();

  // Redirect to home page to trigger the modal instead
  React.useEffect(() => {
    router.push('/');
  }, [router]);

  return null;
};

export default LoginPage;