import { useEffect, useState } from "react";
import { FilterCategoryType } from "../config-types/cheko-types";

// FilterBar Component
const FilterBar = ({ cat, Filtercallback,initSelect }: { cat: Array<FilterCategoryType> | null, Filtercallback: ({name}:{name:string})=>void,initSelect:string }) => {
    const [selected,SetSelected] = useState<string>(initSelect)
    return (
      <div className="flex py-4 justify-start items-center flex-nowrap ">
        {cat?.map((filter, index) => (
         <div
         key={index}
         className={`flex items-center space-x-3 text-sm bg-white border-gray-100 border dark:bg-pink-200 ${filter.name === selected? "shadow-lg  dark:shadow-white ":""} cursor-pointer rounded-lg w-[15%] mr-[4%] h-auto py-4 px-2 hover:bg-pink-100 dark:hover:bg-pink-300 transition-colors duration-200 ease-in-out`}
         onClick={()=> {
            SetSelected(`${filter.name}`)
            Filtercallback({
            name: filter.name
        })}}
       >
         {/* Icon */}
         <div className="flex items-center justify-center w-20 h-12 rounded-lg bg-blue-100 dark:bg-transparent">
           <span className="text-md font-black">{filter.name.slice(0,2).toLocaleUpperCase()}.</span>
         </div>
            
         {/* Name and Count */}
         <div className="flex justify-between w-full items-center">
           <span className="text-md font-medium">{filter.name}</span>
           <span className="text-md font-bold">{filter.count}</span>
         </div>
       </div>
        ))}
        <div className="ml-auto mr-[4%]  h-auto flex">
        <div className='w-[1px] h-auto bg-gray-400 mr-3'></div>
        <div
        
         className={`flex items-center space-x-3 text-sm bg-white dark:bg-pink-200  rounded-lg  h-auto py-4 px-2 hover:bg-pink-100 transition-colors duration-200 ease-in-out justify-self-end`}
       >

         {/* Icon */}
         <div className="flex items-center justify-center w-20 h-12 rounded-lg bg-blue-100 dark:bg-transparent">
           <span className="text-md font-black">OR.</span>
         </div>
            
         {/* Name and Count */}
         <div className="flex justify-between w-full items-center">
           <span className="text-md font-medium">Orders</span>
           <span className="text-md font-semibold">0</span>
         </div>
       </div>
       </div>
      </div>
    );
  };
  
  export default FilterBar;
  