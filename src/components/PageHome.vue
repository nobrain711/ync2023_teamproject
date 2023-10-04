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
</template>

<script>
import { defineComponent } from 'vue';
import { Carousel, Pagination, Slide, Navigation } from 'vue3-carousel';

import 'vue3-carousel/dist/carousel.css';

import slider1 from '../assets/images/slider1.jpg';
import slider2 from '../assets/images/slider2.jpg';
import slider3 from '../assets/images/slider3.jpg';

export default defineComponent({
	name: 'AutoPlay',
	components: {
		Carousel,
		Slide,
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
}

.carousel__slide {
	padding: 20px;
}

.carousel__prev,
.carousel__next {
	color: white;
	height: 100%;
	margin: 0 0 0 0;
}
</style>
