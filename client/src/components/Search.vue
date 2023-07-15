<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'Search',
  // Add any necessary properties, methods, or lifecycle hooks here
});
</script>

<template> <div id="search">
      
    <div id="ItemSearchbar">
      <input type="text" name="ItemSearchbar" id="ItemSearchbarInput" class="searchInput" placeholder="X ogłoszeń blisko Ciebie">

    </div>
    <div id="LocationMenu" ><input type="text" name="LocationMenu" class="searchInput" id="LocationMenuInput" placeholder="Cała Polska"></div>

    <div id="SearchButton" ><button class="searchInput" >Szukaj</button></div>
  </div>
    
  </template>
  

  