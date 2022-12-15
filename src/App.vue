<template>
  <v-app id="app">
    <v-main>
      <NavAppBar />
      <router-view />
    </v-main>
  </v-app>
</template>

<script>
import NavAppBar from "@/components/NavAppBar";

export default {
  name: 'App',
  data: () => ({
    //13.11X=10
  }),
  components: {
    NavAppBar,
  }
};
</script>

<style>
/* @import url('https://fonts.googleapis.com/css2?family=Source+Sans+Pro:wght@400;700;900&display=swap'); */
@import url('https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@100;300;400;500;700;900&family=Source+Sans+Pro:wght@400;700;900&display=swap');


.f-SSP {
  font-family: 'Source Sans Pro', sans-serif;
}

.f-NSJ {
  font-family: 'Noto Sans JP', sans-serif;
}

.f-black {
  color: #333333;
}

.indent {
  text-indent: 1rem;
}
</style>
