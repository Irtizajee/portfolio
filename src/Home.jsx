import React, { useState } from 'react'
import portfolio from './portfolio_pic.png'
import resume from './resume.pdf'
import { Link } from 'react-router-dom'
import { useContext } from 'react'
import NewContext from './context api/Newcontext'
function Home() {

    const dataContext = useContext(NewContext)
   
    const [sidebar, setSidebar] = useState({
        left: "-100%"
    })
    function humberburger() {
        setSidebar({

            left: "0",
            transition: ".3s ease-in-out",
            display: "block"
        })
    }
    function cross() {
        setSidebar({
            left: "-100%",
            transition: ".3s ease-in-out",
            display: "none"

        })
    }
    return (
        <>
            {/* <div className='side_bar' style={sidebar}>
                <div onClick={cross} style={{ float: "right", fontSize: "25px", margin: "28px 18px 0px 0px", opacity: ".8" }} ><i class="fa-solid fa-x"></i></div>
                <div style={{ textAlign: "center", height: "100%", boxSizing: "border-box", padding: "190px 0px" }}>
                    <div style={{ margin: "40px 0px", fontSize: "30px" }}><Link style={{ color: "black", textDecoration: "none" }} to="/" >Home</Link></div>
                    <div style={{ margin: "40px 0px", fontSize: "30px" }}><Link style={{ color: "black", textDecoration: "none" }} to="/About" >About</Link></div>
                    <div style={{ margin: "40px 0px", fontSize: "30px" }}><Link style={{ color: "black", textDecoration: "none" }} to="/Projects" >Projects</Link></div>
                    <div style={{ margin: "40px 0px", fontSize: "30px" }}><Link style={{ color: "black", textDecoration: "none" }} to="/Contact" >Contact</Link></div>
                </div>
            </div> */}
            <div className='home_body body'  style={dataContext.theme}>
{/* <button onClick={dataContext.changeBackground} >{dataContext.themeBtnText}</button> */}
                {/* <nav className='fisrt_nav'>
                    <div className='nav_firstChild'>Irtaza Ali</div>

                    <div className='nav_secondChild'>
                        <Link to="/" >Home</Link>
                        <Link to="/About" >About</Link>
                        <Link to="/Projects" >Projects</Link>
                        <Link to="/Contact" >Contact</Link>
                    </div>
                </nav>
                
                <nav className='second_navbar_responsive'>
                    <div className='second_navbar_responsive_name'>Irtaza Ali</div>
                    <div className='second_navbar_responsive_humburger'>
                        <i onClick={humberburger} class="fa-solid fa-bars" style={{ color: "black" }} ></i>
                    </div>


                </nav> */}

                <div className='home_container'>
                    <div className='portfolio_about'>
                        <div className='portfolio_text' style={dataContext.theme}>
                            <div className='porfolio_text_one' >
                                {/* border: "1px solid black" */}
                                <h1  >
                                    <span className='text_hide_show' > Front-End React Developer</span>
                                    <span className='text_show' > Front-End React Developer</span>
                                </h1>
                            </div>

                            <div className='porfolio_text_two' >
                                <p> Hi, I am Irtaza Ali. A Front-end Developer from Karachi, Pakistan. </p>
                                
                               <a className='github_link_a' target='_blank'  href="https://github.com/Irtizajee?tab=repositories"> <i  style={{ fontSize: "35px" }} className="fa-brands fa-github github_link"></i> </a>
                               <a className='github_link_a' target='_blank'  href="https://www.linkedin.com/in/irtaza-ali-3b8b9a2a1/"><i style={{ fontSize: "35px" , marginLeft:'10px' }} class="fa-brands fa-linkedin github_link"></i> </a>
                                <a className='my_resume_a' href={resume} download> <span  className='my_resume' >  My Resume</span></a>
                            </div>
                        </div>
                        <div className='portfolio_pic'>

                            <img width="100%" height="100%" src={portfolio} alt="" />

                        </div>
                    </div>
                    <div className='home_icons'  >
                        <div>
                            <span  >Skills |</span>
                        </div>
                        <div>
                            <i class="fa-brands fa-html5" style={{ color: "#e14e1d" }} ></i>
                            <i class="fa-brands fa-css3-alt" style={{ color: "#0277BD" }} ></i>
                            <i class="fa-brands fa-square-js" style={{ color: "#F0DB4F", backgroundColor: "white", padding: "0px!important" , padding:"0px"}} ></i>
                        </div>
                        <div>
                            <i class="fa-brands fa-bootstrap" style={{ color: "#6D11F4" }} ></i>
                            <i class="fa-brands fa-react" style={{ color: "#00D8FF", backgroundColor: "#242938", borderRadius: "4px" }} ></i>
                        </div>

                    </div>
                </div>



            </div>

        </>
    )
}

export default Home