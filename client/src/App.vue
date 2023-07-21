<script setup lang="ts">

// import Categories from './components/Categories.vue'
import Navbar from './components/Navbar.vue';
import Search from './components/Search.vue';

import {RouterView} from "vue-router"

</script>

<template>
<div id="app">
    <Navbar />
    <Search/>

    <RouterView />



</div>
</template>

<style scoped>

</style>
