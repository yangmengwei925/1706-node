import React     from 'react'
import Home      from '@/views/home'
import Login     from '@/views/login'
import List      from '@/views/group/list'
import Add       from '@/views/group/add'
import Edit      from '@/views/group/edit'
import Look      from '@/views/group/look'
import GradeList from '@/views/grade/list'
import GradeAdd  from '@/views/grade/add'
import RoleList  from '@/views/role/role'
import RoleAdd   from '@/views/role/add'
import Work      from '@/views/work'
export default [
    {
        path:'/home',
        component:Home,
        children:[
            {
                path:'/home/list',
                component:List,
            },
            {
                path:'/home/edit',
                component:Edit,
            }, 
            {
                path:'/home/look',
                component:Look,
            },
            {
                path:'/home/add',
                component:Add,
            },
            {
                path:'/home/work',
                component:Work,
            },
            {
                path:'/home/gradeList',
                component:GradeList,
            },
            {
                path:'/home/gradeAdd',
                component:GradeAdd,
            },{
                path:'/home/roleList',
                component:RoleList,
            },{
                path:'/home/RoleAdd',
                component:RoleAdd
            },
            {
                from:'/home',
                to:'/home/work',
            }
        ]
    },
    {
        path:'/login',
        component:Login
    },
    {
        from:'/',
        to:'/login'
    }
]

