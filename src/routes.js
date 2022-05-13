import {createRouter, createWebHistory, createWebHashHistory} from "vue-router";

import HomePage from "@/components/pages/home"
import AboutPage from "@/components/pages/about"
import ResumePage from "@/components/pages/resume"
import NotFoundPage from "@/components/pages/notFound"
import Item from "@/components/pages/_itemAlias"

const routerHistory = createWebHistory();

const routers = createRouter({
  history: routerHistory ,
  routes: [
    {
      path: '/',
      name: "home",
      component: HomePage,
    },
    {
      path: '/about',
      name: "about",
      component: AboutPage,
    },
    {
      path: '/resume',
      name: "resume",
      component: ResumePage,
    },
    {
      path: '/:itemAlias',
      name: "itemAlias",
      component: Item,
    },
    {
      path: '/:CatchAll(.*)',
      name: "404",
      component: NotFoundPage,
    },
  ]
})

export default routers;
