export  type SearchAndFilterConfigs = {
    isDisabled: boolean,
    filter : string[],
    isMap: boolean,
    isMenu: boolean
}

export type MarkerConfigs = {
isActivate: boolean,
}

export type MenuContextType = {
    menu: number | undefined,
    setMenu: React.Dispatch<React.SetStateAction<number | undefined>>
}
export type OrderContextType = {
    orders: Array<order>,
    setOrders: React.Dispatch<React.SetStateAction<Array<order>>>
}

export type PopUpCardType = {
    res_name: string,
    res_image: string,
    res_id: number,
    res_type: string
}

export type MenuType = {
        id: number,
		name: string,
		description: string,
		price: number,
		imgUrl: string,
		calories: number,
		category: string
        isBestSale: boolean
}

export type FilterCategoryType = {
    name: string,
    count: number
    
}

export type SearchAndFilterInputType = {
    search: string,
    filter: string,
}

export type ResturantType = {
    id: number,
    image:string,
    type:string,
    lon:number,
    lat:number,
    menu:Array<MenuType>
    res_name:string
}

export type order = { 
    menu_id:number
    count: number
}