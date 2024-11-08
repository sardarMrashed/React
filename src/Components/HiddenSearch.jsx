import { useState } from "react"
import {FaSearch} from "react-icons/fa"


export const HiddenSearch = () => {
  const [hidden, setHidden] = useState(false)
const [bgColor, setBgColor] = useState('white')

const handleClick = (e) => {
setBgColor('#1a1a1a')

if(e.target.className === 'container'){
  setHidden(false)
  setBgColor('white')
}
};

  return (
    <section
     className="container" 
     style={{backgroundColor: bgColor}}
     onClick={handleClick}
>
     

      {
        hidden ? (
 
            <input type="text" placeholder="Search....." />
        ) :(
          <FaSearch  onClick={() =>{setHidden(true)}}/>
         
        )

      }
 </section>
  )
}
    
export default HiddenSearch