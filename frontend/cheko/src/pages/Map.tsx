import ChekoMap, { Marker, Popup } from 'react-map-gl/maplibre';
import 'maplibre-gl/dist/maplibre-gl.css';
import { SetStateAction, useContext, useEffect, useState } from 'react';
import PinPointSVG from '../assets/pinpoint';
import PopupCard from '../components/PopUpCard';
import { FilterCategoryType, ResturantType, SearchAndFilterConfigs, SearchAndFilterInputType } from '../config-types/cheko-types';


export default function CMap({searchfilterconfigs,searchinput}:{searchfilterconfigs:({configs}:{configs:SearchAndFilterConfigs})=>void,searchinput:SearchAndFilterInputType | null}) {
    const [data,setData] = useState<Array<ResturantType>>([]);
    const [popupLong,setPopupLong]=useState(0)
    const [popupLat,setPopupLat]=useState(0)
    const [isPopupVisible,setIsPopupVisible] = useState(false)
    const [PopUpElem,SetPopUpElem] = useState(<p>Empty</p>)
    const [activatedKey,setActivatedKey] = useState<number | null>(null)
   
    const fetchData = async ({search}:{search:SearchAndFilterInputType|null}) => {
        console.log(`from MAPP UE SearchNfilter:`, { filter: searchinput?.filter, search: searchinput?.search });
        try {
          const response = await fetch(`${process.env.REACT_APP_API_URL}`);
          if (response.status !== 200) {
             
            throw new Error('Network response was not ok');
          }
          const data:Array<ResturantType> = await response.json();
          var data1 = data;
          if(data) {
            const SearchcategoryMap = new Map<string,FilterCategoryType>();
            const MapcategoryMap = new Map<string,FilterCategoryType>();
            if(data && search) {
                data1 = data.filter((val,i)=>{
                if(search.filter === 'all' || val.type === search.filter) {
                    if(val.res_name.toLocaleLowerCase().includes(search.search.toLocaleLowerCase())) {
                            return val
                        }
                }
                })
              }
            data.forEach((val) => {
                if (SearchcategoryMap.has(val.type)) {
                    // Increment the count if the category already exists
                    const existingCategory = SearchcategoryMap.get(val.type);
                    if (existingCategory) {
                        existingCategory.count += 1;
                    }
                } else {
                    SearchcategoryMap.set(val.type, { name: val.type, count: 1 });
                }
            });

            data1.forEach((val) => {
                if (MapcategoryMap.has(val.type)) {
                    // Increment the count if the category already exists
                    const existingCategory = MapcategoryMap.get(val.type);
                    if (existingCategory) {
                        existingCategory.count += 1;
                    }
                } else {
                    MapcategoryMap.set(val.type, { name: val.type, count: 1 });
                }
            });
            
          searchfilterconfigs({configs:{
              filter: Array.from(SearchcategoryMap.values()).map((val,i)=>{
                return val.name
              }),
              isDisabled: false,
              isMap: true,
              isMenu: false
          }})
          setData(data1);
         } // Pass the fetched data to the provided function
          
        } catch (error) {
          console.error('Failed to fetch data:', error);
        }
      }

      useEffect(()=> {
        console.log(`from MAP UE SearchNfilter:`, { filter: searchinput?.filter, search: searchinput?.search });
        setIsPopupVisible(false)
            setActivatedKey(null)
        fetchData({search:searchinput})
      },[searchinput])

   
      const onMarkerClick = (key: number, res_name:string,res_type:string,res_lat:number,res_lon:number,res_img:string,res_id:number) => {
        if(key === activatedKey) {
            setIsPopupVisible(false)
            setActivatedKey(null)
        }
        else {
        setActivatedKey(key);
        setIsPopupVisible(true)
        setPopupLat(res_lat)
        setPopupLong(res_lon)
        SetPopUpElem(<PopupCard res_name={res_name} res_image={res_img} res_id={res_id} res_type={res_type}/>)
        }
    };

    const onPopupClose = () => {
        setActivatedKey(null)
        setIsPopupVisible(false)
    }


    return (<div className="mt-8">
        <ChekoMap
            initialViewState={{
                latitude: 24.71,
                longitude: 46.738,
                zoom: 14
            }}
            style={{ width: '100%', height: 600 }}
            mapStyle="https://basemaps.cartocdn.com/gl/positron-gl-style/style.json"
        >
            {data.length === 0 ? null : (
                data.map((res, index) => (
                    <>
                    {data.map((res, index) => (
                        <div key={index}> {}
                            <Marker
                                longitude={res['lon']}
                                latitude={res['lat']}

                            >   <div onClick={()=> onMarkerClick(index,res['res_name'],res['type'],res['lat'],res['lon'],res['image'],res['id'])}>
                                <PinPointSVG color={activatedKey === index? '#F4CBDF': 'black'} />
                                </div>
                                </Marker> 
                           
                            
                        </div>
                    ))}
                </>
                ))
            )}
            {
                isPopupVisible?
            <Popup
             longitude={popupLong}
              latitude={popupLat}
               anchor='bottom'
                closeOnClick={false}
                 onClose={()=> onPopupClose()}>
                            {PopUpElem}
                            </Popup> : null
}
        </ChekoMap>
    </div>)
}