import { createBrowserRouter } from 'react-router-dom';
import { PokeAppLayout } from '../layouts/PokeAppLayout';



export const router = createBrowserRouter([
  {
    path: '/',
    element: <PokeAppLayout/>,
    children: [
      {
        path: '',
        element: <>Hello World</>
      },
    ]
  }
]);
