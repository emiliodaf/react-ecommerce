import { createContext, useEffect, useState } from "react";
import { getCategoriesAndDocuments } from "../utils/firebase/firebase.utils";

export const categoriesContext = createContext({
    categoriesMap: {},
});

export const CategoriesProvider = ({children}) => {
    const[ categoriesMap, setCategoriesMap ] = useState({});

    useEffect(() => {
        const getCategoriesMap = async () => {
        const categoryMap = await getCategoriesAndDocuments();
        console.log(categoryMap);
        setCategoriesMap(categoryMap)
        };
        getCategoriesMap();
    }, [])
   
    const value = {categoriesMap};
    return(
        <categoriesContext.Provider value={value}>
            {children}
        </categoriesContext.Provider>
    )
}


