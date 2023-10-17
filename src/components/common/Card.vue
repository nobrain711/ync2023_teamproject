<template>
	<div class="col">
		<div class="card shadow-sm">
			<svg
				class="bd-placeholder-img card-img-top"
				width="100%"
				height="225"
				xmlns="http://www.w3.org/2000/svg"
				role="img"
				aria-label="Placeholder: Thumbnail"
				preserveAspectRatio="xMidYMid slice"
				focusable="false"
			>
				<title>Placeholder</title>
				<rect width="100%" height="100%" fill="#55595c"></rect>
				<text x="50%" y="50%" fill="#eceeef" dy=".3em">Thumbnail</text>
			</svg>

			<div class="card-body">
				<p class="card-text">
					This is a wider card with supporting text below as a natural lead-in
					to additional content. This content is a little bit longer.
				</p>
				<div class="d-flex justify-content-between align-items-center">
					<div class="img-group">
						<a href="https://store.steampowered.com/">
							<img src="@/assets/images/steam.png" />
						</a>
					</div>
					<small class="text-muted">9 mins</small>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name: 'Card',
};
</script>

<style scoped>
.col {
	width: 360px;
}
.card {
	width: 240px;
	margin: 0 auto;
	margin-bottom: 50px;
}
</style>
