import { RouterProvider, createHashRouter } from 'react-router-dom';
import { Main } from '@/components/pages';

const Router = () => {
  const router = createHashRouter([
    {
      path: '*',
      element: <Main />
    }
  ]);

  return <RouterProvider router={router} />;
}

export default Router;