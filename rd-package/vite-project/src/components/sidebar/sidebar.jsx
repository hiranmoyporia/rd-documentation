import React from "react";
import {List} from 'react-designify/components/list'
export const Sidebar=()=>{
    const data=["Button","Alert","Avatar","Badge","Card","Carousel","Drawer","List","Form","Flex","Portal"]
    return(
        <React.Fragment>
            <List data={data} container={"h-full"} style={{height:"100vh"}} activeColor="#00337C"/>
        </React.Fragment>
    )
}