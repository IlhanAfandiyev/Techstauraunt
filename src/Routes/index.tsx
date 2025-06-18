import MainLayout from '../Components/MainLayout';
import Home from '../Pages/Home';
import NotFound from '../Pages/NotFound';


const id = ":id";
const token = ":token"
const conversationId = ":conversationId";

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
            }
          
        ]
    }
];