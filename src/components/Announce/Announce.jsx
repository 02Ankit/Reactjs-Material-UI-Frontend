import React, {useState} from 'react'
import AnnounceCss from  './Announce.css'
import { IoIosClose } from "react-icons/io";


const Announce = () => {
const [announceStyle, setAnnounceStyle] = useState(AnnounceCss)

const handleClose =()=>{
  setAnnounceStyle(false)
}

  return (
    <div className='a-announce' >
    {announceStyle ? <div className='a-announce notify'>
    <h2>Hurry up 10% Off.... 
    <IoIosClose className="iconClose" onClick={handleClose}/></h2>
    </div>: null}
</div>
  )
}

export default Announce