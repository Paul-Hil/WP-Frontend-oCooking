<template>
    <IngredientSelect  />
<div class="recette-list">
       <h1>test :{{url}}</h1> 
      <article v-for="recette in recettes" :key="recette" class="card">
        <RecipeExcerpt :recipe="recette" />
        <!-- <div v-for="n in 6" :key="n"><RecipeExcerpt /></div> -->
        <!-- <RecipeExcerpt v-for="n in 6" :key="n" /> -->
      </article>
      <span class="error" v-if="errorMessage">{{errorMessage}}</span>
    </div>
</template>

<script>
import axios from "axios";
import RecipeExcerpt from '@/components/RecipeExcerpt.vue'
import IngredientSelect from '@/components/IngredientSelect.vue'

var url = "http://localhost/Trinity/SpeWordpress/oCooking/WP-trinity-Backend-oCooking-Paul-Hil/public/wp-json/wp/v2/recipe";

export default {
  name: "RecipeList",
  props: ["url"],
  components: {
    RecipeExcerpt,
    IngredientSelect
  },
  data() {
    return {
      recettes: {},
    };
  },
  methods: {
    test(ezz){
      console.log(ezz);
    }
  },
  created() {
    axios.get(
        url
      )
      .then((response) => {
        this.recettes = response.data;
      })
  },
};
</script>

<style scoped lang="scss">
.error {
  color: red;
}
</style>