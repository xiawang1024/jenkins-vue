<template>
  <div class="home">
    <HelloWorld msg="Welcome to Your Vue.js App" />
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";

import request from "@/api";

export default {
  name: "home",
  components: {
    HelloWorld
  },
  mounted() {
    request.get("/user/userInfo");
    request.post("/user/edit", { name: "test", age: 28 });
  }
};
</script>
