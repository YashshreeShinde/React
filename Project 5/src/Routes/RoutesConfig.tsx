
import React from 'react';
import { AdminRoutes } from './Admin Routes/AdminRoutes';
import { AgentRoutes } from './Agent Routes/AgentRoutes';
const LazyAdminPage=React.lazy(()=>import ('./../Components/Admin/Admin Layout/AdminLayout'))
const LazyAgentPage=React.lazy(()=>import('./../Components/Agent/Agent Layout/AgentLayout'))

export const ROLE_PAGE_MAP:any={
    "/admin":[{
        path:"/home",
        Element:LazyAdminPage,
        children:AdminRoutes
    }],
    "/agent":[{
        path:"/home",
        Element:LazyAgentPage,
        children:AgentRoutes
    }]
}