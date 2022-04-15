<template>
  <form>
    <select
      v-model="selectedType"
      v-if="recipeTypes.length"
      @change="selectFilter"
    >
      <option value="0" selected>Choisissez un type de plat</option>

      <option v-for="type in recipeTypes" :key="type.id" :value="type.id">
        {{ type.name }}
      </option>
    </select>

    <select
      v-model="selectedIngredient"
      v-if="recipeIngredients.length"
      @change="selectFilter"
    >
      <option value="0" selected>Choisissez un ingrédient</option>

      <option
        v-for="ingredient in recipeIngredients"
        :key="ingredient.id"
        :value="ingredient.id"
      >
        {{ ingredient.name }}
      </option>
    </select>
  </form>
</template>


<script>
import recipeService from "../services/recipeService.js";
export default {
  // WARNING JS la méthode create dure un temps "indéfini", il faut spécifier qu'elle est assynchrone (async)
  async created() {
    this.recipeTypes = await recipeService.loadRecipesTypes();
    this.recipeIngredients = await recipeService.loadRecipesIngredients();
  },
  name: "OCookingRecipeFilter",

  data() {
    return {
      recipeTypes: [],
      recipeIngredients: [],
      selectedType: null,
      selectedIngredient: null,
    };
  },

  methods: {
    selectFilter(evt) {
      evt.preventDefault();

      if (this.selectedType) {
        console.log(this.selectedType);
        this.$emit("type-selected", this.selectedType);
      }

      if (this.selectedIngredient) {
        console.log(this.selectedIngredient);
        this.$emit("ingredient-selected", this.selectedIngredient);
      } 
    },
  },
};
</script>