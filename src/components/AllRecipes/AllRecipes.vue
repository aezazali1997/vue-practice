<template>
	<div>
		all recipes
		<input
			type="search"
			placeholder="search for recipes"
			:class="classes.search"
		/>
		<hr />
		<ul v-for="(recipe, key) in Recipes" :key="key">
			<li>
				{{ recipe }}
			</li>
		</ul>
	</div>
</template>
<script lang="ts" src="./AllRecipes.ts" />
