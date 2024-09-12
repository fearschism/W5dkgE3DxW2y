import { useNavigate } from "react-router-dom";
import NextIcon from "../assets/nextIcon";
import { PopUpCardType } from "../config-types/cheko-types";
import { useContext } from "react";
import { MenuContext } from "../App";

const PopupCard = ({res_id,res_image,res_name,res_type}:PopUpCardType) => {
    const navigate = useNavigate()
    const {setMenu} = useContext(MenuContext)

    const onClickHandler = (id:number) => {
        setMenu(id)
        navigate(`/?res=${id}`)
    }

return (<div className="bg-white flex justify-between items-start space-x-4">
    {/* Product Image Section */}
    <div className="relative flex-none">
      <img
        src={res_image}
        alt={res_name}
        className=" h-24 w-24 object-cover rounded-md"
      />
     
    </div>

    {/* Product Info Section */}
    <div className="flex flex-col justify-between  w-full gap-6">
      {/* Product Name and Calories */}
      <div className="mb-2 flex-col align-top">
        <h3 className="text-md font-semibold truncate">{res_name}</h3>
        <p className="text-gray-500 text-xs truncate italic">{res_type}</p>
      </div>

      {/* Price and Quantity Controls */}
      <div className="flex items-center space-x-5 ">
        {/* Price */}
        <span className="text-gray-500  text-[9px] md:text-md">
          Menu List
        </span>

        {/* Quantity Controls */}
        <div className="flex items-center space-x-3">
          <button className="bg-pink-200 hover:bg-pink-100 text-gray-800 rounded-lg w-8 h-8 flex items-center justify-center" onClick={ () => {onClickHandler(res_id)}}>
            <NextIcon/>
          </button>
        </div>
      </div>
    </div>
  </div>);


}

export default PopupCard