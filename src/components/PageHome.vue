<template>
	<div class="image_slider" slideWidth="100%">
		<carousel :items-to-show="1" :wrapAround="true" :autoplay="5000">
			<slide v-for="slide in items[0].menus" :key="slide">
				<div class="carousel__item">
					<figure>
						<img :src="slide.image" :alt="slide.alt" />
						<figcaption>
							<em>{{ slide.caption }}</em
							><span>{{ slide.description }}</span>
						</figcaption>
					</figure>
				</div>
			</slide>

			<template #addons>
				<navigation />
				<pagination />
			</template>
		</carousel>
	</div>
</template>
<script>
import 'vue3-carousel/dist/carousel.css';
import { Carousel, Slide, Pagination, Navigation } from 'vue3-carousel';

export default {
	components: {
		Carousel,
		Slide,
		Pagination,
		Navigation,
	},
	data() {
		[
			{
				title: 'Carousel Slider',
				description: 'Carousel를 이용한 이미지 슬라이드 효과',
				menus: [
					{
						image: require('../assets/images/slider1.jpg'),
						alt: 'image1',
						caption: 'Responsive Site',
						description: '이미지 슬라이드 1',
					},
					{
						image: require('../assets/images/slider2.jpg'),
						alt: 'image1',
						caption: 'Responsive Site',
						description: '이미지 슬라이드 2',
					},
					{
						image: require('../assets/images/slider3.jpg'),
						alt: 'image1',
						caption: 'Responsive Site',
						description: '이미지 슬라이드 3',
					},
				],
			},
		];
	},
};
</script>
