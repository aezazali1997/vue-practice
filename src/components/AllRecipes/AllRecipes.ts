import { defineComponent, ref, computed } from "vue";
import styles from "./AllRecipes.style";
import { useStore, mapState } from "vuex";
import { key } from "@/store/index";
import { Form } from "@/interface/CreateRecipe.interface";
import { State } from "@/interface/State.interface";

export default defineComponent({
	name: "AllRecipes",
	props: {},
	components: {},
	setup() {
		const store = useStore<State>(key);
		const Recipes = computed(() => store.state.recipes);
		const classes = styles();
		return {
			classes,
			Recipes,
		};
	},
});
