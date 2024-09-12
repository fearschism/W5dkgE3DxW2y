
import { useLocation } from 'react-router-dom';
import Filter from '../assets/filter'
import Search from '../assets/search'
import { SearchAndFilterConfigs, SearchAndFilterInputType } from '../config-types/cheko-types';
import './external.css'
import { useEffect, useState } from 'react';



export default function Searchbar({configs,onSearch}:{configs:SearchAndFilterConfigs,onSearch:({input}:{input:SearchAndFilterInputType | null})=>void}) {
    const location = useLocation();
    const [selectedValue,setSelectedValue] = useState<string>("all")
    const [searchinput,SetSearchInput] = useState<string>("")
    useEffect(() => {
      onSearch({input:null})
      SetSearchInput("")
      setSelectedValue("all")
    }, [location]);
return (
<div className="absolute right-2.5 left-2.5 bottom-[-10px]  ml-[10%] flex items-center mr-[2.5%]  rounded-[15px] h-[45%] border shadow-md border-gray-300 dark:border-zinc-700 transform translate-y-1/3 bg-white dark:bg-zinc-700 overflow-hidden">
    <Search></Search>
    <input onChange={(event)=>{
        SetSearchInput(event.target.value)
    }} disabled={configs.isDisabled} value={searchinput} type="text" placeholder={`Search ${configs.isMap? "Map":""}${configs.isMenu? "Menu":""}`} className=" flex-initial w-[55%] p-1.5   outline-none  border-gray-300 dark:bg-zinc-700 dark:text-gray-100" />
    <div className='w-[1px] bg-gray-200 dark:bg-zinc-900 h-[100%] flex-none'></div>
    <Filter></Filter>
    <div className="flex-initial py-1.5 mr-1 w-[35%] outline-none  border-gray-300 flex justify-start">
 
  <select id='ff' disabled={configs.isDisabled} value={selectedValue} onChange={(event)=>setSelectedValue(event.target.value)} className={`w-[100%] bg-white dark:bg-zinc-700   placeholder:text-amber-50 text-md rounded-lg focus:ring-blue-500 focus:border-pink-300 block p-2.5 dark:text-gray-100  outline-none  dark:focus:ring-blue-500 dark:focus:border-blue-500 cheko-filter ${configs.isDisabled? "cursor-not-allowed" : "cursor-pointer"}`}>
  <option value="all" selected>Filter (default: All)</option>
    {configs.filter.map((val,index)=>(
      <option value={val}>{val}</option>
    ))}
  </select>
    </div>
<div className='w-[1px] bg-gray-200 h-[100%] flex-none dark:bg-zinc-900'></div>
    <button disabled={configs.isDisabled}  onClick={()=> {
      if(searchinput.length >=3) {
      onSearch({input:{filter:selectedValue,search:searchinput}})
      }
      else {
        alert("Search input must be atleast 3 characters long!")
      }

  }} className={`pt-2 pb-2 pr-1 pl-1 rounded-lg border-none text-[11px] flex-none ${configs.isDisabled? "bg-gray-400": "bg-pink-300 hover:bg-pink-200 hover:text-black"} w-[10%] mx-2 my-4 md:text-sm text-white ${configs.isDisabled? "cursor-not-allowed" : "cursor-pointer"} `}>Search</button>
  </div>
  );

}

//flex-initial p-1.5 w-[35%] outline-none  border-gray-300