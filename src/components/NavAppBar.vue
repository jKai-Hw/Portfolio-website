<template>
    <nav>
        <v-app-bar id="app-bar" color="white" height="70px" app flat light outlined align-content="center">
            <!-- <v-container cols="12" class="d-flex align-center justify-space-between"> -->
            <v-row class="m-0im py-0 py-md-2 px-sm-4 px-md-9">
                <div class="p-0 d-flex justify-center align-center">
                    <v-avatar color="light-blue darken-4" class=" me-4">
                        <img src="../assets/images/icon.png" alt="">
                    </v-avatar>
                    <v-toolbar-title class="f-SSP f-black font-weight-bold ">KAI HOSHINO</v-toolbar-title>
                </div>

                <v-spacer></v-spacer>

                <v-list-item-group color="white" class="d-none d-sm-flex">
                    <v-list-item v-model="group" v-for="(link, i) in links" :key="i" active-class="border"
                        class="px-sm-4 px-md-7 px-lg-8 " :ripple="false">
                        <!--  py-sm-6 py-md-5 py-lg-6 -->
                        <button depressed color="white" class="px-0 f-weight-700" @click="$vuetify.goTo(link.target)">
                            <v-list-item-content class="text-center">
                                <v-list-item-title class="f-SSP f-black font-weight-bold ">{{ link.text }}
                                </v-list-item-title>
                            </v-list-item-content>
                        </button>
                    </v-list-item>
                </v-list-item-group>

                <v-app-bar-nav-icon @click="drawer = true" class="d-flex d-sm-none"></v-app-bar-nav-icon>
            </v-row>
            <!-- </v-container> -->
        </v-app-bar>

        <v-navigation-drawer v-model="drawer" app right hide-overlay temporary>
            <v-list nav dense>
                <v-list-item-group v-model="group" v-for="(link, i) in links" :key="i">
                    <v-list-item @click="$vuetify.goTo(link.target)" :ripple="false">
                        <v-list-item-title class="text-right mr-4">{{ link.text }}</v-list-item-title>
                    </v-list-item>

                </v-list-item-group>
            </v-list>
        </v-navigation-drawer>
    </nav>
</template>

<script>
export default {
    data: () => ({
        drawer: false,
        group: null,
        links: [
            { text: 'Home', target: 0, },
            { text: 'About me', target: '#about', },
            { text: 'Portfolio', target: '#portfolio', },
            { text: 'Contact', target: '#contact', },
        ],
    }),
}
</script>

<style>
/* eslint-disable */
#app-bar {
    box-shadow: 0 10px 100px rgb(0 0 0 / 10%) !important;
}

.m-0im {
    margin: 0 !important;
}

.f-weight-700 {
    font-weight: 700;
}
</style>
