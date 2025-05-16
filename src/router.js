import { createRouter, createWebHistory } from 'vue-router'
import HomePage from './components/pages/HomePage.vue'
import ContactoPage from './components/pages/ContactoPage.vue'
import RutasPage from './components/pages/RutasPage.vue'
import LogIn from './components/pages/LogIn.vue'
import HomePageApp from './components/pages/HomeApp.vue'
import DetalleRuta from './components/pages/DetalleRuta.vue'

const routes = [
  {
    path: '/',
    component: HomePage
  },
  {
    path: '/Contacto',
    component: ContactoPage
  },
  {
    path: '/Rutas',
    component: RutasPage
  },
  {
    path: '/app',
    component: LogIn,
  },
  {
    path: '/HomeApp',
    component: HomePageApp,
  },
  {
    path: '/detalle',
    component: DetalleRuta
},
  {
    path: '/detalle/:id',
    component: DetalleRuta
}
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;