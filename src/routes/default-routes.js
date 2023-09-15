import {DEFAULT_PATHS} from "../config/configs";
import {lazy} from "react";



const Login = lazy(() => import('../pages/login'))
const App = lazy(() => import('../pages/App'));

const defaultRoutes = [
    { path: DEFAULT_PATHS.APP, element: <App />},
    { path: DEFAULT_PATHS.LOGIN, element: <Login />}
]