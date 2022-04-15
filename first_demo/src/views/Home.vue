<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <div class="buttons">
      <ButtonSurvey text="Chat"/>
      <ButtonSurvey text="Chien"/>
      <ButtonSurvey text="Mouton"/>
      <!-- <HelloWorld msg="Coucou, j'aime les sardines" /> -->

    </div>
  </div>
</template>

<script>
// @ is an alias to /src
//import HelloWorld from '@/components/HelloWorld.vue'
import ButtonSurvey from "@/components/ButtonSurvey.vue";

export default {
  name: "Button",
  components: {
    ButtonSurvey,
    //HelloWorld,
  },
};
</script>
