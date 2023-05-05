import React  from "react"
import "./Listitem.css"

let Listitem=(props)=>{
    let {items,deleteItem} =props
    let length=items.length
    let Listitem= length ? (
        items.map(item=>{
        return(
        <div key={item.id}>
            <span className="name">{item.name}</span>
            <span className="age">{item.age}</span>
            <span className="action icon" onClick={()=>deleteItem(item.id)}>&times;</span>
        </div>
        )
    })):(
        <p> There is No Item to show</p>
    )
    return(
        <div className="ListItem">
            <div>
                <span className="name title">Name</span>
                <span className="age title">Age</span>
                <span className="action title">Action</span>
            </div>
            {Listitem}
        </div>
    )
}
export default Listitem;