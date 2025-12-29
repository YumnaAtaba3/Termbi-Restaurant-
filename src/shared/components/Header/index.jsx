import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Search, ShoppingCart } from "@mui/icons-material";

import logo from "../../../assets/header/logo.svg";
import { appRoutes } from "../../../routes";
import { useIsLoggedIn } from "../../../features/log-in/hooks/is-logged-in";

import NavLinks from "./components/NavLinks";
import LanguageSelector from "./components/LanguageSelector";
import UserMenu from "./components/UserMenu";
import CartIcon from "./components/CartIcon";
import MobileMenu from "./components/MobileMenu";

import { useSearchStore } from "../../../store/search-store";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const { isLoggedIn } = useIsLoggedIn();
  const navigate = useNavigate();

  const { query, setQuery } = useSearchStore();

  const handleSearchChange = (e) => {
    const value = e.target.value;
    setQuery(value);

    navigate(
      value.trim()
        ? `${appRoutes.search}?q=${encodeURIComponent(value)}`
        : appRoutes.search
    );
  };

  const handleSearchIconClick = () => {
    navigate(
      query.trim()
        ? `${appRoutes.search}?q=${encodeURIComponent(query)}`
        : appRoutes.search
    );
  };

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-[#272727] shadow-sm">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-3">

        {/* Left section */}
        <div className="flex items-center space-x-4 flex-1">
          <Link to={appRoutes.restaurantHome}>
            <img src={logo} alt="logo" className="w-24 h-10" />
          </Link>

          {isLoggedIn && (
            <div className="ml-4 hidden md:flex items-center bg-white rounded overflow-hidden w-96">
              <input
                value={query}
                onChange={handleSearchChange}
                placeholder="Search dishes..."
                className="flex-1 px-4 py-2 text-black focus:outline-none"
              />
              <button
                onClick={handleSearchIconClick}
                className="px-3 text-gray-500 hover:text-black"
              >
                <Search />
              </button>
            </div>
          )}
        </div>

        {/* Desktop right */}
        <div className="hidden md:flex items-center space-x-6 text-white text-[15px] font-medium">
          {!isLoggedIn && <NavLinks isLoggedIn={isLoggedIn} />}
          <LanguageSelector />

          {!isLoggedIn ? (
            <Link
              to={appRoutes.auth.login}
              className="px-8 py-2.5 border border-white rounded hover:bg-gray-700"
            >
              Log in
            </Link>
          ) : (
            <div className="flex items-center space-x-6">
              <CartIcon />
              <UserMenu />
            </div>
          )}
        </div>

        {/* Mobile */}
        <div className="flex items-center space-x-3 md:hidden">
          {isLoggedIn && (
            <button
              onClick={handleSearchIconClick}
              className="text-white p-2 rounded hover:bg-gray-700"
            >
              <Search />
            </button>
          )}

          <Link
            to={appRoutes.cart}
            className="text-white p-2 rounded hover:bg-gray-700"
          >
            <ShoppingCart />
          </Link>

          <button onClick={() => setMenuOpen(!menuOpen)}>
            <div className="space-y-1.5">
              <span className="block w-6 h-0.5 bg-white"></span>
              <span className="block w-6 h-0.5 bg-white"></span>
              <span className="block w-6 h-0.5 bg-white"></span>
            </div>
          </button>
        </div>
      </div>

      {menuOpen && <MobileMenu />}
    </header>
  );
}
