<template>
	<Carousel :itemsToShow="1" :wrapAround="true" :autoplay="5000">
		<Slide v-for="slide in slides" :key="slide">
			<div class="carousel__item">
				<img class="slideImg" :src="slide" />
			</div>
		</Slide>
		<template #addons>
			<navigation />
			<Pagination />
		</template>
	</Carousel>
</template>

<script>
import { Carousel, Pagination, Slide, Navigation } from 'vue3-carousel';

import 'vue3-carousel/dist/carousel.css';

import slider1 from '../assets/images/slider1.gif';
import slider2 from '../assets/images/slider2.gif';
import slider3 from '../assets/images/slider3.gif';

export default {
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
};
</script>

<style lang="scss">
section.carousel {
	width: 600px;
	margin: 0 auto;
	margin-bottom: 60px;
	margin-top: 60px;
	background-color: gray;
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
