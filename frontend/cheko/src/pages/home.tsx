
import { useCallback, useContext, useEffect, useState } from "react";
import MenuCategory from "../components/Menucategory";
import ProductGrid from "../components/FoodCard";
import { FilterCategoryType, MenuType, order, SearchAndFilterConfigs, SearchAndFilterInputType } from "../config-types/cheko-types";
import Modal from "../components/ProductModal";



export default function Home({resID,searchFilter,searchfilterconfigs} : {resID:number | undefined,searchFilter:SearchAndFilterInputType | null,searchfilterconfigs:({configs}:{configs:SearchAndFilterConfigs})=>void}) {
    const API_URL = `${process.env.REACT_APP_API_URL}/${resID}/menu`
    const [apidata, setData] = useState<Array<MenuType> | null>(null);
    const [category, setCategory] = useState<Array<FilterCategoryType> | null>(null);
    const [error,setError] = useState(false);
    const [notFound,setNotFound] = useState(false)
    const [selected,SetSelected] = useState("")
    const [selectedProduct, setSelectedProduct] = useState<MenuType | null>(null);  // New state for the selected product
    const [isModalOpen, setIsModalOpen] = useState(false);
   const [orderCount,setOrderCount] = useState(0)
    const handleProductClick = (product: MenuType,count:number) => {
        setOrderCount(count)
        setSelectedProduct(product);
        setIsModalOpen(true);
    };

    const handleModalClose = () => {
        setIsModalOpen(false);
    };
    
    const fetchData = useCallback( async ({searchinput}:{searchinput:SearchAndFilterInputType | null}) => {
        console.log(searchinput?.search)
        try {
          const response = await fetch(API_URL);
          if (response.status !== 200 && response.status !== 404) {
              setError(true)
            throw new Error('Network response was not ok');
          }
          else if(response.status === 404) {
            setNotFound(true)
          }
          const data: Array<MenuType> = await response.json();
          var data1 = data;
          //Search and filter

          if(data && searchinput) {
            data1 = data.filter((val,i)=>{
            if(searchinput.filter === 'all' || val.category === searchinput.filter) {
                if(val.name.toLocaleLowerCase().includes(searchinput.search.toLocaleLowerCase()) || val.description.toLocaleLowerCase().includes(searchinput.search.toLocaleLowerCase())) {
                        return val
                    }
            }
            })
          }
          
          const SearchcategoryMap = new Map<string, FilterCategoryType>();
          const BarCatergoryMap = new Map<string,FilterCategoryType>();
        data.forEach((val) => {
            if (SearchcategoryMap.has(val.category)) {
                // Increment the count if the category already exists
                const existingCategory = SearchcategoryMap.get(val.category);
                if (existingCategory) {
                    existingCategory.count += 1;
                }
            } else {
                SearchcategoryMap.set(val.category, { name: val.category, count: 1 });
            }
        });
        data1.forEach((val) => {
            if (BarCatergoryMap.has(val.category)) {
                // Increment the count if the category already exists
                const existingCategory = BarCatergoryMap.get(val.category);
                if (existingCategory) {
                    existingCategory.count += 1;
                }
            } else {
                BarCatergoryMap.set(val.category, { name: val.category, count: 1 });
            }
        });

        // Convert the map back to an array
        const cat = Array.from(BarCatergoryMap.values())
        searchfilterconfigs({configs:{
            isDisabled: false,
            filter: Array.from(SearchcategoryMap.values()).map((val,i)=>{
                return val.name
            }),
            isMap: false,
            isMenu: true
        }})
            if(cat.length !== 0) {
                SetSelected(`${cat.at(0)?.name}`)

            } else {
               SetSelected("No items")
            }
            
          setData(data1);
          setCategory(cat) // Pass the fetched data to the provided function
        } catch (error) {
          console.error('Failed to fetch data:', error);
        }
      },[API_URL]);
    useEffect(() => {
       
        console.log(`from home UE SearchNfilter:`, { filter: searchFilter?.filter, search: searchFilter?.search });
        if(resID !== undefined) {
        fetchData({searchinput:searchFilter});
    } else {
        searchfilterconfigs({configs:{filter:[],isDisabled:true,isMap:false,isMenu:false}})
    }
      }, [fetchData,resID,searchFilter]);
    return (
        /*TODO:
        Shared Filter and search bar configurations:
        const SearchAndFilterConfigs = {
            isDisabled: boolean,
            filter : String Array,
            isMap: boolean,
            isMenu: boolean
        }

        */
      
    <div className="container mt-10 ml-[10%] dark:bg-zinc-900 ">
        { resID !==undefined ? 
        <>
        {apidata && !notFound && category? (
            <>
       <MenuCategory 
       initSelect={selected}
       Filtercallback={(val)=>{
        SetSelected(val.name)
       }} cat={category.filter((value,index,arr)=>{
        if(value.name !== null) {
            return arr.indexOf(value) === index;
        }
       })} />
        <div className="flex mr-[4%] items-center space-x-3 ">
        <h2 className="text-xl font-bold py-5 justify-start dark:text-gray-50">{selected}</h2>
        <div className="w-full bg-gray-300 h-[1px] dark:bg-zinc-900 "></div>
        </div>
        <ProductGrid
        
        onProductClick={handleProductClick}
        selectedCat={selected}
        menu={apidata.filter((val,i)=>{
            if(val.name !== null) {
                if(i === 1) {
                    val.isBestSale = true;
                }
                
                return val;
            
            }
        })}/>

{isModalOpen && selectedProduct && (
                            <Modal 
                            onOrderChange={ (p)=>{
                                setOrderCount(p)
                            }
                                
                            }
                            count={orderCount}
                                product={selectedProduct}
                                onClose={handleModalClose} 
                            />
                        )}
        </> ) : (notFound? (<p className="dark:text-gray-50">404: Menu not Found</p>): (<p className="dark:text-gray-50">Loading...</p>) )
        }</> : (<p className="font-semibold dark:text-gray-50">Welcome to Cheko, Please select a resturant from the Map!</p>)
            }
    </div>);
}