import React from "react";
import Logo from '../../src/assets/logo/React-Designify.png'
export const Navbar=()=>{
    return(
        <React.Fragment>
            <div className="h-16 w-full flex items-center p-4" style={{backgroundColor:"white"}}>
                <div className="flex items-center h-12 gap-2" style={{width:'30%'}}>
                <img src={Logo} className="h-12 w-18 " alt="logo"/>
                <span className="text-md font-bold">React Designify</span>
                </div>
                <div className=" flex justify-center items-center" style={{width:'70%'}}>
                    <div className="w-full flex justify-center">
                    <ul className="flex w-full justify-center gap-10 cursor-pointer items-center list-none">
                        <li style={{width:'120px'}} className="hover:bg-red-900">Projects</li>
                        <li style={{width:'120px'}} className="hover:bg-red-900">Blog</li>
                        <li style={{width:'120px'}} className="hover:bg-red-900">Git</li>
                    </ul>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}