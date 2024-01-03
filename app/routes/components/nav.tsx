// components/Nav.tsx
import { Link } from '@remix-run/react';
// FILEPATH: /Users/manueltorres/Documents/portfolio_projects/recipe-box/app/routes/components/about/about.tsx
// import About from "../about/about";

const Nav = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          {/* <Link to="/about/about">About</Link> */}
          <Link to="/about">About</Link>

        </li>
      </ul>
    </nav>
  );
}

export default Nav;