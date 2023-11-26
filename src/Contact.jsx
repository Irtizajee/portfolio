import React, { useContext, useState } from 'react'
import './Contact.css';
import NewContext from './context api/Newcontext';


function Contact() {
  const dataContext = useContext(NewContext)
  let [msg_copied, setMsg_copied] = useState("")
  let [styleCopied , SetStyleCopied] = useState({})
  function copy_number() {
    navigator.clipboard.writeText("+92340-2596505")
    setMsg_copied("number copied")
    SetStyleCopied({
    //  border: "1px solid red",
     backgroundColor:"green",
     color:"white",
     padding:"10px",
     

    })
    setTimeout(() => {
      setMsg_copied("")
      SetStyleCopied({})
    }, 2000);
    // console.log(e.target.value)
  }

  function copy_whatsapp(){
    navigator.clipboard.writeText("+92308-2449203")
    setMsg_copied("Whatsapp number copied")
    SetStyleCopied({
    //  border: "1px solid red",
     backgroundColor:"green",
     color:"white",
     padding:"10px",
     

    })
    setTimeout(() => {
      setMsg_copied("")
      SetStyleCopied({})
    }, 2000);
  }
  function copy_mail(){
    navigator.clipboard.writeText("aliirtiza643@gmail.com")
    setMsg_copied("Mail Copied")
    SetStyleCopied({
    //  border: "1px solid red",
     backgroundColor:"green",
     color:"white",
     padding:"10px",
     

    })
    setTimeout(() => {
      setMsg_copied("")
      SetStyleCopied({})
    }, 2000);
  }
  return (
    <>
      <div className='contact_body body'  style={dataContext.theme}>
      {/* <button onClick={dataContext.changeBackground} >{dataContext.themeBtnText}</button> */}
        <div className='home_container contact_component'>
          <div className='contact_component_first_child'>
          <span style={styleCopied} className='copied_num' >{msg_copied}</span> 
          </div>
          <div className='contact_component_second_child' >
            <div className='contact_component_child'>

              <div>
                <h3>CONTACT</h3>
              </div>
              <div style={{ display: "flex", alignItems: "center" }} >

                <div className='phone_icon'>
                  <i class="fa-solid fa-phone"></i>
                </div>
                <div className='contact_info phone_info'>
                  <span className='span_phone'> Phone</span>
                  <br />
                  <span className='span_number'> +92340-2596505</span>
                  <i onClick={copy_number} className="fa-solid fa-copy copied_phone"></i>
                  
                </div>
              </div>
            </div>
            <div className='contact_component_child_two'>

              <div className='whatsapp_detail' >

                <div className='phone_icon'>
                  <i style={{ color: "#009A11", fontSize: "35px" }} class="fa-brands fa-square-whatsapp"></i>
                </div>
                <div className='contact_info'>
                  <span className='span_phone'> Whatsapp</span>
                  <br />
                  <span className='span_number'> +92308-2449203</span>
                  <i onClick={copy_whatsapp} className="fa-solid fa-copy copied_phone"></i>
                </div>
              </div>

              <div className='mail_detail' >

                <div className='phone_icon'>
                  <i style={{ color: "#E94134" }} class="fa-solid fa-envelope"></i>
                </div>
                <div className='contact_info'>
                  <span className='span_phone'> Mail</span>
                  <br />
                  <span className='span_number'>  aliirtiza643@gmail.com</span>
                  <i onClick={copy_mail} className="fa-solid fa-copy copied_phone"></i>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Contact