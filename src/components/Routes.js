import Chat from "./Chat";
import Login from "./Login";
import { CHAT_ROUTE, LOGIN_ROUTE } from "./Utils/consts";

export const publickRoutes = [
  {
    path: LOGIN_ROUTE,
    component: Login,
  },
];

export const privateRoutes = [
  {
    path: CHAT_ROUTE,
    component: Chat,
  },
];
