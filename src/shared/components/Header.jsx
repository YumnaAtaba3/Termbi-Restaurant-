import { useState, useRef, useEffect } from "react";
import logo from "../../assets/header/logo.svg";
import { Link } from "react-router-dom";
import { appRoutes } from "../../routes";
import { useIsLoggedIn } from "../../features/log-in/hooks/is-logged-in";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { logoutHelper } from "../../features/log-in/utlitlies";



export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [langOpen, setLangOpen] = useState(false);
  const [userMenuOpen, setUserMenuOpen] = useState(false);

  const { isLoggedIn } = useIsLoggedIn();

  const [country, setCountry] = useState({
    name: "USA",
    flag: "https://flagcdn.com/us.svg",
  });

  const countries = [
    { name: "USA", flag: "https://flagcdn.com/us.svg" },
    { name: "Syria", flag: "https://flagcdn.com/sy.svg" },
  ];

  const langRef = useRef(null);
  const userMenuRef = useRef(null);
  const mobileMenuRef = useRef(null);

  useEffect(() => {
    const handler = (e) => {
      if (langRef.current && !langRef.current.contains(e.target)) {
        setLangOpen(false);
      }
      if (userMenuRef.current && !userMenuRef.current.contains(e.target)) {
        setUserMenuOpen(false);
      }
      if (mobileMenuRef.current && !mobileMenuRef.current.contains(e.target)) {
        setMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-[#272727] shadow-sm">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-3">
        
        {/* Logo */}
        <Link to={appRoutes.restaurantHome}>
          <img src={logo} alt="logo" className="w-24 h-10" />
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center ml-auto text-white text-[15px] font-medium">

          {/* Main Nav */}
        {!isLoggedIn &&(
            <div className="flex space-x-8">
            <Link to="/" className="hover:text-red-500">Home</Link>
            <Link to="/" className="hover:text-red-500">Services</Link>
            <Link to={appRoutes.about} className="hover:text-red-500">About us</Link>
            <Link to={appRoutes.contact} className="hover:text-red-500">Contact us</Link>
          </div>)
        }

          {/* Language */}
          <div className="relative ml-6" ref={langRef}>
            <button
              onClick={() => setLangOpen(!langOpen)}
              className="flex items-center space-x-1 hover:text-red-500"
            >
              <img
                src={country.flag}
                className="w-6 h-4 rounded-sm "
              />
              <span className="border-t-[5px] border-t-gray-400 border-l-[4px] border-l-transparent border-r-[4px] border-r-transparent"></span>
            </button>

            {langOpen && (
              <div className="absolute right-0 mt-2 w-36 bg-[#272727] border border-gray-600 rounded-md">
                {countries.map((c) => (
                  <button
                    key={c.name}
                    onClick={() => {
                      setCountry(c);
                      setLangOpen(false);
                    }}
                    className="flex items-center px-3 py-2 w-full hover:bg-gray-700 text-sm"
                  >
                    <img src={c.flag} className="w-5 h-3 mr-2" />
                    {c.name}
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* If NOT logged in -> show login button */}
          {!isLoggedIn && (
            <Link
              to={appRoutes.auth.login}
              className="ml-6 px-8 py-2.5 border border-white rounded hover:bg-gray-700"
            >
              Log in
            </Link>
          )}

          {/* If LOGGED IN -> show search, cart, user menu */}
          {isLoggedIn && (
            <div className="flex items-center space-x-6 ml-6">

              {/* Search */}
              <input
                type="text"
                placeholder="Search..."
                className="w-72 px-4 py-2 rounded bg-white text-black focus:outline-none"
              />

              {/* Cart */}
              <Link to="/cart" className="relative">
                <i className="fa-solid fa-cart-shopping text-xl"><ShoppingCartIcon /></i>
                <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
                  3
                </span>
              </Link>

              {/* User dropdown */}
              <div className="relative" ref={userMenuRef}>
                <button
                  onClick={() => setUserMenuOpen(!userMenuOpen)}
                  className="flex items-center space-x-2"
                >
                  <img
                    src="https://i.pravatar.cc/35"
                    className="w-8 h-8 rounded-full"
                    alt="user"
                  />
                  <span className="border-t-[5px] border-t-gray-400 border-l-[4px] border-l-transparent border-r-[4px] border-r-transparent"></span>
                </button>

                {userMenuOpen && (
                  <div className="absolute right-0 mt-2 bg-[#272727] w-40 rounded shadow-lg">
                    <Link to={appRoutes.manageProfile} className="block px-4 py-2 hover:bg-gray-700">
                      Profile
                    </Link>
                   
                   <button
  onClick={logoutHelper}
  className="w-full text-left px-4 py-2 hover:bg-gray-700"
>
  Logout
</button>

                  </div>
                )}
              </div>
            </div>
          )}
        </div>

        {/* Mobile Menu Button */}
        <button className="md:hidden" onClick={() => setMenuOpen(!menuOpen)}>
          <div className="space-y-1.5">
            <span className="block w-6 h-0.5 bg-white"></span>
            <span className="block w-6 h-0.5 bg-white"></span>
            <span className="block w-6 h-0.5 bg-white"></span>
          </div>
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div ref={mobileMenuRef} className="md:hidden bg-[#272727] border-t border-gray-700 px-6 pb-6">

          <nav className="flex flex-col space-y-3 mt-3 text-white">
            <Link to="/" className="hover:text-red-500">Home</Link>
            <Link to="/" className="hover:text-red-500">Services</Link>
            <Link to={appRoutes.about} className="hover:text-red-500">About us</Link>
            <Link to={appRoutes.contact} className="hover:text-red-500">Contact us</Link>
          </nav>

          {/* Language */}
          <div className="mt-4 relative" ref={langRef}>
            <button
              onClick={() => setLangOpen(!langOpen)}
              className="flex items-center text-white space-x-1"
            >
              <img
                src={country.flag}
                className="w-6 h-4 rounded-sm border border-gray-300"
              />
              <span className="border-t-[5px] border-t-gray-300 border-l-[4px] border-l-transparent border-r-[4px] border-r-transparent"></span>
            </button>

            {langOpen && (
              <div className="absolute mt-2 w-36 bg-[#272727] border border-gray-600 rounded-md">
                {countries.map((c) => (
                  <button
                    key={c.name}
                    onClick={() => {
                      setCountry(c);
                      setLangOpen(false);
                    }}
                    className="flex items-center px-3 py-2 w-full hover:bg-gray-700 text-sm text-white"
                  >
                    <img src={c.flag} className="w-5 h-3 mr-2" />
                    {c.name}
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Logged-out view */}
          {!isLoggedIn && (
            <Link
              to={appRoutes.auth.login}
              className="block mt-4 border border-white text-white py-2.5 rounded text-center"
            >
              Log in
            </Link>
          )}

          {/* Logged-in view */}
          {isLoggedIn && (
            <div className="mt-5 text-white space-y-4">

              {/* Search */}
              <input
                type="text"
                placeholder="Search..."
                className="w-full px-4 py-2 rounded bg-white text-black"
              />

              {/* Cart */}
              <Link to={appRoutes.cart} className="flex items-center space-x-3">
                <i className="fa-solid fa-cart-shopping text-xl"><ShoppingCartIcon /></i>
                <span>Your Cart</span>
              </Link>

              {/* User menu */}
              <Link to={appRoutes.manageProfile} className="block hover:text-red-500">
                Profile
              </Link>
             
              <button className="block text-left hover:text-red-500" onClick={logoutHelper} >
                Logout
              </button>
            </div>
          )}
        </div>
      )}
    </header>
  );
}
