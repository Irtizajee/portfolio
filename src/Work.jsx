import React from 'react'
import { useEffect, useState  , useContext} from 'react'
import './Project.css'

import project_pic1 from './project_pic1.webp'
import netflix_app from './netflix_app.png'
import NewContext from './context api/Newcontext'

function Work(props) {
    // let [imageCss, setImageCss] = useState({
    //     // transform:"translateY(-20px)"
    // })

    // function image_translate() {

    //     setImageCss({
    //         transform: "translateY(-350px)",
    //         transition: "8s ease-in-out"
    //     })
    // }
    // function image_translate_mouse_out() {

    //     setImageCss({
    //         transform: "translateY(0px)",
    //         transition: "5s ease-in-out"
    //     })
    // }
    const dataContext = useContext(NewContext)
    return (
        <>
        
        <div className={props.class} style={dataContext.work} >

            <div  onMouseLeave={props.func_mouseOut} onMouseEnter={props.func_mouseEnter} className={props.class2} style={props.background_black}>
                <img style={props.initVar} src={props.img} alt="project_1" />
            </div>
            <div className='project_component_child_two'>
                <h2> {props.name} </h2>
                <div className='project_component_child_two_p'>
                    <p>
                        {props.p}
                    </p>
                </div>
                <div className='project_component_child_two_div_1'>
                    <div style={{ marginLeft: "100px" }} >{props.tech_1}</div>
                    <div style={{ marginRight: "100px" }} >{props.tech_2}</div>
                </div>
                <div className='project_component_child_two_div_2'>
                    <div> <a href={props.github} target='_black' >  Code <i class="fa-brands fa-github"></i></a>
                    </div>
                    <div>
                        <a href={props.netlify} target='_blank' >
                            Live Demo <i class="fa-solid fa-arrow-up-right-from-square"></i>
                        </a>
                    </div>
                </div>
            </div>
        </div>
       
        </>
    )
}

export default Work