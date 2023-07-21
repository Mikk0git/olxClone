<script lang="ts">
import { defineComponent } from 'vue';
import { RouterLink } from 'vue-router';

export default defineComponent({
  name: 'Navbar',
  // Add any necessary properties, methods, or lifecycle hooks here
});
</script>

<template>
   <nav id="navbar">
        <div id="navbarLogo"><RouterLink to="/"><img src="../assets/olxlogo.png" alt="Olx logo" width="70"></RouterLink></div>

        <div id="navbarButtons">
            <div id="navbarMessages" class="navbarButton" ><RouterLink to="/">Wiadomości</RouterLink></div>
            <div id="navbarLikes" class="navbarButton"><RouterLink to="/myolx/liked">Polubione oferty</RouterLink></div>
            <div id="navbarYourAccount" class="navbarButton"><RouterLink to="/myolx">Twoje konto</RouterLink></div>
            <div id="navbarNewItem" class="navbarButton"><RouterLink to="/newitem">Dodaj ogłoszenie</RouterLink></div>
        </div>

    </nav>
  </template>
  

  