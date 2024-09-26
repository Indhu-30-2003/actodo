
    import { Link } from "react-router-dom"
    import { useState } from "react"
    import { useNavigate } from "react-router-dom"
    function Login(props){
        const usenavi=useNavigate()
        const user=props.user
       
        
        const [eusername,setusername]=useState("")
        const [epassword,setpassword]=useState("")
        const [ruser,setruser]=useState(true)
        function handleusername(evt){
             setusername(evt.target.value)
        }
        function handlepassword(evt){
             setpassword(evt.target.value)
        }
        function handleuser(){
                console.log(user)
                var tempuser=false
            {
    
                user.forEach(function(item){
                    if(item.username===eusername && item.password === epassword )
                    {
                        console.log("Login Successful")
                        tempuser=true
                        usenavi("/Landing",{state:{user:eusername}})
                    }
                   /*  else{
                        console.log("login Unsuccesful")
                        setruser(false)
                    } */
                })
                if(tempuser===false){
                    console.log("failed")
                    setruser(false)
                }
            }
        }
    
        return(<>
       <div className="bg-black p-10">
            <div className="bg-[#EFEFEF] p-10 border rounded-md">
            <h1 className="text-3xl font-medium">Hey Hi 👋</h1> 
            {
                ruser?<p>I help you to manage your activities after you login :)</p>:<p className="text-red-600">Please Signup before You Login</p>
            }
            
            <div className="flex flex-col gap-2 my-2">
                <input type="text" className="w-52 border-black p-1 bg-transparent border rounded-md" placeholder="Username" value={eusername} onChange={handleusername}></input>
                <input type="text" className="w-52 border-black p-1 bg-transparent border rounded-md" placeholder="Password" value={epassword} onChange={handlepassword}></input>
              <button className="bg-[#8272DA] w-24 p-1 rounded-md" onClick={handleuser}> Login</button>
                <p>Don't have an account? <Link to={'/Signup'} className="underline text-blue-800">Sign Up</Link></p>
    
            </div>
            </div>
        </div>
        </>)
    }
    
export default Login