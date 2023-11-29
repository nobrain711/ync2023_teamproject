<template>
	<div class="wrap">
		<div class="left-menu asmargin">
			<div class="wideLeft">
				<GameRank />
			</div>
		</div>
		<div>
			<Slider />
		</div>
		<div class="commu-list-wrap">
			<div class="list-top">
				<BoardList />
			</div>
		</div>
	</div>
</template>

<script>
import { defineComponent } from 'vue';

import GameRank from '@/components/GameRank.vue';
import Slider from '@/components/Slider.vue';
import BoardList from '@/components/BoardList.vue';

export default defineComponent({
	name: 'AutoPlay',
	components: {
		GameRank,
		Slider,
		BoardList,
	},
});
</script>

<style lang="scss">
.wrap {
	justify-content: center;
	float: none;
}
.left-menu {
	float: left; /* 왼쪽으로 정렬 */
	margin-left: 10%;
}
.wideLeft {
	width: 200px; /* 원하는 너비로 조정 */
	height: 300px;
	margin-right: 20px; /* 오른쪽 여백 추가 */

	background-color: #f2f2f2; /* 배경색 지정 (원하는 색상으로 변경) */
	padding: 10px; /* 내부 여백 설정 */
	border: 1px solid #ccc; /* 테두리 설정 */
	border-radius: 15px;
}

.title {
	font-size: 18px; /* 제목 글꼴 크기 설정 */
}

.ranklist {
	list-style: none; /* 목록 마커 제거 */
	padding: 0; /* 내부 여백 제거 */
}

.rank {
	margin-left: 10px;
	display: flex; /* Flexbox 사용 */
	align-items: center;
	padding: 10px 0; /* 각 순위 아이템의 위아래 여백 조정 */
	border-bottom: 1px solid #ddd; /* 각 순위 아이템 사이에 구분선 추가 */
}

.ranknum {
	font-weight: bold; /* 순위 번호 텍스트 굵게 설정 */
	margin-right: 10px;
}

.ranksubject a {
	text-decoration: none; /* 링크 밑줄 제거 */
	color: #333; /* 링크 텍스트 색상 설정 */
}
.commu-list-wrap {
	float: right;
	/* Flexbox 사용 */
	justify-content: center;
	flex-direction: column;
	align-items: center;
	width: 70%;
}
</style>
