// src/components/header/components/NavLinks.js
import { Link } from "react-router-dom";
import { appRoutes } from "../../../../routes";

export default function NavLinks({ isLoggedIn, className = "" }) {
  if (isLoggedIn) return null; // hide main links when logged in

  const links = [
    { label: "Home", to: "/" },
    { label: "Services", to: "/" },
    { label: "About us", to: appRoutes.about },
    { label: "Contact us", to: appRoutes.contact },
  ];

  return (
    <nav className={className}>
      {links.map((link) => (
        <Link
          key={link.label}
          to={link.to}
          className="hover:text-red-500 block md:inline-block md:mr-8"
        >
          {link.label}
        </Link>
      ))}
    </nav>
  );
}
