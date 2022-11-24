<template>
    <section class="home-hero">

        <v-container fluid class="home-hero__content ">
            <v-row>
                <v-col class="d-flex flex-column justify-space-around align-center text-center">
                    <h1 class="home-hero__title font-weight-bold ">HEY, I'M KAI HOSHINO</h1>
                    <div class="home-hero__info mx-auto  mt-6">
                        <p class="home-hero__subtitle f-black ma-0">Studying computer science to become an engineer.
                            Currently using JavaScript, Vue.js and Java. Take a look at my portfolio!</p>
                    </div>
                    <div class="mt-11">
                        <v-btn x-large @click="$vuetify.goTo('#portfolio')" color="#facf0f" class="font-weight-bold">
                            Portfolios</v-btn>
                    </div>
                </v-col>
                <!-- <span class="scroll-btn">
                    <a href="#">
                        <span class="mouse">
                            <span>
                            </span>
                        </span>
                    </a>

                </span> -->

            </v-row>
        </v-container>
        <div class="home-hero__socials d-none d-md-flex flex-column">
            <v-btn small color="white" height="3.25rem" width="2rem" depressed class="pa-0" :href="icon.url"
                target="_blank" v-for="(icon, i) in icons" :key="i">
                <v-icon large>{{ icon.icon }}</v-icon>
            </v-btn>
            <!-- <v-btn small color="white" height="3.25rem" width="2rem" depressed class="pa-0">
                <v-icon large>icon-Wantedly_Blk</v-icon>
            </v-btn>
            <v-btn small color="white" height="3.25rem" width="2rem" depressed class="pa-0">
                <v-icon large>mdi-twitter</v-icon>
            </v-btn> -->
        </div>
        <div class="home-hero__mouse-scroll-cont d-none d-sm-flex">
            <div class="mouse"></div>
        </div>
    </section>
</template>

<script>
import '@/assets/icomoon/style.css'

export default {
    data: () => ({
        drawer: false,
        group: null,
        icons: [
            { icon: 'mdi-github', url: 'https://github.com/jKai-Hw', },
            { icon: 'icon-Wantedly_Blk', url: 'https://www.wantedly.com/id/hoshino_kai_', },
            { icon: 'mdi-twitter', url: 'https://twitter.com/OiLactee', },
        ],
    }),
}
</script>

<style>
/* eslint-disable */
.home-hero {
    background: linear-gradient(to right, rgba(245, 245, 245, .8), rgba(245, 245, 245, .8)), url("../assets/images/ポリゴン.png");
    background-position: center center;
    height: 100vh;
    max-height: 120rem;
    position: relative;
    font-family: 'Source Sans Pro', sans-serif;
}

.home-hero__content {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    max-width: 90rem;
    width: 92%;
    padding: 0 0 0 0;
}

.home-hero__info {
    max-width: 47.25rem;
}

@media only screen and (max-width: 37.5rem) {
    .home-hero {
        height: unset;
        min-height: unset;
    }

    .home-hero__content {
        padding: 6.375rem 0 7.25rem 0;
        margin: auto;
        position: static;
        transform: translate(0, 0);
    }
}

.home-hero__socials {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    background: #fff;
    box-shadow: rgb(100 100 111 / 20%) 0 7px 29px 0;
}

.home-hero__title {
    font-size: clamp(2.5rem, 1vw + 2.5rem, 3.875rem);
    letter-spacing: 2px;
    color: #111111;
}

.home-hero__subtitle {
    font-size: clamp(1.063rem, 1vw + 0.85rem, 1.375rem);
    width: 100%;
}

.home-hero__mouse-scroll-cont {
    position: absolute;
    bottom: 3%;
    left: 50%;
    transform: translateX(-50%);
}

.mouse {
    width: 25px;
    height: 40px;
    border: 2px solid #333;
    border-radius: 60px;
    position: relative;
    overflow: hidden;
}

.mouse::before {
    content: '';
    width: 5px;
    height: 5px;
    position: absolute;
    top: 7px;
    left: 50%;
    transform: translateX(-50%);
    background-color: #333;
    border-radius: 50%;
    opacity: 1;
    animation: wheel 1.3s infinite;
    -webkit-animation: wheel 1.3s infinite;
}


.mainImg {
    position: relative;
}

.heading-primary {
    font-size: 6rem;
    text-transform: uppercase;
    letter-spacing: 3px;
    text-align: center;
    color: #111;
    font-weight: 800;
}





/*
@-webkit-keyframes ani-mouse {
    0% {
        opacity: 1;
        top: 29%;
    }

    15% {
        opacity: 1;
        top: 50%;
    }

    50% {
        opacity: 0;
        top: 50%;
    }

    100% {
        opacity: 0;
        top: 29%;
    }
}

@-moz-keyframes ani-mouse {
    0% {
        opacity: 1;
        top: 29%;
    }

    15% {
        opacity: 1;
        top: 50%;
    }

    50% {
        opacity: 0;
        top: 50%;
    }

    100% {
        opacity: 0;
        top: 29%;
    }
}

@keyframes ani-mouse {
    0% {
        opacity: 1;
        top: 29%;
    }

    15% {
        opacity: 1;
        top: 50%;
    }

    50% {
        opacity: 0;
        top: 50%;
    }

    100% {
        opacity: 0;
        top: 29%;
    }
}

.scroll-btn {
    display: block;
    position: absolute;
    bottom: 3%;
    left: 50%;
    text-align: center;
    align-items: flex-end;
}

.scroll-btn>* {
    display: inline-block;
    line-height: 18px;
    font-size: 13px;
    font-weight: normal;
    color: #7f8c8d;
    color: #333;
    font-family: "proxima-nova", "Helvetica Neue", Helvetica, Arial, sans-serif;
    letter-spacing: 2px;
}

.scroll-btn>*:hover,
.scroll-btn>*:focus,
.scroll-btn>*.active {
    color: #333;
}

.scroll-btn>*:hover,
.scroll-btn>*:focus,
.scroll-btn>*:active,
.scroll-btn>*.active {
    opacity: 0.8;
    filter: alpha(opacity=80);
}

.scroll-btn .mouse {
    position: relative;
    display: block;
    width: 25px;
    height: 40px;
    margin: 0 auto 20px;
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
    border: 2px solid #333;
    border-radius: 23px;
}

.scroll-btn .mouse>* {
    position: absolute;
    display: block;
    top: 29%;
    left: 50%;
    width: 5px;
    height: 5px;
    margin: -4px 0 0 -4px;
    background: #333;
    border-radius: 50%;
    -webkit-animation: ani-mouse 2.5s linear infinite;
    -moz-animation: ani-mouse 2.5s linear infinite;
    animation: ani-mouse 2.5s linear infinite;
} */
</style>
