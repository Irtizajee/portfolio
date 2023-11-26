import NewContext from "./Newcontext";
import React, { useState } from 'react'

function NewState({children}) {
   const [theme , setTheme] = useState({})
   const [themeBtnText ,setThemeBtnText] = useState("dark")
   const [work , setWork] = useState({})
   const [ links  , setLinks] = useState({})
   const [sun_moon , setSun_Moon] = useState("fa-solid fa-moon")
   const [locationUrl , setLocationUrl] = useState()
   function changeBackground(){
    if (themeBtnText === "dark")
    {
     
      setTheme({
            backgroundColor: "#1c2128",
            color : "white"
        })
        setSun_Moon("fa-solid fa-sun")
        setThemeBtnText("ligth")
        setWork({
          backgroundColor:"#2d333b",
          color:"white"
        })
    }
   else{
    setSun_Moon("fa-solid fa-moon")
    setTheme({
        backgroundColor: "#F0F0F0",
        color : "black"
    })
    setThemeBtnText("dark")
    setWork({
      backgroundColor:"white",
      color:"black"
    })
   }


}
  return (
    <>
    <NewContext.Provider value={{theme , setTheme , changeBackground ,themeBtnText , setThemeBtnText , work ,setWork , sun_moon , setSun_Moon , locationUrl , setLocationUrl}}>
        {children}
    </NewContext.Provider>
    </>
  )
}

export default NewState;
