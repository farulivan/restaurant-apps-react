import { useState } from 'react';
import { NavLink } from 'react-router-dom';

function NavBar(): JSX.Element {
  const [navBarOpen, setNavBarOpen] = useState(false);

  return (
    <div>
      <nav className="header__content flex flex-wrap justify-between items-center">
        <h2 className="logo font-fira text-xl">findresto</h2>
        <button
          id="hamburgerButton"
          data-collapse-toggle="navbar-default"
          type="button"
          className="items-center py-3 pr-0 pl-6 text-sm rounded-lg md:hidden focus:outline-none focus:ring-2 focus:ring-gray-200"
          aria-controls="navbar-default"
          aria-expanded="false"
          onClick={(): void => setNavBarOpen((prev) => !prev)}
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className="w-6 h-6"
            aria-hidden="true"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
              clipRule="evenodd"
            />
          </svg>
        </button>
        <div
          className={`nav ${
            navBarOpen ? 'w-52 opacity-100 visible' : 'hidden opacity-0 w-0'
          } absolute right-0 top-20 bg-white text-fontSecondary rounded-l-xl`}
          id="navbar-default"
        >
          <ul className="nav__list w-full flex flex-col text-sm text-right px-0 m-0 list-none">
            <li className="nav__item w-full box-border list-item border-b-2 border-slate-300 py-5 px-5 hover: text-primary">
              <NavLink
                to="/"
                className={({isActive}) => isActive ? "leading-7 py-4 px-4 uppercase font-bold" : "leading-7 py-4 px-4 uppercase  text-fontPrimary"}
                aria-label="Navigate to Home page"
                onClick={(): void => setNavBarOpen((prev) => !prev)}
              >
                Home
              </NavLink>
            </li>
            <li className="nav__item w-full box-border list-item leading-7 py-5 px-5 uppercase border-b-2 border-slate-300 hover: text-primary">
              <a
                href="/#/favorite"
                className="leading-7 py-4 px-4 uppercase text-fontPrimary"
                aria-label="Navigate to Favorite page"
              >
                Favorite
              </a>
            </li>
            <li className="nav__item w-full box-border list-item leading-7 py-5 px-5 uppercase hover: text-primary">
              <a
                href="https://www.linkedin.com/in/farulivan/"
                target="_blank"
                className="leading-7 py-4 px-4 uppercase text-fontPrimary"
                aria-label="Navigate to About Us page"
                rel="noreferrer"
              >
                About Us
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default NavBar;
