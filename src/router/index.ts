import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import Home from "../views/Home.vue";
const Recipe = () => import("@/views/Recipe/Recipe.vue");
const Recipes = () => import("@/views/Recipes/Recipes.vue");
const AddRecipe = () => import("@/views/AddRecipe/AddRecipe.vue");
const routes: Array<RouteRecordRaw> = [
	{
		path: "/",
		name: "Recipes",
		component: Recipes,
	},
	{
		path: "/:id",
		name: "Recipe",
		component: Recipe,
	},
	{
		path: "/add",
		name: "AddRecipe",
		component: AddRecipe,
	},
];

const router = createRouter({
	history: createWebHistory(process.env.BASE_URL),
	routes,
});

export default router;
