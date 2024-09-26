import React from "react";
import Header from "../components/header";
import Card from "../components/card";
import Todocontainer from "../components/todocontainer";
import { useLocation } from "react-router-dom"
function Landing(){
    const location=useLocation()

   return(<>
   <div className="bg-black p-10">
    <div className="bg-[#EFEFEF] p-10  border rounded-md">
      <Header name={location.state.user} />
      <div className="flex justify-between gap-7 my-5 flex-wrap">
        <Card bgcolor={"#8272DA"} title={"23"} subtitle={"Chennai"}/>
        <Card bgcolor={"#FD6663"} title={"September 25"} subtitle={"12:05:35"}/>
        <Card bgcolor={"#FCA201"} title={"Built using"} subtitle={"React"}/>
        </div>
      <Todocontainer/>
    </div>
  </div>
  </>) 

}
export default Landing