
import React from 'react';
import AgentLayout from '../Components/Agent/Agent Layout/AgentLayout';
import AdminLayout from './../Components/Admin/Admin Layout/AdminLayout';
import { AdminRoutes } from './Admin Routes/AdminRoutes';
import { AgentRoutes } from './Agent Routes/AgentRoutes';
const LazyAdminPage=React.lazy(()=>import ('./../Components/Admin/Admin Layout/AdminLayout'))

export const ROLE_PAGE_MAP:any={
    "/admin":[{
        path:"/home",    
        Element:LazyAdminPage,
        children:AdminRoutes
    }],
    "/agent":[{
        path:"/home",
        Element:AgentLayout,
        children:AgentRoutes
    }]
}