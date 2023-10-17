<template>
	<Carousel :itemsToShow="1" :wrapAround="true" :autoplay="2000">
		<Slide v-for="slide in slides" :key="slide">
			<div class="carousel__item">
				<img class="slideImg" :src="slide" />
			</div>
		</Slide>
		<template #addons>
			<navigation />
			<Pagination />
		</template>
		...
	</Carousel>

	<div class="container">
		<div
			class="row row-cols-1 row-cols-sm-2 row-cols-md-2 g-2 justify-content-center align-items-center"
		>
			<card v-for="i in 6" :key="i" />
		</div>
	</div>
</template>

<script>
import { defineComponent } from 'vue';
import { Carousel, Pagination, Slide, Navigation } from 'vue3-carousel';

import Card from '@/components/common/Card.vue';
import 'vue3-carousel/dist/carousel.css';

import slider1 from '../assets/images/slider1.gif';
import slider2 from '../assets/images/slider2.gif';
import slider3 from '../assets/images/slider3.gif';

export default defineComponent({
	name: 'AutoPlay',
	components: {
		Carousel,
		Slide,
		Card,
		Pagination,
		Navigation,
	},

	data() {
		return {
			slides: [slider1, slider2, slider3],
		};
	},
});
</script>

<style>
section.carousel {
	width: 800px;
	justify-content: center;
	margin: 0 auto;
	margin-bottom: 60px;
}

.carousel__slide {
	padding: 20px;
}

.carousel__prev,
.carousel__next {
	color: black;
	height: 100%;
	margin: 0 0 0 0;
}
</style>
