import { useState,useEffect } from "react"

export function Search(){

    // const [query,setQuery] = useState("")

    // // stampiamo in console il dato ricercato modificando query
    // const HandleSubmit = (e) => {
    //     e.preventDefault()
    //     console.log(query);
        
    // }

    return(
        <>
        <form onSubmit={e => HandleSubmit(e)}>
            <input type="text" onChange={e => setQuery(e.target.value)} />
            <button type="submit">cerca</button>
        </form>
        </>
    )
} 