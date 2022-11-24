<template>
    <section id="contact">
        <v-container fluid fill-height class="home-about__content text-center" ref="contact">
            <v-row class=" mx-0 my-16">
                <v-col class="pa-0">
                    <h1 class="portfolio__title f-black font-weight-bold mb-7 mb-md-8 mb-lg-9">CONTACT</h1>
                    <div>
                        <p class="mb-10">Feel free to Contact me by submitting the form below and I will get back to you
                            as soon as possible</p>
                        <v-btn x-large color="#facf0f" class="font-weight-bold color-111"
                            href="https://docs.google.com/forms/d/e/1FAIpQLSefgKMArXUaU3AhK2bGnLVjYBu5bUvN-yIBGVaf9i6F0UKXBA/viewform"
                            target="_blank">contact me</v-btn>
                    </div>
                </v-col>
            </v-row>
        </v-container>
    </section>
</template>

<script>
export default {

}
</script>

<style>
#contact {
    background: linear-gradient(to right, rgba(245, 245, 245, .8), rgba(245, 245, 245, .8)), url("../assets/images/ポリゴン.png");
    background-position: center center;
    font-family: 'Source Sans Pro', sans-serif;
    ;
}

.color-111 {
    color: #111111;
}
</style>
