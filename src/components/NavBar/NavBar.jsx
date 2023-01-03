import { NavigationLink } from "./NavBar.styled";

export const NavBar = () => (
  <nav>
    <NavigationLink to="/">Home</NavigationLink>
    <NavigationLink to="/movies">Movies</NavigationLink>
  </nav>
)