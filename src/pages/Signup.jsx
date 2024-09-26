import { useState } from "react"
import { Link } from "react-router-dom"
import { useNavigate } from "react-router-dom"
function Signup(props){
    const usenavi=useNavigate()
    const user=props.user
    const setuser=props.setuser

    const [eusername,setusername]=useState("")
    const [epassword,setpassword]=useState("")

    function handleusername(evt){
        setusername(evt.target.value)
   }
   function handlepassword(evt){
        setpassword(evt.target.value)
   }
   function handleadd(){
       setuser([...user,{username:eusername,password:epassword}])
       usenavi("/")
   }
    return(<>
    <div className="bg-black p-10">
        <div className="bg-[#EFEFEF] p-10 border rounded-md">
        <h1 className="text-3xl font-medium">Hey Hi 👋</h1> 
        <p>Sign up here :)</p>
        <div className="flex flex-col gap-2 my-2">
            <input type="text" className="w-52 border-black p-1 bg-transparent border rounded-md" placeholder="Username" onChange={handleusername} value={eusername}></input>
            <input type="text" className="w-52 border-black p-1 bg-transparent border rounded-md" placeholder="Password" onChange={handlepassword} value={epassword}></input>
            <input type="text" className="w-52 border-black p-1 bg-transparent border rounded-md" placeholder="Conform Password"></input>
            <button className="bg-[#e35b32] w-24 p-1 rounded-md" onClick={handleadd}> Sign UP</button>
            <p>Already have an account? <Link to={'/'} className="underline text-blue-800">Login</Link></p>

        </div>
        </div>
    </div>
    </>)
}
export default Signup