import { defineComponent } from "vue";
import styles from "./Recipe.style";
import { useRoute } from "vue-router";
import SingleRecipe from "@/components/SingleRecipe/SingleRecipe.vue";
export default defineComponent({
	name: "Recipe",
	props: {},
	components: { SingleRecipe },
	setup() {
		const {
			params: { id },
		} = useRoute();
		console.log(id);
		const classes = styles();
		return {
			classes,
		};
	},
});
