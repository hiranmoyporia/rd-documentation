import React from "react";
import { Navbar } from "../components/navbar/Navbar";
import { Sidebar } from "../components/sidebar/sidebar";

export const HomePage=()=>{
    return(
        <React.Fragment>
            <Navbar/>
            <Sidebar/>
        </React.Fragment>
    )
}