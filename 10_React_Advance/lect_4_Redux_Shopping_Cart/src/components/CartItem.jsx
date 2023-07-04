import {MdDelete} from "react-icons/md"
import { useDispatch } from "react-redux";
import { toast } from "react-hot-toast";
import {remove} from '../redux/Slices/CartSlice'






const CartItem = ({item,itemIndex}) => {
  const dispatch = useDispatch();
  function removefromCart()
  {
    dispatch(remove(item.id))
    toast.error("Item Removed");

  }
  return (
    <div className=" mt-7 flex flex-col border-2 border-x-0 border-t-0  border-gray-600 md:flex-row p-0 md:p-3 gap-5 items-center">
      <div className="w-[30%] p-2">
        <img className="w-full h-full" src={item.image} />
      </div>
      <div className="md:ml-10 self-start space-y-5 w-[100%] md:w-[70%]">
        <h1 className="text-xl text-slate-700 font-semibold">{item.title}</h1>
        <h1 className="text-base text-slate-700 font-medium">{item.description.split(" ").slice(0,15).join(" ")+"..."} </h1>
        <div className=" flex items-center justify-between">
        <p className="font-bold text-lg text-green-600">${item.price} </p>
        <div className=" bg-red-200 group hover:bg-red-400 transition-transform duration-300 cursor-pointer rounded-full p-3 mr-3" onClick={removefromCart}> <MdDelete className="text-red-800 group-hover:text-white"></MdDelete></div>
        </div>
      </div>
    </div>
  )
};

export default CartItem;
