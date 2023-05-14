<template>
  <div class="table-wrap">
    <img alt="Vue logo" src="../assets/logo.png" />
    <HelloWorld msg="Welcome to Your Vue.js App" />
  </div>
</template>
<script>
const HelloWorld = () => import("@/components/HelloWorld.vue");
export default {
  name: "HomeCom",
  props: {},
  components: {
    HelloWorld,
  },
  data() {
    return {};
  },
  computed: {},
  watch: {},
  created() {},
  methods: {},
};
</script>

<style lang="scss" scoped></style>