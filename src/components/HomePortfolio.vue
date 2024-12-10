<template>
    <section id="portfolio">
        <v-container fluid fill-height class="home-about__content text-center" ref="portfolio">
            <v-row class="mt-0 mx-0 mb-11 mb-sm- mb-md-14">
                <v-col class="pa-0">
                    <h1 class="portfolio__title f-black font-weight-bold mb-7 mb-md-8 mb-lg-9">PORTFOLIO</h1>
                    <div></div>
                    <p>学習した技術のアウトプットで作ったポートフォリオです。</p>
                </v-col>
            </v-row>
            <v-container class="pa-0">
                <v-row v-for="portfolio in portfolios" :key=portfolio.name
                    class="projects__row mt-0 mx-0 justify-space-between align-center">
                    <v-col cols="12" md="6" class="pa-0">
                        <v-carousel show-arrows-on-hover class="carousel grey darken-1">
                            <v-carousel-item v-for="img, i in portfolio.imgList" :key="i">
                                <v-img :src="img" style="height:auto;"></v-img>
                            </v-carousel-item>
                        </v-carousel>
                    </v-col>
                    <v-col cols="12" md="5" class="pa-0 mt-10 mt-md-0 ">
                        <h3 class="portfolio__row-content-title font-weight-bold mb-3 ">{{ portfolio.name }}</h3>
                        <p class="project__row-content-desc f-NSJ mb-6" v-html="portfolio.description"></p>
                        <h4 class="project__row-content-technologies mb-1">technologies</h4>
                        <p class="project__row-content-desc f-NSJ" v-html="portfolio.Technologies"></p>
                        <v-row class="mt-5 mt-md-8 mb-0 mx-0">
                            <v-col cols="6">
                                <v-btn color="#facf0f" class="font-weight-bold" :href="portfolio.pagesUrl" target="_blank">GitHub pages
                                </v-btn>
                            </v-col>
                            <v-col cols="6">
                                <v-btn dark color="#24292F" class="font-weight-bold " :href="portfolio.readmeUrl" target="_blank">README
                                </v-btn>
                            </v-col>
                        </v-row>
                    </v-col>
                </v-row>
            </v-container>
            <v-container class="pa-0">
                <v-row class="projects__row mt-0 mx-0 justify-space-between align-center">
                    <v-col cols="12" md="6" class="pa-0">
                        <v-carousel show-arrows-on-hover class="carousel grey darken-1">
                            <v-carousel-item v-for="img, i in otherPFimgList" :key="i">
                                <v-img :src="img" style="height:auto;"></v-img>
                            </v-carousel-item>
                        </v-carousel>
                    </v-col>
                    <v-col cols="12" md="5" class="pa-0 mt-10 mt-md-0">
                        <h3 class="portfolio__row-content-title font-weight-bold mb-3 ">Other portfolios</h3>
                        <p class="project__row-content-desc f-NSJ mb-6">
                            上記ほかにも、JavaScriptやVue.jsの学習のために10個ほどアプリケーションを作成しました。いくつかはGitHubで公開しておりますので、よろしければご覧ください。
                        </p>
                        <h4 class="project__row-content-technologies mb-1">technologies</h4>
                        <p class="project__row-content-desc f-NSJ">JavaScript, Vue.js, Bootstrap</p>
                        <v-row class="mt-5 mt-md-8 mb-0 mx-0">
                            <v-col>
                                <v-btn dark color="#24292F" class="font-weight-bold "
                                    href="https://github.com/jKai-Hw?tab=repositories"  target="_blank">GitHub repositories</v-btn>
                            </v-col>
                        </v-row>
                    </v-col>
                </v-row>
            </v-container>
        </v-container>
    </section>
</template>

<script>
import { Portfolio } from "@/model";

export default {
    data() {
        return {
            portfolios: [
                new Portfolio('Chat App', ['https://user-images.githubusercontent.com/75964449/203824756-680569a9-868c-4cd6-bb73-7ed79b601ca2.png', 'https://user-images.githubusercontent.com/75964449/203824936-4f81941f-3b13-4a24-b565-b66b6ad39ad4.png', 'https://user-images.githubusercontent.com/75964449/203825049-32454f78-260b-4453-99e5-89e2f14f8f3f.png', 'https://user-images.githubusercontent.com/75964449/203825140-cbbb4839-ea84-471e-99b3-b3e14123f778.png', 'https://user-images.githubusercontent.com/75964449/203825171-c9e3d321-b57b-4716-b896-3a1425eb3878.png',], 'オンラインで相手を探してメッセージのやり取りができるSPAアプリです。Vue.jsの学習のアウトプットとして作成しました。トーク履歴に新しく話した人順に表示するようにしたり、getterやsetterを用いたVuexの状態管理で堅牢に管理できるように工夫しました。', 'Vue CLI, Vue Router, Vuex, Vuetify.<br>外部API: <a href="https://randomuser.me/" target="_blank">RANDOM USER GENERATOR</a>, <a href="https://a3rt.recruit.co.jp/product/talkAPI/" target="_blank">Talk API</a>', 'https://jkai-hw.github.io/chats-app/', 'https://github.com/jKai-Hw/chat-app#readme'),
                new Portfolio('Recursionガチャ！ガチャ！', ['https://user-images.githubusercontent.com/75964449/203901943-5fa8215c-b68d-4bcd-9a24-c260ea521af8.png', 'https://user-images.githubusercontent.com/75964449/203901962-6206c160-3da8-44f4-b945-92404daded28.png', 'https://user-images.githubusercontent.com/75964449/203901988-f69b2ccf-2e39-4133-afcb-a9570783fd6d.png', 'https://user-images.githubusercontent.com/75964449/203901980-2267a89d-ee91-4b2c-b093-b66cb4d4e297.png', 'https://user-images.githubusercontent.com/75964449/203902046-85163e50-f6f3-4c8c-924c-898926957baf.png',], `Recursionコミュニティ内の初心者用チーム開発(Gitのチームでの使い方をマスターするのが主な目的の開発です)の成果物です。<br>コミュニティに入って間もないユーザーに、メンターやイベント企画者などを紹介するのを目的の一つとして作成しました。おもしろ要素を入れたり、結果をツイートできるようにしてコミュニティ内で<a href="https://twitter.com/hashtag/Recursion%E3%82%AC%E3%83%81%E3%83%A3?src=hashtag_click"  target="_blank">プチバズリ</a>することができました。`, `JavaScript, Bootstrap`, 'https://recursion-teamdev-green.github.io/project/', 'https://github.com/recursion-teamdev-green/project'),
                // new Portfolio('Other portfolios', imgList, description, Technologies, pagesUrl, readmeUrl),
            ],
            otherPFimgList: [
                'https://user-images.githubusercontent.com/75964449/203914827-dec599d6-a8b9-4b23-8c18-27f83fa62878.png',
                'https://user-images.githubusercontent.com/75964449/203915058-6c5617ad-6962-4cb7-a3c5-e08893a3c1d1.png',
                'https://user-images.githubusercontent.com/75964449/203915523-f3c0f746-1de6-43b6-b23d-44554e3a1e22.png',
                'https://user-images.githubusercontent.com/75964449/203915743-46bae292-7bc8-4d8a-85a8-58c170fe84a5.png'
            ],
        }
    },


}
</script>

<style>
/* eslint-disable */
#portfolio {
    padding: 4.5rem 0 0.375rem 0;
    font-family: 'Source Sans Pro', sans-serif;
    color: #333333;
}

.home-about__content {
    max-width: 120rem;
    margin: auto;
    padding: 0;
    width: 92%;
}

.portfolio__title {
    font-size: 2.3125rem;
    position: relative;
}

.portfolio__title::after {
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

.projects__row {
    margin-bottom: 5.25rem;
}

.portfolio__row-content-title {
    font-size: 1.375rem;
}

.project__row-content-technologies {
    font-size: 1.125rem;
}

.carousel {
    height: 20.3125rem !important;
}

@media only screen and (max-width: 28.125rem/* 450px */) {

    .carousel {
        height: 16.25rem !important;
    }
}

@media only screen and (min-width: 37.5rem/* sm=600px */) {
    .portfolio__row-content-title {
        font-size: 1.625rem;
    }

    .project__row-content-technologies {
        font-size: 1.375rem;
    }

    .carousel {
        height: 28.125rem !important;
    }
}

@media only screen and (min-width: 60rem

    /* md=960px */
) {
    .projects__row {
        margin-bottom: 5.75rem;
    }

    .project__row-content-desc {
        font-size: 1.125rem;
    }

    .carousel {
        height: 17.1875rem !important;
    }
}

@media only screen and (min-width: 79rem

    /* lg=1264px */
) {
    .portfolio__row-content-title {
        font-size: 1.75rem;
    }

    .carousel {
        height: 21.875rem !important;
    }
}

@media only screen and (min-width: 99rem

    /* 1584px<x<1904 */
) {
    .carousel {
        height: 35rem !important;
    }
}
</style>
