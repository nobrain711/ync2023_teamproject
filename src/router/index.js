import { createRouter, createWebHistory } from 'vue-router';

import PageHome from '@/views/PageHome.vue';
import PageGame from '@/views/PageGame.vue';

const routers = [
	{ Path: '/', component: PageHome },
	{ Path: '/game', component: PageGame },
];

const router = createRouter({
	history: createWebHistory(),
	routers,
});

export default router;
