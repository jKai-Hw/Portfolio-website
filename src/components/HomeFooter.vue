<template>
    <v-footer dark padless>
        <v-card min-width="100%" flat tile class="black white--text text-center">
            <v-row class="mx-4 mx-sm-0 ma-0 py-13 py-sm-14">
                <v-col sm="10" class="pa-0 mx-auto d-sm-flex ">
                    <v-col cols="12" sm="3" class="d-flex flex-column align-start pa-0  mb-11 mb-sm-0 order-sm-3 ">
                        <v-card-subtitle class="footer-subtitle f-SSP  font-weight-bold pa-0 ms-2">SOCIAL
                        </v-card-subtitle>
                        <v-card-text class="pa-0 mt-3 mt-sm-5  d-flex justify-start">
                            <v-btn v-for="icon in icons" :key="icon" class="ma-0 white--text" icon :href="icon.url"
                                target="_blank">
                                <v-icon>
                                    {{ icon.icon }}
                                </v-icon>
                            </v-btn>
                        </v-card-text>
                    </v-col>
                    <v-spacer class="order-sm-2 d-none d-sm-flex"></v-spacer>
                    <v-col cols="12" sm="6" class="ms-2 ms-sm-0 pa-0">
                        <v-card-subtitle class="footer-subtitle f-SSP  font-weight-bold pa-0 text-left">KAI HOSHINO
                        </v-card-subtitle>

                        <v-card-text class="f-SSP white--text pa-0 mt-3 mt-sm-5 pt-1 text-left">
                            Studying computer science to become an engineer. Currently using JavaScript, Vue.js and
                            Java.
                        </v-card-text>
                    </v-col>
                </v-col>
            </v-row>



            <v-divider></v-divider>

            <v-card-text class="white--text ">
                © Copyright {{ new Date().getFullYear() }} — made by <strong>Kai Hoshino</strong>
            </v-card-text>
        </v-card>
    </v-footer>
</template>

<script>

export default {
    data: () => ({
        icons: [
            { icon: 'mdi-github', url: 'https://github.com/jKai-Hw' },
            { icon: 'icon-Wantedly_Wht', url: 'https://www.wantedly.com/id/hoshino_kai_' },
            { icon: 'mdi-twitter', url: 'https://twitter.com/OiLactee' },



        ],
    }),
}
</script>

<style>
.footer-subtitle {
    font-size: 1.25rem;
}

.w-100 {
    width: 100%;
}

@media only screen and (min-width: 37.5rem

    /* sm=600px */
) {}

@media only screen and (min-width: 60rem

    /* md=960px */
) {}

@media only screen and (min-width: 79rem

    /* lg=1264px */
) {
    .footer-subtitle {
        font-size: 1.375rem;
    }
}
</style>
