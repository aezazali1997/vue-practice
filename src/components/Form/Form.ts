import { defineComponent, ref } from "vue";
import { key } from "@/store/index";
import styles from "./Form.style";
import { useStore } from "vuex";
import { UserInfo } from "@/interface/State.interface";
export default defineComponent({
  name: "CustomForm",
  props: {},
  components: {},
  setup() {
    const store = useStore(key);
    const data = ref<UserInfo>({
      email: "",
      firstName: "",
      lastName: "",
      phone: 0,
    });
    const classes = styles();
    const formSubmitted = () => {
      store.dispatch("save", data);
    };
    return {
      classes,
      formSubmitted,
      data,
      // store,
    };
  },
});
