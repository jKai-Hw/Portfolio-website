<template>
    <section id="about">
        <v-container fluid fill-height class="home-about__content">
            <v-row class="justify-center ma-0">
                <v-col cols="12" lg="10" class="text-center pa-0">
                    <div class="about__head">
                        <h2 class="about__head-title  f-black font-weight-bold mb-8 mb-md-9">ABOUT ME</h2>
                        <p class="about__head-content">Here you will find more information about me, what I do, and my
                            current skills mostly in terms of programming and
                            technology</p>
                    </div>
                    <v-row class="ma-0 justify-space-between">
                        <v-col cols="12" md="6" class="pa-0 text-left">
                            <div class="mb-8 mt-0 mx-0 pa-0">
                                <h3 class="about__content-title  font-weight-bold f-black mb-8">Get to know me!</h3>
                            </div>
                            <div class="f-NSJ font-weight-regular">
                                <p class="">現在<a
                                        href="https://recursionist.io/">Recursion</a>という米国大学のコンピュータサイエンスの教材を参考にした学習プラットフォームで、CSを学んでいる23歳です。JavaScriptとJavaで学習を進めています。最近Vue.jsを用いていくつかWebアプリケーションを作成しました。<strong>Portfolios</strong>セクションでご覧いただけます。
                                </p>

                                <p>前職は電気工事士。モノづくりが好きなことと、ITの技術に惹かれ、エンジニアを目指して学習中です。</p>

                                <p class="about__content-details-para">
                                    自分が貢献し、学び、成長できるように働けるよう、日々努力していきたいと思っております。もしご質問等がございましたら、遠慮なくご連絡ください。</p>
                            </div>
                            <div class="mb-">
                                <v-btn large color="#facf0f" class="font-weight-bold"
                                    href="https://docs.google.com/forms/d/e/1FAIpQLSefgKMArXUaU3AhK2bGnLVjYBu5bUvN-yIBGVaf9i6F0UKXBA/viewform"
                                    target="_blank">CONTACT</v-btn>
                            </div>
                        </v-col>
                        <v-col cols="12" md="5" class="pa-0 text-left mt-8 mt-md-0">
                            <div class="mb-8 mt-0 mx-0 pa-0">
                                <h3 class="about__content-title  font-weight-bold f-black mb-8">My Skills</h3>
                            </div>
                            <div class="d-flex flex-wrap">
                                <div class="skill">HTML</div>
                                <div class="skill">CSS</div>
                                <div class="skill">Bootstrap</div>
                                <div class="skill">JavaScript</div>
                                <div class="skill">Vue.js</div>
                                <div class="skill">Vuetify</div>
                                <div class="skill">Java</div>
                                <div class="skill">Git</div>
                                <div class="skill">GitHub</div>
                                <div class="skill">Responsive Design</div>
                            </div>
                        </v-col>
                    </v-row>
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
/* eslint-disable */
#about {
    background: #fafafa;
    padding: 4.5rem 0;
    font-family: 'Source Sans Pro', sans-serif;
}

p {
    color: #555555;
}

.home-about__content {
    max-width: 120rem;
    margin: auto;
    padding: 0;
    width: 92%;
}

.about__head {
    margin-bottom: 4.5rem;
}

.about__head-title {
    font-size: 2.3125rem;
    position: relative;
}

.about__head-title::after {
    content: '';
    position: absolute;
    top: calc(100% + 0.5rem);
    height: 5px;
    width: 3rem;
    background: #facf0f;
    left: 50%;
    transform: translateX(-50%);
    border-radius: 5px;
}

.about__head-content {
    font-size: 1.125rem;
}

.about__content-title {
    font-size: 1.3125rem;
}

.about__content-details-para:last-child {
    margin-bottom: 2.25rem;
}

.skill {
    padding: 0.5625rem 1.125rem;
    margin-bottom: 0.875rem;
    margin-right: 0.875rem;
    font-size: 1rem;
    background: rgba(153, 153, 153, .2);
    border-radius: 5px;
    font-weight: 600;
    color: #666;
}


/* @media only screen and (min-width: 37.5rem) {
    .about__content-title {
        font-size: 21px;
    }
} */
@media only screen and (min-width: 60rem

    /* md=960px */
) {
    #about {
        background: #fafafa;
        padding: 7.125rem 0;
        font-family: 'Source Sans Pro', sans-serif;
    }

    .about__head {
        margin-bottom: 5.3125rem;
    }

    .about__content-title {
        font-size: 1.625rem;
    }

    .about__head-content {
        font-size: 1.25rem;
    }

    .about__content-details-para:last-child {
        margin-bottom: 2.375rem;
    }

    .skill {
        padding: 0.625rem 1.1875rem;
        margin-bottom: 0.9375rem;
        margin-right: 0.9375rem;
        font-size: 1rem;
        background: rgba(153, 153, 153, .2);
        border-radius: 5px;
        font-weight: 600;
        color: #666;
    }
}

@media only screen and (min-width: 79rem

    /* lg=1264px */
) {
    #about {
        background: #fafafa;
        padding: 7.5rem 0;
        font-family: 'Source Sans Pro', sans-serif;
    }

    .about__head {
        margin-bottom: 5.625rem;
    }

    .about__content-details-para:last-child {
        margin-bottom: 2.5rem;
    }

    .skill {
        padding: 0.625rem 1.1875rem;
        margin-bottom: 0.9375rem;
        margin-right: 0.9375rem;
        font-size: 1rem;
        background: rgba(153, 153, 153, .2);
        border-radius: 5px;
        font-weight: 600;
        color: #666;
    }
}
</style>
