<template>
  <select
    class="ingredient-list"
    v-model="selected"
    @change="switchSelect($event)">

    <option
      v-for="ingredient in ingredientList"
      :key="ingredient"
      class="card"
      :value="ingredient.id">
      {{ ingredient.name }}
    </option>

    <option v-if="urlFilter"></option>
  </select>
</template>

<script>
import axios from "axios";

export default {
  name: "IngredientList",
  data() {
    return {
      ingredientList: {},
      selected: "",
      recettesFilter: "",
      urlFilter: "",
    };
  },
  methods: {
    switchSelect(event) {
      this.selectedIngredient = event.target.value;

        this.urlFilter =
          "http://localhost/Trinity/SpeWordpress/oCooking/WP-trinity-Backend-oCooking-Paul-Hil/public/wp-json/wp/v2/recipe?ingredient=" +
          this.selectedIngredient;
        axios.get(this.urlFilter).then((response) => {
          this.recettesFilter = response.data;
          console.log(this.urlFilter);
        });

    },
  },
  created() {
    axios
      .get(
        "http://localhost/Trinity/SpeWordpress/oCooking/WP-trinity-Backend-oCooking-Paul-Hil/public/wp-json/wp/v2/ingredient"
      )
      .then((response) => {
        this.ingredientList = response.data;
      })
      .catch((e) => {
        this.errors = e;
      });
  },
};
</script>

<style scoped lang="scss">
.error {
  color: red;
}

select {
  text-align: left;
  padding: 0.2rem;
  margin: 1rem;
}
</style>