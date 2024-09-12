import { useState } from "react";
import { MenuContextType, MenuType, order } from "../config-types/cheko-types";

// ProductCard Component
type ProductProp = {
product : {
image: string,
name: string,
calories: number,
price: number,
isBestSale: boolean
}

}
const ProductCard = ({ product,onProClick } : {product: MenuType,onProClick: (product: MenuType,count:number) => void}) => {

    
    
    const [order,setOrder] = useState<number>(0);
    return (
        <div className="bg-white dark:bg-zinc-700 hover:bg-fuchsia-50 rounded-lg shadow-md p-4 flex justify-between items-start space-x-4"  onClick={() => onProClick(product,order)}>
          {/* Product Image Section */}
          <div className="relative flex-none">
            <img
              src={product.imgUrl}
              alt={product.name}
              className=" h-36 lg:w-32 md:w-24 w-16 object-cover rounded-md"
            />
            {product.isBestSale? (
              <span className="absolute top-14 lg:left-14 md:left-12 bg-green-200 text-green-600 text-xs rounded-md px-1 py-1 transform translate-x-[65%]">
                Best Sale
              </span>
            ) : null}
          </div>
    
          {/* Product Info Section */}
          <div className="flex flex-col justify-between gap-10 w-full">
            {/* Product Name and Calories */}
            <div className="mb-2 flex-col align-top">
              <h3 className="text-md font-semibold dark:text-gray-400 truncate">{product.name}</h3>
              <p className="text-gray-500 text-sm truncate">{product.calories} Cal</p>
            </div>
    
            {/* Price and Quantity Controls */}
            <div className="flex items-center justify-between ">
              {/* Price */}
              <span className="text-pink-300 dark:text-gray-500 font-semibold lg:text-xl text-sm md:text-md">
                {product.price} SR
              </span>
    
              {/* Quantity Controls */}
              <div className="flex items-center space-x-3">
                <button className="bg-pink-200 text-gray-800 dark:bg-zinc-700 dark:border dark:border-pink-200  dark:text-pink-200 rounded-lg w-6 h-6 lg:w-8 lg:h-8 flex items-center justify-center" onClick={(e)=>{
                  e.stopPropagation()
                  setOrder((prev)=>{
                  if(prev - 1 < 0) {
                    return prev
                  }
                  else {
                    return prev -1;
                  }
                }); }}>
                  –
                </button>
                <span className="text-md dark:text-gray-500">{order}</span>
                <button className="bg-pink-200 text-gray-800 dark:bg-zinc-700 dark:border dark:border-pink-200  dark:text-pink-200 rounded-lg w-6 h-6 lg:w-8 lg:h-8 flex items-center justify-center" onClick={(e)=>{
                  e.stopPropagation()
                  setOrder((prev)=>prev+1)
                  }}>
                  +
                </button>
              </div>
            </div>
          </div>
        </div>
      );
  };

  
  const ProductGrid = ({menu,selectedCat,onProductClick}:{menu: Array<MenuType> | null,selectedCat:string,onProductClick: (product: MenuType,count:number) => void}) => {

    return (
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mr-[3.5%]">
        {menu?.map((product, index) => (
         product.category === selectedCat? <ProductCard  key={index} product={product}  onProClick={(p,c)=>{onProductClick(p,c)}}/> : null
        ))}
      </div>
    );
  };
  
  export default ProductGrid;
  