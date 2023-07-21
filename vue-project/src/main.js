import 'bootstrap/dist/css/bootstrap.min.css';
import { createApp } from 'vue';
import ForumComponent from './forum.vue';
import AppComponent from './App.vue';
import ProfilComponent from './Profil.vue';
import { createRouter, createWebHistory } from 'vue-router';

const routes = [
  { path: '/', component: ProfilComponent },
  { path: '/forum', component: ForumComponent},
];

const router = createRouter({
 history: createWebHistory(),
 routes,
});
createApp(AppComponent).use(router).mount('#app');