<template>
  <div>
    <input type="text" v-model="message" />
    <p>{{message}}</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      message: "Hello Vue from Webpack (with SFCs)"
    };
  },
  created() {
    console.log("Initialized hello SFC");
  }
};
</script>