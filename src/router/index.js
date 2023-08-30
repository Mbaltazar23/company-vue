import {createRouter, createWebHistory} from 'vue-router'
import {useAuthStore} from "../stores/auth"
import HomeView from '../views/HomeView.vue'

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'home',
            component: HomeView
        },
        {
            path: '/login',
            name: 'login',
            // route level code-splitting
            // this generates a separate chunk (About.[hash].js) for this route
            // which is lazy-loaded when the route is visited.
            component: () => import ('../views/Login.vue')
        },
        {
            path: '/register',
            name: 'register',
            // route level code-splitting
            // this generates a separate chunk (About.[hash].js) for this route
            // which is lazy-loaded when the route is visited.
            component: () => import ('../views/Register.vue')
        },
        {
            path: '/departments',
            name: 'departments',
            // route level code-splitting
            // this generates a separate chunk (About.[hash].js) for this route
            // which is lazy-loaded when the route is visited.
            component: () => import ('../views/Departments/Index.vue')
        }, {
            path: '/edit/:id',
            name: 'edit',
            // route level code-splitting
            // this generates a separate chunk (About.[hash].js) for this route
            // which is lazy-loaded when the route is visited.
            component: () => import ('../views/Departments/Edit.vue')
        }, {
            path: '/create',
            name: 'create',
            // route level code-splitting
            // this generates a separate chunk (About.[hash].js) for this route
            // which is lazy-loaded when the route is visited.
            component: () => import ('../views/Departments/Create.vue')
        }, {
            path: '/employess',
            name: 'employess',
            // route level code-splitting
            // this generates a separate chunk (About.[hash].js) for this route
            // which is lazy-loaded when the route is visited.
            component: () => import ('../views/Employees/Index.vue')
        }, {
            path: '/graphic',
            name: 'graphic',
            // route level code-splitting
            // this generates a separate chunk (About.[hash].js) for this route
            // which is lazy-loaded when the route is visited.
            component: () => import ('../views/Employees/Graphic.vue')
        }, {
            path: '/reports',
            name: 'reports',
            // route level code-splitting
            // this generates a separate chunk (About.[hash].js) for this route
            // which is lazy-loaded when the route is visited.
            component: () => import ('../views/Employees/Reports.vue')
        }
    ]
})

router.beforeEach(async (to) => {
    const publicPages = ['/login', '/register']
    const authRequired = ! publicPages.includes(to.path)
    const auth = useAuthStore()
    if (authRequired && ! auth.user) {
        auth.returnUrl = to.fullPath
        return '/login'
    }
})

export default router
