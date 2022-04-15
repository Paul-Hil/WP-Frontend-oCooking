<template>
  <div class="home">
    <RecipeList />
  </div>
</template>

<script>
// @ is an alias to /src
import RecipeList from '@/components/RecipeList.vue'

export default {
  name: 'Home',
  components: {
    RecipeList,
        
  }
}
</script>
