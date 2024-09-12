import { useState } from "react";
import { MenuType } from "../config-types/cheko-types";


type ModalProps = {
    product: MenuType,
    onClose: () => void,
    count: number
    onOrderChange: (num:number)=>void
}

export default function Modal({ product, onClose,count,onOrderChange }: ModalProps) {
    const [counter,SetCounter] = useState(count)
    return (
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-black  bg-opacity-75">
            <div className="bg-white dark:bg-zinc-800 rounded-lg p-6 max-w-lg w-full relative">
                <button onClick={onClose} className="absolute top-2 right-2 text-gray-600 dark:text-gray-200 hover:text-gray-800">
                    ✕
                </button>
                
                {/* Modal Content */}
                <div className="flex justify-start space-x-2 ">
                <h2 className="text-2xl font-bold text-black dark:text-gray-50">{product.name}</h2>
                {product.isBestSale? (
              <span className=" bg-green-200 text-green-600 text-xs rounded-md flex items-center px-6">
                Best Sale
              </span>
            ) : null}
                </div>
                <p className="text-md text-gray-500 flex">{product.calories} Cal</p>
                <div className="flex text-xs  h-auto justify-start w-full">
                <p className="my-4 text-gray-600 dark:text-gray-50 break-all truncate">{product.description}</p>
                </div>
                <img src={product.imgUrl} alt={product.name} className="w-full h-72 rounded-lg mt-2" />
                
                <div className="mt-4 flex justify-end items-center space-x-3">

                    <span className="text-lg font-semibold text-pink-400 dark:text-gray-500">{product.price} SR</span>
                    <div className="flex items-center space-x-3">
                        <button className="px-3 py-1 bg-pink-200 dark:bg-gray-900 dark:border dark:border-pink-200 rounded dark:text-pink-200" onClick={()=>{}}>-</button>
                        <span className="dark:text-gray-500">{count}</span>
                        <button className="px-3 py-1 bg-pink-200 dark:bg-gray-900 dark:border dark:border-pink-200 rounded dark:text-pink-200" onClick={()=>{}}>+</button>
                    </div>
                </div>
            </div>
        </div>
    );
}