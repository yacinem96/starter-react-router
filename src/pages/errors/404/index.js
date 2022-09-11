import React from 'react'
import {useNavigate} from "react-router-dom"
export const NotFoundPage = () => {
    const navigate=useNavigate();
  return (
    <div className="text-center">
        <h1>NotFoundPage</h1>
        <p>lorem .dzddzedzefhbdhjzefzefgzeufeziufgzeiufgezifugzeiufgezifzeufgzefu</p>
        <button onClick={()=>navigate("/")} >Go to home page</button>
    </div>
  )
}
