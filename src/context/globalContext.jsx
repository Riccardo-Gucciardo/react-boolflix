import { createContext,useState,useContext,Children} from "react";
import axios from "axios";

 const globalContext = createContext()

export const globalProvider = ( {Children} ) => {
    
    const [query,setQuery] = useState("")

    // stampiamo in console il dato ricercato modificando query
    const HandleSubmit = (e) => {
        e.preventDefault()
        console.log(query);
        
    }

    const value = {
        query,
        setQuery,
        HandleSubmit,
        
    }

    return(
        <globalProvider.provider value={value}>
            {Children}
        </globalProvider.provider>
    )
}

export const useGlobalContext = () => useContext(globalContext)

