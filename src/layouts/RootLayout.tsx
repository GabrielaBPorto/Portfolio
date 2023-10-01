import React, { ReactNode } from 'react';
import { useRouter } from 'next/router';

type RootLayoutProps = {
  children: ReactNode;
};

const RootLayout: React.FC<RootLayoutProps> = ({ children }) => {
  const router = useRouter();
  const isHome = router.pathname === '/';

  return (
    <>
      <main>{children}</main>
    </>
  );
};

export default RootLayout;
