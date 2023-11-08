<template>
	<div class="post">
		<div class="title">최신 게시글</div>
		<div class="articles">
			<ul>
				<li v-for="post in posts" :key="post.id">
					<router-link style="text-decoration: none" :to="'/post/' + post.id">{{
						post.title
					}}</router-link>
				</li>
			</ul>
		</div>
	</div>
	<div class="post2">
		<div class="title2">인기 게시글</div>
		<div class="articles2">
			<ul>
				<li v-for="post in posts" :key="post.id">
					<router-link style="text-decoration: none" :to="'/post/' + post.id">{{
						post.title
					}}</router-link>
				</li>
			</ul>
		</div>
	</div>
</template>

<script>
export default {
	data() {
		return {
			posts: [],
		};
	},
	created() {
		// 여기에서 실제 API 호출을 통해 게시글 데이터를 가져오는 코드를 작성해야 합니다.
		this.posts = [
			{ id: 1, title: '첫 번째 게시물' },
			{ id: 2, title: '두 번째 게시물' },
			{ id: 3, title: '세 번째 게시물' },
			{ id: 4, title: '네 번째 게시물' },
			{ id: 5, title: '다섯 번째 게시물' },
		];
	},
};
</script>

<style scoped>
/* 스타일을 컴포넌트 내에서 정의할 때 'scoped' 속성을 사용하면 해당 컴포넌트에서만 스타일이 적용됩니다. */

ul {
	list-style: none;
	padding: 0;
}

li {
	font-size: 12px;
	margin: 10px 0;
	padding: 10px;
	border-bottom: 1px solid #ddd;
}

.post {
	text-decoration: none; /* 링크 밑줄 제거 */
	color: #333; /* 링크 텍스트 색상 설정 */
	width: 600px;
	border: 1px solid #ddd;
	border-radius: 15px;
	background-color: white;
	margin-bottom: 3%;
}
.post2 {
	text-decoration: none; /* 링크 밑줄 제거 */
	color: #333; /* 링크 텍스트 색상 설정 */
	width: 600px;
	border: 1px solid #ddd;
	border-radius: 15px;
	background-color: white;
}
.articles {
	text-align: left;
}
.articles2 {
	text-align: left;
}
.title {
	border: 1px solid #ddd;
	width: 100px;
	height: 30px;
	font-size: 13px;
	color: #333;
	display: flex;
	justify-content: center;
	align-items: center;
}
.title2 {
	border: 1px solid #ddd;
	width: 100px;
	height: 30px;
	font-size: 13px;
	color: #333;
	display: flex;
	justify-content: center;
	align-items: center;
}
</style>
