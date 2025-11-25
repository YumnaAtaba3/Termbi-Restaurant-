import { Link } from "react-router-dom";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { appRoutes } from "../../../../routes/index";

export default function CartIcon() {
  return (
    <Link to={appRoutes.cart} className="relative">
      <ShoppingCartIcon className="text-white text-xl" />
      <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
        3
      </span>
    </Link>
  );
}
