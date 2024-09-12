import { useContext, useEffect, useState } from "react";
import { useSearchParams, useNavigate } from "react-router-dom";
import Home from "../pages/home";
import { MenuContext } from "../App";
import { SearchAndFilterConfigs, SearchAndFilterInputType } from "../config-types/cheko-types";

 const MenuSearchQuery = ({SearchAndFilter,searchfilterconfigs}:{SearchAndFilter:SearchAndFilterInputType | null,searchfilterconfigs:({configs}:{configs:SearchAndFilterConfigs})=>void}) => {
    const [searchParams] = useSearchParams();
    const navigate = useNavigate();
    const {menu,setMenu} = useContext(MenuContext)
    const [res_id,setRes_id] = useState<number | undefined>(undefined)
    
    // Get the ?res= query parameter
    const resIDParam = searchParams.get('res');
    // If there is a Search parameter and the res is a number then we will have resID else it's gonna be undefined
  var resID = resIDParam && !isNaN(Number(resIDParam)) ? Number(resIDParam) : undefined; 
  useEffect(() => {
    console.log(resID + "  SHOOOOO1")
    console.log(`MeanuSearchQuery SearchNfilter:`, { filter: SearchAndFilter?.filter, search: SearchAndFilter?.search });
    if (resIDParam && isNaN(Number(resIDParam))) {
       console.log("SHOOOO?")
      navigate('/');
    }
    else {
      setMenu(resID)
        if(menu !== undefined) {
        resID=menu;
        setRes_id(resID)
        console.log(resID + "  SHOOOO2O")
        } else {
          setRes_id(resID)
        }
    }
  }, [navigate,SearchAndFilter]);

    return <div className="w-full h-full dark:bg-zinc-900"> <Home resID={res_id } searchFilter={SearchAndFilter} searchfilterconfigs={searchfilterconfigs}/> </div>
  };

  export default MenuSearchQuery