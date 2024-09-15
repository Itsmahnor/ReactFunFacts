import { useState } from "react"

export default function Facts(props){


  return(
    <>
    <div style={{background:props.isTrue?"gray":"white",color:props.isTrue?"white":"black"}} className="Facts">
    <div className="facts" >
    <h1>Fun Facts About React</h1>
    <ul>
    <li>React is composable</li>
    <li>React is Declarative</li>
    <li>React is designed by Facebook</li>
    <li>based on single page Application</li>
    </ul>
    </div></div>
    </>
  )
}