import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { ROUTES } from './Routes'; 

const routes = createBrowserRouter(ROUTES);

const App = () => {
  return (
      <div >
          <RouterProvider router={routes} />
      </div>
  );
};

export default App;