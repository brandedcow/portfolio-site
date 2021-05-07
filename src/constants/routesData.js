import ProjectList from "../components/ProjectList";
import About from "../components/About";
import projectData from "../constants/projectData";

const routesData = [
  {
    name: "Home",
    path: "/",
    component: null,
    routeHeight: "0px",
    mobileRouteHeight: "0px",
  },
  {
    name: "Projects",
    path: "/projects",
    component: ProjectList,
    routeHeight: "50vh",
    mobileRouteHeight: "100%",
    data: projectData,
  },
  {
    name: "About + Contact",
    path: "/about",
    component: About,
    routeHeight: "75vh",
    mobileRouteHeight: "100%",
  },
];

export default routesData;
