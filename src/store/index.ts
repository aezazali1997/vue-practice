import { createStore, Store } from "vuex";
import { State } from "@/interface/State.interface";
import { InjectionKey } from "vue";
export const key: InjectionKey<Store<State>> = Symbol();
export const store = createStore<State>({
  state: {
    form: {
      firstName: "",
      lastName: "",
      email: "",
      phone: 0,
    },
  },
  mutations: {
    SAVE_INFO(state: State, form: any) {
      state.form = form;
    },
  },
  actions: {
    save({ commit }, form: any) {
      commit("SAVE_INFO", form);
    },
  },
  modules: {},
});
