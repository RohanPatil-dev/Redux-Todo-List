import React, { useState } from "react"

import { useDispatch, useSelector } from "react-redux"

import { addItem, deleteItem } from "./Slice/TodoSlice"

export default function UI() {

    const [value, setValue] = useState("");

    const selector = useSelector(state => { return state })


    const dispatch = useDispatch()

    console.log(value)

    return (
        <>
            <div className="bg-dark text-light" style={{ height: "47rem" }}>

                <div style={{ marginLeft: "500px" }} >

                    <div className="form-group">
                        <label htmlFor="exampleInputPassword1">Add Something here</label>
                        <input type="text" value={value} onChange={(event) => { return setValue(event.target.value) }} className="form-control w-50" id="exampleInputPassword1" placeholder="Write something here........" />
                    </div>


                    <button className="btn btn-primary" onClick={()=>{dispatch(value === "" ? <></> : addItem({todo : value}))}}>Click me</button>
                </div >


                <div className="mt-5" style={{display: "grid", gridTemplateColumns: "auto auto auto", gap: "20px 20px", justifyContent: "space-around", marginLeft: "340px",fontSize : "20px"}}>
                  {selector.todo === null ? "Data is Empty !" : selector.todo.map((data,index)=>{
                     return(
                        <>
                            <p key={index}>{index + 1} - {data.todo}</p>

                            <button className="btn btn-danger" onClick={()=>{dispatch(deleteItem(index))}}>Delete</button> <br />
                        </>
                     )
                  })}
                 </div>
            </div>



         
        </>

    )
}


