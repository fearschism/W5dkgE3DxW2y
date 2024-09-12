import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Routes, useSearchParams, useNavigate, useLocation  } from 'react-router-dom';
import Home from './pages/home'
import CMap from './pages/Map'
import NavBar from './components/Navbar';
import MenuSearchQuery from './components/MenuSearchQuery';
import {SearchAndFilterConfigs,MenuContextType, SearchAndFilterInputType, order, OrderContextType} from './config-types/cheko-types';
export const MenuContext = React.createContext<MenuContextType>({menu: undefined,setMenu: ()=>{}});
function App() {
  const [menuID,SetMenuID] = useState<number | undefined>(undefined)
  const [SearchNfilter,setSearchNfilter] = useState<SearchAndFilterInputType|null>(null)
  const [searchfilterconfigs,setSearchFilterConfigs] = useState<SearchAndFilterConfigs>({filter:[],isDisabled:true,isMap:false,isMenu:false})
  function SearchConfigHandler({configs}:{configs:SearchAndFilterConfigs}) {
    setSearchFilterConfigs(configs)
  }

  function SearchAndFilterInputHandler({input}:{input:SearchAndFilterInputType | null}) {
    if(input!== null) {
      console.log(`From SearchAndFilterInputHander input:`, input); // Check input here
    setSearchNfilter({filter: input.filter, search: input.search});
    console.log(`Updated SearchNfilter:`, { filter: input.filter, search: input.search });
    }
    else {
      setSearchNfilter(null)
    }
  }
  
  return (
    <div className="App dark:bg-zinc-900 bg-gray-50">
      
      
      <Router>
        <MenuContext.Provider value={{menu: menuID,setMenu:SetMenuID}}>
        <NavBar searchfilterconfigs={searchfilterconfigs} onSearchInput={SearchAndFilterInputHandler}/>
      <Routes>
        
        <Route path="/" element={<MenuSearchQuery SearchAndFilter={SearchNfilter} searchfilterconfigs={SearchConfigHandler}/>} />
        <Route path="/map" element={<CMap searchfilterconfigs={SearchConfigHandler} searchinput={SearchNfilter}/>} />
      </Routes>
      
      </MenuContext.Provider>
    </Router>
    </div>
  );
}

export default App;
