import MainLayout from '../Components/MainLayout';
import AboutUs from '../Pages/About';
import FAQ from '../Pages/FAQ';
import Home from '../Pages/Home';
import NotFound from '../Pages/NotFound';
import Restaurant from '../Pages/Restaurant';




export const ROUTES = [
    {
        element: <MainLayout />,
        path: '/',
        children: [
            {
                index: true,
                element: <Home />
            },
            {
                path:'*',
                element: <NotFound/>
            },
          {
                path:'/restaurant',
                element: <Restaurant/>
            },
            {
                path:'/FAQ',
                element: <FAQ/>
            },
            {
                path:'/About',
                element: <AboutUs/>
            }
        ]
    }
];