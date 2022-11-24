<template>
  <v-app id="inspire">

    <HomeHero />
    <HomeAbout />
    <HomePortfolio />
    <HomeContact />
    <HomeFooter />


  </v-app>
</template>

<script>
import HomeHero from "@/components/HomeHero";
import HomeAbout from "@/components/HomeAbout.vue";
import HomePortfolio from "@/components/HomePortfolio.vue";
import HomeContact from "@/components/HomeContact.vue";
import HomeFooter from "@/components/HomeFooter.vue";

export default {
  name: 'HomeView',

  components: {
    HomeHero,
    HomeAbout,
    HomePortfolio,
    HomeContact,
    HomeFooter,
  }
}
</script>

<style>
/* eslint-disable */
#title {
  color: #014099;
}
</style>
