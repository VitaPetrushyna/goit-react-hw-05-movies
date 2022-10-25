import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';

import { AppBar } from '../AppBar/AppBar';
import { AppContainer } from './Layout.styled';
import { Loader } from '../Loader/Loader';

export const SharedLayout = () => {
  return (
    <AppContainer>
      <AppBar />
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </AppContainer>
  );
};
