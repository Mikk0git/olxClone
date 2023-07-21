<script lang="ts">
import { defineComponent } from 'vue';

import Categories from '../components/Categories.vue'

export default defineComponent({
  name: 'HomePage',
  components: {
    Categories
    
  },
  // Add any necessary properties, methods, or lifecycle hooks here
});
</script>


<template>
  
<div id="HomePageContaianer">


  <Categories/>  
  
</div>

</template>
  

  