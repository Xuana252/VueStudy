import {
  createWebHistory,
  createRouter,
  createMemoryHistory,
} from "vue-router";

import Home from "../views/Home.vue";
import SignUp from "../views/SignUp.vue";
import SignIn from "../views/SignIn.vue";
import AddRestaurant from "../views/AddRestaurant.vue";
import Restaurant from "../views/Restaurant.vue";
import UpdateRestaurant from "../views/UpdateRestaurant.vue";

const routes = [
  { path: "/", component: Home },
  { path: "/auth/signup", component: SignUp },
  { path: "/auth/signin", component: SignIn },
  { path: "/add-restaurant", component: AddRestaurant },
   { path: "/restaurant/:id", component: Restaurant },
   { path: "/update-restaurant/:id", component: UpdateRestaurant },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

router.beforeEach((to, from, next) => {
  const isAuthenticated = localStorage.getItem("user");
  if (to.path.startsWith("/auth")) {
    next();
  } else if (!isAuthenticated) {
    next("/auth/signin"); // redirect to login if not authenticated
  } else {
    next(); // allow access
  }
});

export default router;
