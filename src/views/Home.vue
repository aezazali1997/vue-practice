<template>
  <div>
    <Form />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Form from "@/components/Form/Form.vue";

export default defineComponent({
  name: "Home",
  components: { Form },
});
</script>
