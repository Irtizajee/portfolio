import React from 'react'
import './App.css'
import './About.css'

import about_pic from './about_pic.jpg'

import { useContext } from 'react'
import NewContext from './context api/Newcontext'
function About() {

  const dataContext = useContext(NewContext);
 
  return (
    <>

      <div className='about_body body '  style={dataContext.theme}>
      {/* <button onClick={dataContext.changeBackground} >{dataContext.themeBtnText}</button> */}

        <div className="home_container about_component">
          <div className='about_component_child'>
            <img width="100%" height="100%" src={about_pic} alt="" />
          </div>
          <div className=' about_component_child'>
            <div>
              <h3  > ABOUT ME</h3>
            </div>
            <div>
              <h2>A dedicated Front-end Developer
                based in Karachi, Pakistan</h2>
            </div>
            <p>Hi there, I'm Irtaza Ali, a front-end developer with a passion for crafting exceptional web experiences. I specialize in React.js and responsive design, and I have a knack for website cloning and logic building. I love tackling complex problems and turning them into elegant solutions. Let's collaborate and bring your web projects to life!</p>
          </div>

        </div>
      </div>
    </>
  )
}

export default About