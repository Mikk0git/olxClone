<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'Navbar',
  // Add any necessary properties, methods, or lifecycle hooks here
});
</script>

<template>
   <nav id="navbar">
        <div id="navbarLogo"><img src="../assets/olxlogo.png" alt="Olx logo" width="70"></div>

        <div id="navbarButtons">
            <div id="navbarMessages" class="navbarButton" >Wiadomości</div>
            <div id="navbarLikes" class="navbarButton">Polubione oferty</div>
            <div id="navbarYourAccount" class="navbarButton">Twoje konto</div>
            <div id="navbarNewItem" class="navbarButton">Dodaj ogłoszenie</div>
        </div>

    </nav>
  </template>
  

  