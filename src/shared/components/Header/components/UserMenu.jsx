import { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { appRoutes } from "../../../../routes/index";
import { logoutHelper } from "../../../../features/log-in/utlitlies/index";

export default function UserMenu() {
  const [userMenuOpen, setUserMenuOpen] = useState(false);
  const userMenuRef = useRef(null);

  useEffect(() => {
    const handler = (e) => {
      if (userMenuRef.current && !userMenuRef.current.contains(e.target)) setUserMenuOpen(false);
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  return (
    <div className="relative" ref={userMenuRef}>
      <button onClick={() => setUserMenuOpen(!userMenuOpen)} className="flex items-center space-x-2">
        <img src="https://i.pravatar.cc/35" className="w-8 h-8 rounded-full" alt="user" />
        <span className="border-t-[5px] border-t-gray-400 border-l-[4px] border-l-transparent border-r-[4px] border-r-transparent"></span>
      </button>
      {userMenuOpen && (
        <div className="absolute right-0 mt-2 bg-[#272727] w-40 rounded shadow-lg">
          <Link to={appRoutes.manageProfile} className="block px-4 py-2 hover:bg-gray-700">Profile</Link>
          <button onClick={logoutHelper} className="w-full text-left px-4 py-2 hover:bg-gray-700">Logout</button>
        </div>
      )}
    </div>
  );
}
