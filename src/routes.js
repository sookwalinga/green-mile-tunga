// core components
import Dashboard from "views/admin/Dashboard.js";
import Login from "views/auth/Login.js";
import Maps from "views/admin/Maps.js";
import Profile from "views/admin/Profile.js";
import Register from "views/auth/Register.js";
import Suppliers from "views/admin/Suppliers.js";
import Loaders from "views/admin/Loaders.js";
import Activities from "views/admin/Activities.js";
// @material-ui/icons components
import AccountCircle from "@material-ui/icons/AccountCircle";
import FlashOn from "@material-ui/icons/FlashOn";
import FormatListBulleted from "@material-ui/icons/FormatListBulleted";
import LocationOn from "@material-ui/icons/LocationOn";
import Person from "@material-ui/icons/Person";
import People from "@material-ui/icons/People";
import Tv from "@material-ui/icons/Tv";
import VpnKey from "@material-ui/icons/VpnKey";

var routes = [
  {
    href: "#pablo",
    name: "Upgrade to pro",
    icon: FlashOn,
    upgradeToPro: true,
  },
  {
    path: "/index",
    name: "Dashboard",
    icon: Tv,
    iconColor: "Primary",
    component: Dashboard,
    layout: "/admin",
  },
  {
    path: "/suppliers",
    name: "Suppliers",
    icon: People,
    iconColor: "success",
    component: Suppliers,
    layout: "/admin",
  },
  {
    path: "/loaders",
    name: "Loaders",
    icon: People,
    iconColor: "success",
    component: Loaders,
    layout: "/admin",
  },
  {
    path: "/activities",
    name: "Activities",
    icon: FormatListBulleted,
    iconColor: "Warning",
    component:  Activities,
    layout: "/admin",
  },
  {
    path: "/maps",
    name: "Maps",
    icon: LocationOn,
    iconColor: "Warning",
    component: Maps,
    layout: "/admin",
  },
  {
    path: "/user-profile",
    name: "User Profile",
    icon: Person,
    iconColor: "WarningLight",
    component: Profile,
    layout: "/admin",
  },
  {
    path: "/login",
    name: "Login",
    icon: VpnKey,
    iconColor: "Info",
    component: Login,
    layout: "/auth",
  },
  {
    path: "/register",
    name: "Register",
    icon: AccountCircle,
    iconColor: "ErrorLight",
    component: Register,
    layout: "/auth",
  },
];
export default routes;
