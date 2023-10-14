import { RouteObject, createBrowserRouter } from 'react-router-dom'
import { Detail, HomePage } from '../pages'

const publicRouter: RouteObject[] = [
    {
        path: '/',
        element: <HomePage />,
    },
    {
        path: '/detail',
        element: <Detail />,
    },
]

const router = createBrowserRouter([...publicRouter])

export default router
