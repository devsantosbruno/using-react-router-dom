import { NavLink, Outlet } from "react-router-dom";
import { routesConfig } from "../routesConfig";

export const Layout = () => {
  return (
    <main>
      <header>
        {routesConfig
          .filter((r) => !r.hiddenOnTab)
          .map((config) => (
            <NavLink
              role={"button"}
              to={config.path}
              key={config.title}
              className={({ isActive }) => (isActive ? "active" : "outline")}
            >
              {config.title}
            </NavLink>
          ))}
      </header>

      <div>
        <Outlet></Outlet>
      </div>
    </main>
  );
};
