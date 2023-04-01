import React from 'react'
import { Outlet } from 'react-router-dom'
import SideBar from "../Sidebar";

const Layout = () => {
    return (
        <>
            <SideBar/>
            <Outlet/>
        </>
    );
};

export default Layout;