import Vue from 'vue'
import VueRouter from 'vue-router'
//import Home from '../views/Home.vue'
import oCookingRecipeList from '../components/OCookingRecipeList.vue'
import OCookingCreateRecipe from '../views/CreateRecipe.vue'
import oCookingRecipe from '../views/Recipe.vue'
import UserHome from '../views/UserHome'
import Login from '../views/Login.vue'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: 
    oCookingRecipeList
  },
  {
    path: '/login',
    name: 'Connect',
    component: Login
  },
  {
    path: '/recipe/:id',
    name: 'Recipe',
    component: oCookingRecipe
  },
  {
    path: '/recipe-create',
    name: 'create-recipe',
    component: OCookingCreateRecipe
  },
  {
    path: '/user-home',
    name: 'user-home',
    component: UserHome
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
