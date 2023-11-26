import React, { useState } from 'react'
import { createContext } from 'react'
const contextCreater = createContext();
function Context(props) {


    const age = 23;
    // const name = "Irtaza Ali";
    const  [name , setName ] = useState("Irtaza");

    function changeName(){
        setName("Irtaza ALi")
    }
    let style = {
      backgroundColor :"black"
    }
    let marginStyle = {
      marginTop : "40px"
    }


    // this is function for Work component 
    let [imageCss, setImageCss] = useState({
      // transform:"translateY(-20px)"
  })
 
  function image_translate() {

      setImageCss({
          transform: "translateY(-350px)",
          transition: "8s ease-in-out"
      })
  }
  function image_translate_mouse_out() {

      setImageCss({
          transform: "translateY(0px)",
          transition: "5s ease-in-out"
      })
  }
  return (
    <>
    
     <contextCreater.Provider value={{age , name , setName , changeName , style , marginStyle , imageCss ,setImageCss , image_translate , image_translate_mouse_out}} >
        {props.children}
    </contextCreater.Provider>
   
    </>
  )
}

export default Context
export {contextCreater}