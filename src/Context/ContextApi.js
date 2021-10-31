import React, { createContext } from 'react';
import UseFirebase from '../hooks/UseFirebase';

export const authContext = createContext()

function ContextApi({children}) {

    const useData = UseFirebase();

    return (
        <authContext.Provider value={useData}>
            { children}
        </authContext.Provider>
    )
}

export default ContextApi;
