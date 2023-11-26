import React, { useEffect } from 'react'
import { Link, Outlet } from 'react-router-dom'
import { useState, useContext } from 'react'
import './App.css'
import NewContext from './context api/Newcontext'
import { useLocation } from 'react-router-dom'
function Navbar() {
    let location = useLocation()
    const dataContext = useContext(NewContext)
    const [sidebar, setSidebar] = useState({
        left: "-100%"
    })
    function humberburger() {
        console.log(location.pathname , "location pahtname")
        dataContext.setLocationUrl(location.pathname)
    }
    function link_click() {
        setSidebar({
            left: "-100%",
            transition: ".3s ease-in-out",
            display: "none"

        })
    }

    // const location = useLocation()
    const [home, setHome] = useState({})
    const [about, setAbout] = useState({})
    const [contact, setContact] = useState({})
    const [project, setProject] = useState({})

    const [changeColor, setChangeColor] = useState({})

    // if ( location.pathname === "/" )
    // {
    //     setHome({
    //         color: "rgb(41, 165, 236)"
    //     })
    // }
    // location.pathname === "/" ? setHome({color: "rgb(41, 165, 236)"}) : setHome({color : "#2D2E32"});



    let [navColor, setNavColor] = useState({})
    useEffect(
        () => {

            if (dataContext.themeBtnText === "dark") {
                setNavColor({
                    color: "#2D2E32"
                })
            }
            else {
                setNavColor({
                    color: "white"
                })
            }

            // console.log("run by useEffect navigation bar" , dataContext.themeBtnText)
        }
        , [dataContext.changeBackground]
    )


    return (
        <>
            {/* <div className='side_bar' style={sidebar}>

                <div onClick={cross} style={{ float: "right", fontSize: "25px", margin: "28px 18px 0px 0px", opacity: ".8" }} ><i style={dataContext.theme} class="fa-solid fa-x"></i></div>
                <div style={{ textAlign: "center", height: "100%", boxSizing: "border-box", padding: "190px 0px" }}>

                    <div style={{ margin: "40px 0px", fontSize: "30px" }}><Link onClick={link_click} style={{ color: "black", textDecoration: "none" }} to="/" >Home</Link></div>
                    <div style={{ margin: "40px 0px", fontSize: "30px" }}><Link onClick={link_click} style={{ color: "black", textDecoration: "none" }} to="/about" >About</Link></div>
                    <div style={{ margin: "40px 0px", fontSize: "30px" }}><Link onClick={link_click} style={{ color: "black", textDecoration: "none" }} to="/projects" >Projects</Link></div>
                    <div style={{ margin: "40px 0px", fontSize: "30px" }}><Link onClick={link_click} style={{ color: "black", textDecoration: "none" }} to="/contact" >Contact</Link></div>

                </div>

            </div> */}
            <nav className='fisrt_nav' style={dataContext.theme} >
                <div className='nav_firstChild' style={dataContext.theme}> <Link to="/" className='irtazaName'> Irtaza Ali</Link></div>


                <div className='nav_secondChild' >
                    <Link style={navColor} to="/" ><span style={home}> Home</span></Link>
                    <Link style={navColor} to="/about" ><span style={about}> About</span></Link>
                    <Link style={navColor} to="/projects" ><span style={project}> Projects</span></Link>
                    <Link style={navColor} to="/contact" ><span style={contact}> Contact</span></Link>
                </div>
                <div style={{ marginRight: "50px", cursor: "pointer" }}
                ><i onClick={dataContext.changeBackground} style={{ fontSize: "30px" }} class={dataContext.sun_moon}></i>
                    {/* <i style={{fontSize:"30px"}} class="fa-solid fa-sun"></i> */}
                </div>
            </nav>

            <nav className='second_navbar_responsive' style={dataContext.theme}>
                <div className='second_navbar_responsive_name' style={dataContext.theme} ><Link to="/" className='irtazaName' > Irtaza Ali</Link>
                    <i onClick={dataContext.changeBackground} style={{ fontSize: "30px", marginLeft: "20px" }} class={dataContext.sun_moon}></i>
                </div>

                <div className='second_navbar_responsive_humburger'>
                 <Link to="/hiddensidebar" >   <i onClick={humberburger} class="fa-solid fa-bars bars" style={dataContext.theme}  ></i></Link>
                </div>


            </nav>
            <Outlet />
        </>
    )
}

export default Navbar