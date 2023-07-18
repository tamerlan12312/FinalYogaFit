import {useState,createContext} from "react"

export const ProfilContext = createContext()

export const ProfilProvider = props=>{
    const [user,setUser] = useState(false)
    return (
        <ProfilContext.Provider value={[user,setUser]}>
             {props.children}
        </ProfilContext.Provider>
    )
}
