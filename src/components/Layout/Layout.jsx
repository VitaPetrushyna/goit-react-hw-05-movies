import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';

import { AppBar } from '../AppBar/AppBar';
import { AppContainer } from './Layout.styled';

export const Layout = () => {
  return (
    <AppContainer>
      <AppBar />
      <Suspense fallback="">
        <Outlet />
      </Suspense>
    </AppContainer>
  );
};
