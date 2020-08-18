import React, {useState, createContext} from 'react';

const defaultStatus = {
    results : {},
}

export const DataContext = createContext();


export const DataProvider = (props) => {
    const [data, setData] = useState(null);

    return(
        <DataContext.Provider value={{data,setData}}>
            {props.children}
        </DataContext.Provider>
    )
}