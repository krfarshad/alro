import { AppRoutes } from "@/router/AppRoutes";
import { NavLink } from "react-router-dom";

const Navigation = () => {
  const routes = AppRoutes;
  return (
    <ul>
      {routes.map((route) => (
        <li className="inline-block" key={route.to}>
          <NavLink
            to={route.to}
            className={`py-1 px-3 text-sm hover:text-orange-400 transition-all hover:transition-all`}
          >
            {route.title}
          </NavLink>
          {route.children &&
            route.children.map((childrenRoute) => (
              <li key={`"child_"${childrenRoute.to}`}>
                <NavLink to={childrenRoute.to}>{childrenRoute.title}</NavLink>
              </li>
            ))}
        </li>
      ))}
    </ul>
  );
};

export default Navigation;
