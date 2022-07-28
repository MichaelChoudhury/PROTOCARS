import React from 'react'
import {useState, useEffect} from 'react'
// const [query, setQuery] = useState("");

function DefaultLayout({setQuery, children}) {
  // const [query, setQuery] = useState("");
  return (
    <div>
        <div className="header bs1">
            <div className="d-flex justify-content-between">
                
                <h1 className="proto">ProtoCars</h1>

                <div className="search">
                <label>Search... </label>
                {/* <input type="text" onChange={(e) => setQuery(e.target.value)} /> */}
                {/* <input type="text" onChange = {(e)=> props.ChangeQuery(e.target.value)}/> */}
                <input type="text" onChange = {(e)=> setQuery(e.target.value)}/>

                {/* {console.log(e.target.value)} */}
                
            </div>             
        
            </div>

        </div>
        <div className="content">
                 {children}
            </div>
        </div>
  )
}

export default DefaultLayout