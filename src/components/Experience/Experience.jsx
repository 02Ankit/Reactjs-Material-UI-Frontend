import React, {useContext} from 'react';
import { themeContext } from '../../Context';
import "./Experience.css";

const Experience = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  
  return (
    <div className="experience" id='experience'>
    <div className="achievement">
      {/* darkMode */}
      <div className="circle" style={{color: darkMode? 'var(--orange)': ""}}>18+</div>
      <span style={{color: darkMode? "white": ""}}>Sessions </span>
      <span>Conducted</span>
    </div>
    <div className="achievement">
      <div className="circle" style={{color: darkMode? 'var(--orange)': ""}}>20+</div>
      <span style={{color: darkMode? 'white': ""}}>Our</span>
      <span>Students</span>
    </div>
    <div className="achievement">
      <div className="circle" style={{color: darkMode? 'var(--orange)': ""}}>25+</div>
      <span style={{color: darkMode? 'white': ""}}>Our</span>
      <span>Teachers</span>
    </div>
  </div>
  )
}

export default Experience