import useDeviceSize from "@/hooks/useDeviceSize";
import { useOnClickOutside } from "@/hooks/useOnClickOutside";
import { appRoutes } from "@/router/AppRoutes";
import clsx from "clsx";
import { CloseCircle, HambergerMenu } from "iconsax-react";
import { useRef, useState } from "react";
import { NavLink } from "react-router-dom";

const Navigation = () => {
  const [openMenu, setOpenMenu] = useState<boolean>(false);
  const navigationRef = useRef<HTMLDivElement | null>(null);
  const { size } = useDeviceSize();
  const menuContainerClasses = clsx(
    "menu-container",
    openMenu ? "!mr-0 " : "",
    size < 768
      ? "fixed max-w-full z-90 w-72  -mr-96 bg-[#3F4348] p-4 top-0 right-0 h-screen transition-all hover:transition-all overflow-y-auto"
      : ""
  );

  const menuItemClasses = clsx(
    "relative",
    openMenu ? "block py-2" : "inline-block "
  );

  const hamburgerClasses = clsx(
    "cursor-pointer p-1 hover:!text-primary delay-500 transition-all hover:transition-all",
    size > 768 ? "hidden" : "block"
  );

  const toggleMenu = () => {
    setOpenMenu(!openMenu);
  };

  const closeMenu = () => {
    setOpenMenu(false);
  };

  useOnClickOutside(navigationRef, closeMenu);

  return (
    <div className="header-menu-navigation" ref={navigationRef}>
      <HambergerMenu
        size="32"
        color="#fff"
        className={hamburgerClasses}
        onClick={toggleMenu}
      />
      <div className={menuContainerClasses}>
        {openMenu ? (
          <div className="text-left mb-4">
            <CloseCircle
              size="32"
              color="#fff"
              className="cursor-pointer p-1"
              onClick={closeMenu}
            />
          </div>
        ) : null}
        <nav>
          <ul>
            {appRoutes.map((route) => (
              <li className={menuItemClasses} key={route.to}>
                <NavLink
                  to={route.to}
                  className={`py-1 px-5 text-white text-sm transition-all hover:transition-all after:content-[''] after:w-2 md:after:w-1 after:h-full md:after:h-1 md:after:rounded-full 
             after:opacity-0 hover:after:opacity-100  after:bg-primary  after:absolute after:bottom-0 md:after:-bottom-2 after:-left-4 md:after:left-[50%] after:translate-x-[-50%] 
             `}
                >
                  {route.title}
                </NavLink>
                {route.children &&
                  route.children.map((childrenRoute) => (
                    <li key={`"child_"${childrenRoute.to}`}>
                      <NavLink to={childrenRoute.to}>
                        {childrenRoute.title}
                      </NavLink>
                    </li>
                  ))}
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Navigation;
