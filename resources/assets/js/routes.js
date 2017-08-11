import Login from './views/Login.vue'
import NotFound from './views/404.vue'
import Home from './views/Home.vue'
import Users from './views/Users.vue'

let routes = [
    {
        path: '/login',
        component: Login,
        name: '',
        hidden: true,
        meta: {auth: false},
    },
    {
        path: '/',
        component: Home,
        name: '主页',
        iconCls: 'fa fa-id-card-o',
        meta: {auth: true},
    },
    {
        path: '/',
        component: Home,
        name: '用户管理',
        iconCls: 'el-icon-message',
        meta: {auth: true},
        children: [
            { path: '/users', component: Users, name: '用户列表' },
        ]
    },
    {
        path: '/404',
        component: NotFound,
        name: '',
        hidden: true
    },
    {
        path: '*',
        hidden: true,
        redirect: { path: '/404' }
    }
];

export default routes;
