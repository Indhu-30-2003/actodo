import Addtodoform from "./Addtodoform"
import Todoform from "./todoform"
import { useState } from "react"
function Todocontainer(){
  
  const [activityArr, setactivity] = useState([
    
])
    return(<><div>
        <div className="flex gap-3 flex-wrap">
        <Addtodoform activityarr={activityArr}  setactivity={setactivity}/>
        <Todoform activityarr={activityArr}  setactivity={setactivity}/>
        </div>
        
      </div></>
)
}
export default Todocontainer