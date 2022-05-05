import homeRoute from "./homeRoute.js";
import todoRoute from "./todoRoute.js";
import{
    createWebHistory,
    createRouter
}from "vue-router";
const routes=[
    ...homeRoute,...todoRoute
]
const router=createRouter({
    history:createWebHistory(),
    routes,
});
export default router; //router로 export 하면 main.js에서 router라는 변수로 받아서 사용!