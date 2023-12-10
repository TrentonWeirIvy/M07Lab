import { createApp } from 'vue';
import App from './App.vue';
import { createVuetify } from 'vuetify';
import * as components from 'vuetify/components';
import * as directives from 'vuetify/directives';
import store from './store'; // Import your Vuex store
import { createRouter, createWebHistory } from 'vue-router'; // Import necessary router functions

import Messages from './components/Messages';
import NewMessage from './components/NewMessage';
import MessageItem from './components/Message';
import RegisterUser from './components/RegisterUser';

'use strict';

const routes = [
  {
    path: '/',
    component: Messages,
  },
  {
    path: '/newMessage',
    component: NewMessage,
  },
  {
    path: '/messageItem/:id',
    component: MessageItem,
  },
  {
    path: '/Register',
    component: RegisterUser,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

const vuetify = createVuetify({
  components,
  directives,
});

createApp(App).use(store).use(vuetify).use(router).mount('#app');
