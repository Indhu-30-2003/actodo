
import Todoitem from "./todoitem"

function Todoform(props) {
    const activityArr=props.activityarr
    const setactivity=props.setactivity
   
    return (<div className="bg-[#BDB4EA] border rounded-md p-2 flex-grow">
        <h1 className="text-2xl font-medium">Today's activities</h1>
        {
             activityArr.length===0?"You haven't added anything yet":""
        }
        {
            activityArr.map(function(item,index){
                return(<Todoitem  id={item.id} item={item.activity} index={index} activityarr={activityArr} setactivity={setactivity}/>)
            })
        }
    </div>)
}
export default Todoform