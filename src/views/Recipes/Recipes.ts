import { defineComponent } from "vue";
import styles from "./Recipes.style";
import AllRecipes from "@/components/AllRecipes/AllRecipes.vue";
export default defineComponent({
	name: "Recipees",
	props: {},
	components: { AllRecipes },
	setup() {
		const classes = styles();
		return {
			classes,
		};
	},
});
