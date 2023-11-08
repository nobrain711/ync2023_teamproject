import { createRouter, createWebHistory } from 'vue-router';

// 라우터 생성
const routes = [
	{
		path: '/',
		component: () => import('@/views/PageHome'),
	},
	{
		path: '/main',
		component: () => import('@/views/PageHome'),
	},
	{
		path: '/News',
		component: () => import('@/views/News'),
	},
	{
		path: '/Forum',
		component: () => import('@/views/Forum'),
	},
	{
		path: '/About',
		component: () => import('@/views/About'),
	},
];

// 라우터 추출 (main.js에서 import)
export const router = createRouter({
	history: createWebHistory(),
	routes,
});
