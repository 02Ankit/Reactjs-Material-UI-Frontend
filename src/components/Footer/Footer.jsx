import React from 'react'
import { IoMdMail } from "react-icons/io";
import { IoMdCall } from "react-icons/io";
import Wave from "../../img/wave.png";
import './Footer.css'
import { FaInstagram, FaFacebookMessenger, FaLinkedin, FaWhatsappSquare } from "react-icons/fa";
// import { WhatsappShareButton} from "react-share";
// import { WhatsappIcon} from "react-share"
// import { Facebook } from '@material-ui/icons';
const Footer = () => {
    const fontStyles = {color: 'white', fontSize: '60px'};
    const fontwhatsapp = {backgroundColor:'white', color: '#25D366', fontSize: '48px','borderRadius': '10%'};
  return (
  <div className="footer">
      <div className="whatsapp">
          <a href="https://wa.me/919399270144?text=Hello%2C%20I%20am%20interested%20%20in%20NodoubtsAcademy" className="whatsapp">
          <FaWhatsappSquare style={fontwhatsapp}/>
          </a>
      </div>

      <img className="imgfooter" src={Wave} alt=""  />
      <div className="f-content">
          <span><IoMdMail/> nodoubtsacademy@gmail.com</span>
          <span><IoMdCall/> +91-93992-70144</span>
          <div className="f-icons">
            <a href="https://www.instagram.com/nodoubts_academy/"
              className="instagram">
              <FaInstagram style={fontStyles}/>
            </a>

            <a  href="https://www.facebook.com/nodoubtsacademy"
              className="facebook" >
              <FaFacebookMessenger style={fontStyles}/>
            </a>
            
            <a
              href="https://www.linkedin.com/in/nodoubts-academy-b09ba2243/"
              className="linkedin">
              <FaLinkedin style={fontStyles}/>
            </a>

            {/* <p>Share On </p>
              <WhatsappShareButton url="https://wa.me/919399270144">
                <WhatsappIcon logoFillColor="white" round={true} ></WhatsappIcon>
              </WhatsappShareButton>*/}
          </div>
      </div>
  </div>
  
  )
}

export default Footer