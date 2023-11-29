<template>
	<header>
		<nav class="navbar navbar-expand-lg">
			<div class="container">
				<router-link :to="'/'">
					<img
						class="navbar-brand-item light-mode-item"
						src="../assets/images/logo.svg"
						alt="logo"
					/>
				</router-link>
				<div class="parents">
					<span>
						<!-- Nav item 1 News -->
						<router-link :to="'News'">News</router-link>
					</span>
					<!-- Nav item 2 Game -->
					<span>
						<router-link :to="'Games'">Games</router-link>
					</span>
					<!-- Nav item 3 Forum -->
					<span>
						<router-link :to="'Forum'">Forum</router-link>
					</span>
					<!-- Nav item 4 Us-->
					<span>
						<router-link :to="'About'">About</router-link>
					</span>
				</div>
				<div class="nav flex-nowrap align-items-center">
					<!-- Nav Button -->
					<template v-if="!isLoggedIn">
						<a href="signin.html" class="btn">Login / Join</a>
					</template>
					<template v-else>
						<img
							src="../assets/images/usericon.png"
							style="width: 50px; height: 50px"
							alt="사용자 아이콘"
							class="user-icon"
						/>
					</template>
					<!-- Nav Search -->
					<div class="nav-item dropdown dropdown-toggle-icon-none nav-search">
						<a
							class="nav-link dropdown-toggle"
							role="button"
							href="#"
							id="navSearch"
							data-bs-toggle="dropdown"
							aria-expanded="false"
						>
							<i class="bi bi-search fs-4"> </i>
						</a>
						<div
							class="dropdown-menu dropdown-menu-end shadow rounded p-0"
							aria-labelledby="navSearch"
						>
							<form class="input-group">
								<input
									class="form-control border-success"
									type="search"
									placeholder="Search"
									aria-label="Search"
								/>
								<button class="btn btn-success m-0" type="submit">
									Search
								</button>
							</form>
						</div>
					</div>
				</div>
			</div>
		</nav>
		<div class="border-bottom border-2 border-primary opacity-1"></div>
	</header>
</template>
<script>
export default {
	name: 'PageHeader',
	data() {
		return {
			isLoggedIn: false,
		};
	},
};
</script>

<style lang="scss" scoped>
.parent {
	width: 90%;
	margin: 10px auto;
}

a {
	text-decoration: none;
	color: rgb(0, 119, 255);
}
span {
	padding-right: 30px;
	margin-right: 0px;
	background: none;
}
</style>
