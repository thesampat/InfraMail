import {
  HomeIcon,
  UserCircleIcon,
  TableCellsIcon
} from "@heroicons/react/24/solid";
import { Home, Profile } from "@/pages/dashboard";
import { SignIn, SignUp } from "@/pages/auth";
import { PresentationChartBarIcon, PresentationChartLineIcon, UserGroupIcon } from "@heroicons/react/24/outline";
import MainVendor from "./pages/vendors/vendorMain";

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
      // {
      //   icon: <UserCircleIcon {...icon} />,
      //   name: "profile",
      //   path: "/profile",
      //   element: <Profile />,
      // },
      {
        icon: <UserGroupIcon {...icon} />,
        name: "vendor",
        path: "/vendor",
        element: <MainVendor />,
      },
    ],
  },
];

export default routes;
