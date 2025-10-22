import { NavLink } from "react-router-dom";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "./ui/navigation-menu";

export default function Header() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-neutral-800 bg-neutral-900/95 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4">
        <NavLink to="/" className="text-xl font-semibold text-white">
          Miya’s Portfolio
        </NavLink>

        <NavigationMenu>
          <NavigationMenuList className="flex-wrap">
            <NavigationMenuItem>
              <NavigationMenuTrigger>Home</NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid gap-2 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr] p-4">
                  <li className="row-span-3">
                    <NavigationMenuLink asChild>
                      <NavLink
                        to="/"
                        className="from-neutral-800 to-neutral-900 bg-gradient-to-b rounded-md p-4 no-underline outline-hidden transition-all duration-200 block h-full w-full"
                      >
                        <div className="mb-2 text-lg font-medium text-white">
                          Overview
                        </div>
                        <p className="text-sm text-neutral-300">
                          Welcome to my portfolio site.
                        </p>
                      </NavLink>
                    </NavigationMenuLink>
                  </li>
                  <ListItem to="/data-analytics" title="Data Analytics">
                    Projects using Python/R, dashboards, and modeling.
                  </ListItem>
                  <ListItem to="/biology-research" title="Biology Research">
                    Wet-lab and computational biology work.
                  </ListItem>
                  <ListItem to="/event-planning" title="Event Planning">
                    Campus events and logistics highlights.
                  </ListItem>
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <NavigationMenuTrigger>Projects</NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid gap-2 sm:w-[400px] md:w-[500px] md:grid-cols-2 lg:w-[600px] p-4">
                  <ListItem to="/art" title="Art">
                    Visual pieces and design experiments.
                  </ListItem>
                  <ListItem to="/data-analytics" title="Analytics">
                    Machine learning and analysis.
                  </ListItem>
                  <ListItem to="/biology-research" title="Bio">
                    Research notes and results.
                  </ListItem>
                  <ListItem to="/event-planning" title="Events">
                    Programs I’ve organized.
                  </ListItem>
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
                <NavLink to="/art">Art</NavLink>
              </NavigationMenuLink>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>

        <NavLink
          to="/contact"
          className="rounded-lg bg-rose-600 px-4 py-2 font-semibold text-white hover:bg-rose-500"
        >
          Let’s Talk
        </NavLink>
      </div>
    </header>
  );
}

function ListItem({ to, title, children }) {
  return (
    <li>
      <NavigationMenuLink asChild>
        <NavLink to={to} className="block rounded-md p-3 hover:bg-neutral-800">
          <div className="text-sm font-medium text-white">{title}</div>
          <p className="text-sm leading-snug text-neutral-300 line-clamp-2">
            {children}
          </p>
        </NavLink>
      </NavigationMenuLink>
    </li>
  );
}
