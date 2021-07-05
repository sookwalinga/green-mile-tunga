// core components
import Overview from "views/admin/Overview.js";
import Suppliers from "views/admin/Suppliers.js";
import Loaders from "views/admin/Loaders.js";
import Invoices from "views/admin/Invoices.js";
import Activities from "views/admin/Activities.js";
import Articles from "views/admin/Articles.js";
import Maps from "views/admin/Maps.js";
// import Profile from "views/admin/Profile.js";
import Login from "views/auth/Login.js";
import Register from "views/auth/Register.js";
// @material-ui/icons components
import Tv from "@material-ui/icons/Tv";
import LocalShipping from '@material-ui/icons/LocalShipping';
import People from "@material-ui/icons/People";
import FormatListBulleted from "@material-ui/icons/FormatListBulleted";
import EventNote from "@material-ui/icons/EventNote";
import LocalLibrary from "@material-ui/icons/LocalLibrary";
import LocationOn from "@material-ui/icons/LocationOn";
// import Person from "@material-ui/icons/Person";
import VpnKey from "@material-ui/icons/VpnKey";
import AccountCircle from "@material-ui/icons/AccountCircle";

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
    icon: LocalShipping,
    iconColor: "Primary",
    component: Suppliers,
    layout: "/admin",
  },
  {
    path: "/loaders",
    name: "Loaders",
    icon: People,
    iconColor: "WarningLight",
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
    icon: EventNote,
    iconColor: "Warning",
    component:  Activities,
    layout: "/admin",
  },
  {
    path: "/articles",
    name: "Articles",
    icon: LocalLibrary,
    iconColor: "Info",
    component:  Articles,
    layout: "/admin",
  },
  {
    path: "/maps",
    name: "Maps",
    icon: LocationOn,
    iconColor: "Primary",
    component: Maps,
    layout: "/admin",
  },
  // {
  //   path: "/user-profile",
  //   name: "User Profile",
  //   icon: Person,
  //   iconColor: "WarningLight",
  //   component: Profile,
  //   layout: "/admin",
  // },
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
