// core components
import Overview from "views/admin/Overview.js";
import Suppliers from "views/admin/Suppliers.js";
import Loaders from "views/admin/Loaders.js";
import Invoices from "views/admin/Invoices.js";
import Activities from "views/admin/Activities.js";
import Articles from "views/admin/Articles.js";
import Maps from "views/admin/Maps.js";
import Profile from "views/admin/Profile.js";
import Login from "views/auth/Login.js";
import Register from "views/auth/Register.js";
// @material-ui/icons components
import AccountCircle from "@material-ui/icons/AccountCircle";
import FormatListBulleted from "@material-ui/icons/FormatListBulleted";
import LocationOn from "@material-ui/icons/LocationOn";
import Person from "@material-ui/icons/Person";
import People from "@material-ui/icons/People";
import Tv from "@material-ui/icons/Tv";
import VpnKey from "@material-ui/icons/VpnKey";

var routes = [

  {
    path: "/index",
    name: "Overview",
    icon: Tv,
    iconColor: "Primary",
    component: Overview,
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
    path: "/invoices",
    name: "Invoices",
    icon: FormatListBulleted,
    iconColor: "Warning",
    component:  Invoices,
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
    path: "/articles",
    name: "Articles",
    icon: FormatListBulleted,
    iconColor: "Warning",
    component:  Articles,
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
