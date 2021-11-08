import { defineComponent } from "vue";
import styles from "./SingleRecipe.style";
export default defineComponent({
	name: "SingleRecipe",
	props: {},
	components: {},
	setup() {
		const classes = styles();
		return {
			classes,
		};
	},
});
