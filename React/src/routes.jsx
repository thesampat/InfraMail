import {
  HomeIcon,
  UserCircleIcon,
  TableCellsIcon
} from "@heroicons/react/24/solid";
import { Home, Profile } from "@/pages/dashboard";
import { SignIn, SignUp } from "@/pages/auth";
import { PresentationChartBarIcon, PresentationChartLineIcon, UserGroupIcon } from "@heroicons/react/24/outline";
import { List } from "@material-tailwind/react";
import MainClient from "./pages/clients/list";
import ClientForm from "./pages/clients/form";

const icon = {
  className: "w-5 h-5 text-inherit",
};

export const routes = [
  {
    layout: "dashboard",
    pages: [
      {
        icon: <HomeIcon {...icon} />,
        name: "dashboard",
        path: "/home",
        element: <Home />,
      },
      {
        icon: <UserGroupIcon {...icon} />,
        name: "clients",
        path: "/client",
        element: <MainClient />
      },
      {
        path: "client/add",
        element: <ClientForm />,
      },
    ],
  },
];

export default routes;