<template>
  <button @click="incrementCounter">{{ text }} {{ counter }}</button>
</template>

<script>
export default {
  name: "ButtonSurvey",
  props: ["text"],
  data() {
    return {
      counter: 0,
      // text: "Chien"
    };
  },

  methods: {
    incrementCounter: function () {
      this.counter = this.counter + 1;
    },
  },
};
</script>