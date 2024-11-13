import { createRouter, createWebHistory } from 'vue-router';
import Home from '../components/Home/index.vue'
import About from '../components/About/index.vue';
import Weather from '../components/Weather/index.vue';

const routes = [
  { path: '/', name: 'Home', component: Home },
  { path: '/about', name: 'About', component: About },
  { path: '/weather', name: 'Weather', component: Weather },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
