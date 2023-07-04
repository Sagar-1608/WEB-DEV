import { FaShoppingCart } from "react-icons/fa";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const {cart} = useSelector((state)=>state)
  return (
    <div>
      <nav className=" flex justify-between items-center  h-20 max-w-6xl mx-auto">

        <NavLink to="/">
        <div className="ml-5">

          <img
            className="h-14"
            // src="https://previews.123rf.com/images/ikalvi/ikalvi1712/ikalvi171200242/92412982-smiling-shopping-cart-vector-logo-design-shopping-mart-or-app-vector-logo.jpg"
            src="https://codehelp-shopping-cart.netlify.app/logo.png"
          />
        </div>
        </NavLink>


        <div className=" flex items-center font-medium text-slate-100 mr-5 space-x-6">
          <NavLink to="/">
            <p  className=" hover:text-green-600">Home</p>
          </NavLink>

          <NavLink to="/cart">
            <div className=" relative">
              <FaShoppingCart className=" text-2xl   hover:text-green-500" />
              {
                cart.length>0 &&  <span 
                className=" absolute -top-1 -right-2 bg-green-600 text-xs w-5 h-5 
                 flex items-center justify-center animate-bounce rounded-full text-white">{cart.length}</span>
              }
             
            </div>
          </NavLink>

        </div>

      </nav>

    </div>
  );
};

export default Navbar;
