import { defineComponent } from "vue";
import styles from "./App.style";
import Home from "@/views/Home.vue";
export default defineComponent({
  name: "App",
  props: {},
  components: { Home },
  setup() {
    const classes = styles();
    return {
      classes,
    };
  },
});
