
import { Link } from "react-router-dom";
import NavLinks from "./NavLinks";
import LanguageSelector from "./LanguageSelector";
import { useIsLoggedIn } from "../../../../features/log-in/hooks/is-logged-in";
import { logoutHelper } from "../../../../features/log-in/utlitlies";
import { appRoutes } from "../../../../routes";


export default function MobileMenu({ closeMenu }) {
  const { isLoggedIn } = useIsLoggedIn();

  return (
    <div className="md:hidden bg-[#272727] border-t border-gray-700 px-6 pb-6">


      <div className="mt-4 space-y-3">
        {isLoggedIn ? (
          <>
            <Link
              to={appRoutes.manageProfile}
              onClick={closeMenu}
              className="block w-full text-center border border-white rounded py-2 hover:bg-gray-700 text-white"
            >
              Profile
            </Link>
            <button
              onClick={() => {
                logoutHelper();
                closeMenu();
              }}
              className="block w-full text-center border border-white rounded py-2 hover:bg-gray-700 text-white"
            >
              Logout
            </button>
            <LanguageSelector />
          </>
        ) : (
          <>
            <NavLinks isLoggedIn={isLoggedIn} className="flex flex-col space-y-3 text-white" />
            <Link
              to={appRoutes.auth.login}
              onClick={closeMenu}
              className="block w-full text-center border border-white rounded py-2 hover:bg-gray-700 text-white"
            >
              Log in
            </Link>
            <LanguageSelector />
          </>
        )}
      </div>
    </div>
  );
}
