import { createStore, Store } from "vuex";
import { InjectionKey } from "vue";
import { State } from "@/interface/State.interface";
import { Form } from "@/interface/CreateRecipe.interface";
import Recipe from "@/views/Recipe/Recipe";
export const key: InjectionKey<Store<Form>> = Symbol();
export const store = createStore<State>({
	state: {
		recipes: [],
	},
	mutations: {
		SAVE_INFO(state: State, recipe: Form) {
			state.recipes.push(recipe);
		},
	},
	actions: {
		save({ commit }, ricepe: Form) {
			commit("SAVE_INFO", ricepe);
		},
	},
});
