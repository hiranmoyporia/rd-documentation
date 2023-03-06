import React from "react";
import Logo from '../../src/assets/logo/React-Designify.png'
export const Navbar=()=>{
    return(
        <React.Fragment>
            <div className="h-16 w-full flex items-center p-4" style={{backgroundColor:"white"}}>
                <div className="flex items-center h-12 gap-2">
                <img src={Logo} className="h-12 w-18 " alt="logo"/>
                <span className="text-md font-bold">React Designify</span>
                </div>
            </div>
        </React.Fragment>
    )
}