import { defineComponent } from "vue";
import styles from "./AddRecipe.style";
import CreateRecipe from "@/components/CreateRecipe/CreateRecipe.vue";
export default defineComponent({
	name: "AddRecipe",
	props: {},
	components: { CreateRecipe },
	setup() {
		const classes = styles();
		return {
			classes,
		};
	},
});
