function Todoitem(props) {
    const actvityarr=props.activityarr
    const setactivity=props.setactivity

    const handledelete=(deleteid)=>{
          const temparr=actvityarr.filter(function(items){
             
              if(items.id===deleteid){
                return false
              }
              else{
                return true
              }
          })
          setactivity(temparr)
          
    }

    
    return (<>
        <div className="flex justify-between">
            <p>{props.index + 1}.{props.item}</p>
            <button className="text-red-600" onClick={()=>handledelete(props.id)}>Delete</button>
        </div>
    </>)
}
export default Todoitem