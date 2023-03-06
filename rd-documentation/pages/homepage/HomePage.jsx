import React from 'react'
import { Navbar } from '../../components/navbar/Navbar'
import { Sidebar } from '../../components/sidebar/Sidebar'

export const HomePage=()=>{
    return(
        <React.Fragment>
            <div className='h-full w-full'  style={{backgroundColor:"lightgray"}}>
                <Navbar/>
                <Sidebar/>
            </div>
        </React.Fragment>
    )
}