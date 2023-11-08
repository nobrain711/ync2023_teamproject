import { createApp } from 'vue';
import App from './App.vue';
import { router } from './router/index.js';

// bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import 'bootstrap';

//axios
import axios from 'axios';

const app = createApp(App);

app.use(router).mount('#app');
app.config.globalProperties.axios = axios;
