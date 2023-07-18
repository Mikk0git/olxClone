<script lang="ts">
import CategoryCard from './CategoryCard.vue';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'Categories',
  components: {
    CategoryCard,
  },
  // Add any necessary properties, methods, or lifecycle hooks here
});
</script>


<template>
  
  <div id="categories">
  <h1>Kategorie główne</h1>
    <div class="categoryCardsWrapper">
      <CategoryCard/>
      <CategoryCard/>
      <CategoryCard/>
      <CategoryCard/>
      <CategoryCard/>
      <CategoryCard/>
      <CategoryCard/>
      <CategoryCard/>
      <CategoryCard/>
      <CategoryCard/>
      <CategoryCard/>
      <CategoryCard/>
      <CategoryCard/>
      <CategoryCard/>
      <CategoryCard/>


    </div>
  </div>
</template>
  

  