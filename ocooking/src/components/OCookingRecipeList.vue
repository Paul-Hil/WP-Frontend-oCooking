<template>
  <section>
    <h1>Recettes</h1>

    <div>
      <OcookingFilter
        v-on:type-selected="handleRecipeTypeSelected"
        v-on:ingredient-selected="handleRecipeIngredientSelected"
      />

      <!-- <OCookingIngredientList 
            v-on:ingredient-selected='handleRecipeIngredientSelected'
            /> -->
    </div>

    <ul>
      <!--
            equivalent PHP
            foreach($recipes as $key => $item)
            //-->

      <li v-for="recipe in recipes" :key="recipe.id">
        <!--
                    équivalent en php à
                    $recipeCard = new RecipeCard($recipe)
                //-->
        <RecipeCard :recipe="recipe" />
      </li>
    </ul>
  </section>
</template>

<script>
import RecipeCard from "./OCookingRecipe.vue";
import recipeService from "../services/recipeService.js";
import OcookingFilter from "./OCookingRecipeFilter.vue";

export default {
  name: "OCookingRecipeList",

  // IMPORTANT VUEJS event "created"
  // DOC VUEJS events et cycle de vie d'un composant : https://vuejs.org/v2/guide/instance.html#Lifecycle-Diagram
  async created() {
    console.log(
      "%c" + "Le composant OCookingRecipeList vient d'être créé",
      "color: #0bf; font-size: 1rem; background-color:#fff"
    );

    // recipeService.loadRecipes() est une fonction assynchrone, il faut préciser à javascript qu'il faut attendre la réponse
    this.recipes = await recipeService.loadRecipes();
  },

  data() {
    return {
      // Propriété protected stockant les recettes
      recipes: [],
      Ingredient: false,
      Type: false,
    };
  },

  components: {
    RecipeCard,
    OcookingFilter,
  },

  methods: {
    async verifyFilter() {
      if (this.Ingredient && this.Type) {
        this.recipes = await recipeService.getRecipeByTypeAndIngredient(
          this.Type,
          this.Ingredient
        );
      } else if (parseInt(this.Type) && this.Type != 0) {
        this.recipes = await recipeService.getRecipeByType(this.Type);
      } else if (parseInt(this.Ingredient) && this.Ingredient != 0) {
        this.recipes = await recipeService.getRecipeByIngredient(
          this.Ingredient
        );
      } else {
        this.recipes = await recipeService.loadRecipes;
      }
    },

    async handleRecipeTypeSelected(selectedType) {
      if (this.Type != selectedType) {
        this.Type = selectedType;
        this.verifyFilter();
      }
    },

    async handleRecipeIngredientSelected(selectedIngredient) {
      if (this.Ingredient != selectedIngredient) {
        this.Ingredient = selectedIngredient;
        this.verifyFilter();
      }
    },
  },
};
</script>

<style>
</style>
