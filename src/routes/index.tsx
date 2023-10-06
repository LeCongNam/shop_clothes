import { RouteObject, createBrowserRouter } from 'react-router-dom';
import HomePage from '../pages/HomePage';

const publicRouter: RouteObject[] = [
    {
        path: '/',
        element: <HomePage />,
    },
];

const router = createBrowserRouter([...publicRouter]);

export default router;
