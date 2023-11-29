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
		path: '/Sale',
		component: () => import('@/views/Sale'),
	},
	{
		path: '/Mail',
		component: () => import('@/views/Mail'),
	},
];

// 라우터 추출 (main.js에서 import)
export const router = createRouter({
	history: createWebHistory(),
	routes,
});
