import { NavBar } from "./Navbar";
import "./header.css"

export const Header = ({count}) => {
    // const activeLink = "link 1"
    return (
      <header>
        <figure>
          <img src="/vite.svg" alt="vite logo" />
          {count}
        </figure>
   <NavBar/>
      </header>
    );
  };