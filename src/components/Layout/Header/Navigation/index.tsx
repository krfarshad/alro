import { appRoutes } from "@/router/appRoutes";
import { NavLink } from "react-router-dom";

const Navigation = () => {
  return (
    <ul>
      {appRoutes.map((route) => (
        <li className="inline-block relative" key={route.to}>
          <NavLink
            to={route.to}
            className={`py-1 px-5 text-white text-sm transition-all hover:transition-all after:content-[''] after:w-1 after:h-1 after:rounded-full 
             after:opacity-0 hover:after:opacity-100  after:bg-primary  after:absolute after:-bottom-2 after:left-[50%] after:translate-x-[-50%] `}
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
