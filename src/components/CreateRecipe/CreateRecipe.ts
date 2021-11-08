import { defineComponent, ref } from "vue";
import styles from "./CreateRecipe.style";
import { useStore } from "vuex";
import { key } from "@/store/index";
import { Form } from "@/interface/CreateRecipe.interface";
export default defineComponent({
	name: "CreateRecipe",
	props: {},
	components: {},
	setup() {
		const store = useStore(key);
		const form = ref<Form>({
			category: "",
			description: "",
			ingredients: "",
			name: "",
		});
		const formSubmitted = () => {
			store.dispatch("save", form);
		};
		const classes = styles();
		return {
			classes,
			form,
			formSubmitted,
		};
	},
});
