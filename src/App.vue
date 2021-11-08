<template>
	<div>
		<router-link to="/add">Add Recipe</router-link> |
		<router-link to="/">All Recipes</router-link>
	</div>
	<div class="main">
		<router-view />
	</div>
</template>
<style scoped>
.main {
	width: max-content;
	margin: auto;
	padding: 1rem 2rem;
	border-radius: 40px;
	border: 1px solid gray;
	display: flex;
	justify-content: center;
	align-items: center;
}
</style>
