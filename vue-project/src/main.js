import './assets/main.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { createApp } from 'vue';
import App from './App.vue';
import { createRouter, createWebHashHistory } from 'vue-router'; 

const AppComponent = { template: '<div>App</div>' } 
const ForumComponent = { template: '<div>Forum</div>' } 
const routes = [
  { path: '/', component: AppComponent }, 
  { path: '/forum', component: ForumComponent}, 
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});
createApp(App).use(router).mount('#app');