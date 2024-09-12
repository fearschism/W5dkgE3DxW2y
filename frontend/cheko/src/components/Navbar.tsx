import React from 'react';
import { NavLink } from 'react-router-dom';
import BackgroundImage from '../assets/header1.png'
import './external.css'
import Searchbar from './Searchbar';
import { SearchAndFilterConfigs, SearchAndFilterInputType } from '../config-types/cheko-types';
import Toggle from './toggle';
export default function NavBar({searchfilterconfigs,onSearchInput}:{searchfilterconfigs:SearchAndFilterConfigs,onSearchInput:({input}:{input:SearchAndFilterInputType | null})=>void}) {
    
  return (
    <div className='flex '>
    <nav className=" p-0 rounded-br-[36px] mr-[1.5%] h-[15vh] flex flex-1 justify-start items-start relative cheko-header">
      <ul className="pt-5 list-none w-12 flex m-0 ml-[10%] flex-grow-2 mt-[-5px]">
        <li className="mx-2.5">
          <NavLink to="/" className={({ isActive }) => (isActive ? 'bg-pink-200 relative z-0 rounded-bl-md rounded-br-md pt-5 pb-2 pr-3 pl-3 mt-[-5px] w-5' : 'text-white no-underline')}>Home</NavLink>
        </li>
        <li className="mx-2.5">
          <NavLink to="/map" className={({ isActive }) => (isActive ? 'bg-pink-200 relative z-0 rounded-bl-md rounded-br-md pt-5 mt-[-5px] pb-2 pr-3 pl-3  ' : 'text-white no-underline')}>Map</NavLink>
        </li>
        
      </ul>
      <Searchbar  configs={searchfilterconfigs} onSearch={onSearchInput}/>
      
    </nav>
    <Toggle/>
    </div>
   
  );
}
