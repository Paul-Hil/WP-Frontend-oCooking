<template>
  <article class="recipe-excerpt">
    <img class="recipe-excerpt_image" src="https://assets.afcdn.com/recipe/20170328/63885_w1024h576c1cx1500cy1000.webp" alt=""/>
    <h1 class="recipe-excerpt_title">{{recipe.title.rendered}}</h1>
    <p class="recipe-excerpt__description" v-html="recipe.excerpt.rendered"></p>
  </article>
</template>

<script>
export default {
  name: "RecipeExcerpt",
  props: ["recipe"],
};

</script>

<style>
  img {
    width: 100%;
    border-top-left-radius: calc(3.25rem - 31px);
    border-top-right-radius: calc(3.25rem - 31px);
    height: 180px;
    display: block;
  }

  h1, p {
    text-align: left;
    padding: 1rem;
    margin: 0;
  }

  p {
    padding-top: 0;
    padding-left: 0.5rem;
  }

  .card {
      border: 1px solid rgba(0,0,0,.125);
      border-radius: 3rem;
      margin: auto;
      margin-bottom:3rem  ;
      width: 50vh;
  }
</style>