import React, { useState } from 'react'
import { useEffect } from 'react'
import './Project.css'
import project_pic1 from './project_pic1.webp'
import Work from './Work'
import { useContext } from 'react'
import { contextCreater } from './Context'
import Context from './Context'
import netflix_app from './netflix_app.png'
import code_with_harry from './code_with_harry.png'
import case_converter from './case_converter.png'
import clock from './clock.png'
import shuffle_lines from './shuffle_lines.png'
import spotify_ss from './spotify_ss.png'
import todo_list_ss from './todo_list_ss.PNG'
import NewContext from './context api/Newcontext'
import weather_app_ss from './weather_app_ss.PNG'
function Project() {
    const getData = useContext(contextCreater)
    const dataContext = useContext(NewContext)
    let [imageCss, setImageCss] = useState({
        // transform:"translateY(-20px)"
    })
    let [i, setI] = useState(1)
    function image_translate() {

        setImageCss({
            transform: "translateY(-350px)",
            transition: "5s ease-in-out"
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
            <div className='project_body  ' style={dataContext.theme}  >
                {/* <button onClick={dataContext.changeBackground} >{dataContext.themeBtnText}</button> */}


                <div className=' project_component'  >

                    <center>
                    <Work class2="project_component_child_one_modify" background_black={getData.style} name="Weather App" p="I built a dynamic Weather Application that fetches real-time weather data from a third-party API and displays it in an engaging user interface. Users can input location details to receive current weather information" img={weather_app_ss} class="project_component_child_reverse" github="https://github.com/Irtizajee/Weather-Application" netlify="https://weatherapplication-react-app.netlify.app/" tech_1="React" tech_2="CSS" />
                        <br />

                    <Work class2="project_component_child_one_modify" background_black={getData.style} name="Todo List" p="I implemented a Todo List application using react js . The application allows users to add, edit, and delete tasks . The project emphasizes the fundamentals of web development, showcasing the manipulation of the Document Object Model (DOM) to dynamically update and render tasks." img={todo_list_ss} class="project_component_child" github="https://github.com/Irtizajee/Todo-List-App" netlify="https://todo-listing-react.netlify.app/" tech_1="React" tech_2="CSS" />
                        <br />
                    <Work class2="project_component_child_one_modify" background_black={getData.style} name="Spotify Clone" p="I developed a Spotify clone using React JS, creating a web application that replicates the user interface. With a responsive design and intuitive user experience, the project aims to provide a seamless and familiar environment for users who are accustomed to the Spotify interface." img={spotify_ss} class="project_component_child_reverse" github="https://github.com/Irtizajee/Spotify-Clone" netlify="https://spotify-clone-copywrite-irtaza.netlify.app/" tech_1="React" tech_2="CSS" />
                        <br />
                        {/* check */}
                        <Work class2="project_component_child_one" func_mouseEnter={getData.image_translate} func_mouseOut={getData.image_translate_mouse_out}
                            initVar={getData.imageCss} name="Netflix Clone" class="project_component_child" img={netflix_app} p="Enjoy personalized recommendations, user-friendly navigation, and stay up-to-date with the latest releases. Our clone brings the Netflix experience to your device with a familiar interface." github="https://github.com/Irtizajee/Netflix-Clone" netlify="https://clonning-app.netlify.app/"
                            tech_1="React" tech_2="Bootstrap" />
                        <br />
                        <Work class2="project_component_child_one" func_mouseEnter={getData.image_translate} func_mouseOut={getData.image_translate_mouse_out}
                            initVar={getData.imageCss} name="Clone of Code With Harry" p="Explore a wide range of coding languages, interactive tutorials, and real-time coding practice. Join a thriving coding community, take on challenges, and track your progress. Your coding journey begins here!" img={code_with_harry} class="project_component_child_reverse" github="https://github.com/Irtizajee/Clone_of_codewithharry_site" netlify="https://code-with-harry-clone.netlify.app/"
                            tech_1="javascript" tech_2="Bootstrap" />
                        <br />
                        <Work class2="project_component_child_one_modify" background_black={getData.style} name="Case Converter" p="Whether you need to switch from uppercase to lowercase, capitalize sentences, or format text in title case, our tool simplifies the process. Say goodbye to manual case adjustments and effortlessly transform your text with a few clicks!" img={case_converter} class="project_component_child" github="https://github.com/Irtizajee/case_converter" netlify="https://case-converter-text.netlify.app/" tech_1="React" tech_2="CSS" />
                        <br />
                        <Work class2="project_component_child_one_modify" background_black={getData.style} name="Clock" p="With its silent movement and impeccable craftsmanship, this clock not only keeps perfect time but also adds a touch of sophistication to any room. Elevate your space with the beauty and functionality of our Exquisite Clock today" img={clock} class="project_component_child_reverse" github="https://github.com/Irtizajee/Clock_analog_digital" netlify="https://clock-digitalanalog.netlify.app/" tech_1="React" tech_2="CSS" />
                        <br />
                        <Work class2="project_component_child_one_modify" background_black={getData.style} name="Shuffle Lines" p="Shuffle Text Lines Tool is a unique creative tool that takes a set of text lines as input and outputs them after shuffling in random order. The text line randomization may come in handy in a variety of scenarios." img={shuffle_lines} class="project_component_child" github="https://github.com/Irtizajee/shuffle_lines" netlify="https://shuffle-lines.netlify.app/" tech_1="HTML" tech_2="Javascript" />
                    </center>

                </div>
            </div>
        </>
    )
}

export default Project