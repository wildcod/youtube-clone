import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './pages/Home';
import DefaultLayout from './layout/Default';

const router = createBrowserRouter([
  {
    path: '/',
    element: <DefaultLayout />,
    children: [{ index: true, element: <Home /> }],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
