import Admin from "./Pages/Admin";
import Basket from "./Pages/Basket";
import DevicePages from "./Pages/DevicePages";
import Auth from "./Pages/Auth";
import Shop from "./Pages/Shop";
import { ADMIN_ROUTE, BASKET_ROUTE, DEVICE_ROUTE, LOGIN_ROUTE, REGISTRATION_ROUTE, SHOP_ROUTE } from "./Utils/Consts";

export const authRoutes = [
    {
        path: ADMIN_ROUTE,
        Component: Admin,
    },
    {
        path: BASKET_ROUTE,
        Component: Basket,
    },
]
export const publicRoutes = [
    {
        path: SHOP_ROUTE,
        Component: Shop,
    },
    {
        path: LOGIN_ROUTE,
        Component: Auth,
    },
    {
        path: REGISTRATION_ROUTE,
        Component: Auth,
    },
    {
        path: DEVICE_ROUTE + '/:id',
        Component: DevicePages,
    },
]