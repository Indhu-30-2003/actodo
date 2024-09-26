import { useState } from "react"
function Addtodoform(props){
    const activityArr=props.activityarr
    const setactivity=props.setactivity

    const [newactivity,setnewactivity]=useState("")

    function handlechange(evt){
         setnewactivity(evt.target.value)
    }
    function handleadd(){
        setactivity([...activityArr,{id:activityArr.length+1,activity:newactivity}])
        setnewactivity("")
    }


    return(<div className="flex flex-col gap-3">
        <h1 className="text-2xl font-medium">Manage Activities</h1>
        <div>
        <input type="text" placholder="Next Activity?" className="border border-black p-1 bg-transparent " onChange={handlechange} value={newactivity}></input>
        <button onClick={handleadd} className="bg-black text-white border border-black p-1 ">Add</button>
        </div>
        
    </div>)
}
export default Addtodoform