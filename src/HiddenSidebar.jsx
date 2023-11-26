import React from 'react'
import './App.css'
import { Link, useLocation } from 'react-router-dom'
import NewContext from './context api/Newcontext'
import { useContext } from 'react'
function HiddenSidebar() {
    let location = useLocation()
    function check(){
        // console.log(location.pathname)
    }
    const dataContext = useContext(NewContext)
  return (
   <>
    <div className='hiddenSideBar' style={dataContext.theme} >

                <div style={{ float: "right", fontSize: "25px", margin: "28px 18px 0px 0px", opacity: ".8" }} >
                   <Link to={dataContext.locationUrl} onClick={check}> <i style={dataContext.theme} class="fa-solid fa-x bars"></i></Link>
                    </div>
                <div className='hiddenSideBar_links_div' style={{ textAlign: "center", height: "100%", boxSizing: "border-box", padding: "190px 0px" }}>

                    <div style={{ margin: "40px 0px", fontSize: "30px" }}><Link style={dataContext.theme} to="/" >Home</Link></div>
                    <div style={{ margin: "40px 0px", fontSize: "30px" }}><Link style={dataContext.theme} to="/about" >About</Link></div>
                    <div style={{ margin: "40px 0px", fontSize: "30px" }}><Link style={dataContext.theme} to="/projects" >Projects</Link></div>
                    <div style={{ margin: "40px 0px", fontSize: "30px" }}><Link style={dataContext.theme}  to="/contact" >Contact</Link></div>

                </div>

            </div>
   </>
  )
}

export default HiddenSidebar
