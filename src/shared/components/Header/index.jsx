import { useState } from "react";
import logo from "../../../assets/header/logo.svg";
import { Link } from "react-router-dom";
import { appRoutes } from "../../../routes/index";
import { useIsLoggedIn } from "../../../features/log-in/hooks/is-logged-in";

import NavLinks from "./components/NavLinks";
import LanguageSelector from "./components/LanguageSelector";
import UserMenu from "./components/UserMenu";
import CartIcon from "./components/CartIcon";
import MobileMenu from "./components/MobileMenu";
import { Search, ShoppingCart } from "@mui/icons-material";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const { isLoggedIn } = useIsLoggedIn();

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-[#272727] shadow-sm">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-3">

        {/* Left side: Logo + Search (desktop only) */}
        <div className="flex items-center space-x-4 flex-1">
          <Link to={appRoutes.restaurantHome}>
            <img src={logo} alt="logo" className="w-24 h-10" />
          </Link>

          {isLoggedIn && (
            <div className="ml-4 hidden md:block">
              <input
                type="text"
                placeholder="Search..."
                className="w-96 px-4 py-2 rounded bg-white text-black focus:outline-none"
              />
            </div>
          )}
        </div>

        {/* Desktop right side */}
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

        {/* Mobile icons: search, cart, menu */}
        <div className="flex items-center space-x-3 md:hidden">
          {isLoggedIn && (
            <>
              <button className="text-white p-2 rounded hover:bg-gray-700">
                <Search />
              </button>
              <Link to={appRoutes.cart} className="text-white p-2 rounded hover:bg-gray-700">
                <ShoppingCart />
              </Link>
            </>
          )}

          {/* Hamburger menu */}
          <button onClick={() => setMenuOpen(!menuOpen)}>
            <div className="space-y-1.5">
              <span className="block w-6 h-0.5 bg-white"></span>
              <span className="block w-6 h-0.5 bg-white"></span>
              <span className="block w-6 h-0.5 bg-white"></span>
            </div>
          </button>
        </div>
      </div>

      {/* Mobile menu dropdown */}
      {menuOpen && <MobileMenu />}
    </header>
  );
}
