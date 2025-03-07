import { useState } from "react"
import { useGlobalContext } from "../context/globalContext"

export function Search(){

    // const [query,setQuery] = useState("")

    // // stampiamo in console il dato ricercato modificando query
    // const HandleSubmit = (e) => {
    //     e.preventDefault()
    //     console.log(query);
        
    // }

    const {setQuery,HandleSubmit} = useGlobalContext()


    return(
        <>
        <form onSubmit={e => HandleSubmit(e)}>
            <input type="text" onChange={e => setQuery(e.target.value)} />
            <button type="submit">cerca</button>
        </form>
        </>
    )
} 