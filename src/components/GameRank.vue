<template>
	<div class="gameRanking floatGroup">
		<div class="wrap">
			<div class="title">
				<h2 class="w202H w202H-Schedule title">게임 랭킹</h2>
			</div>
			<div class="w202M">
				<div class="rankingwrap">
					<ul class="ranklist">
						<li
							v-for="(game, index) in games"
							:key="index"
							class="rank"
							:style="{ height: 'inherit' }"
						>
							<span class="ranknum">{{ index + 1 }}</span>
							<span class="ranksubject">
								<a :href="game.link" target="_blank">{{ game.name }}</a>
							</span>
						</li>
					</ul>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	data() {
		return {
			games: [
				{
					name: '리그오브레전드',
					link: 'https://www.leagueoflegends.com/ko-kr/',
				},
				{ name: 'FC 온라인', link: 'https://fconline.nexon.com/main/index' },
				{
					name: '메이플 스토리',
					link: 'https://maplestory.nexon.com/Home/Main',
				},
				{
					name: '발로란트',
					link: 'https://playvalorant.com/ko-kr/',
				},
				{
					name: '로스트아크',
					link: 'https://lostark.game.onstove.com/Main',
				},

				// Add more games as needed
			],
		};
	},
};
</script>

<style lang="scss">
.title {
	margin-top: 10px;
}
.ranknum {
	color: blue;
}
</style>
