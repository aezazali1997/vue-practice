<template>
	<div :class="classes.formContainer">
		<h2>Add recipe</h2>

		<form @submit.prevent @submit="formSubmitted" :class="classes.form">
			<div>
				<label for="recipe name">Recipe name</label>
				<input type="text" name="recipe" id="recipename" v-model="form.name" />
			</div>
			<div>
				<label for="recipe category">Recipe category</label>
				<input
					type="text"
					name="category"
					id="recipeCategory"
					v-model="form.category"
				/>
			</div>
			<div>
				<label for="recipe ingredients">Recipe ingredients</label>
				<input
					type="text"
					name="ingredients"
					id="recipeingredients"
					v-model="form.ingredients"
				/>
			</div>
			<div>
				<label for="recipe description">Recipe Description</label>
				<input
					type="text"
					name="description"
					id="recipedescription"
					v-model="form.description"
				/>
			</div>
			<input type="submit" />
		</form>
	</div>
</template>
<script lang="ts" src="./CreateRecipe.ts" />
