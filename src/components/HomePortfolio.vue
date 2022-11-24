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
                        <v-carousel height="400" show-arrows-on-hover>
                            <v-carousel-item v-for="img, i in portfolio.imgList" :key="i" :src="img">
                                <!-- <v-img :src="img"></v-img> -->
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
                                <v-btn color="#facf0f" class="font-weight-bold" :href="portfolio.pagesUrl">GitHub pages
                                </v-btn>
                            </v-col>
                            <v-col cols="6">
                                <v-btn dark color="#24292F" class="font-weight-bold " :href="portfolio.readmeUrl">README
                                </v-btn>
                            </v-col>
                        </v-row>
                    </v-col>
                </v-row>
            </v-container>
            <v-container class="pa-0">
                <v-row class="projects__row mt-0 mx-0 justify-space-between align-center">
                    <v-col cols="12" md="6" class="pa-0">
                        <v-carousel height="400" show-arrows-on-hover>
                            <v-carousel-item>
                                <!-- <v-img :src="img"></v-img> -->
                            </v-carousel-item>
                        </v-carousel>
                    </v-col>
                    <v-col cols="12" md="5" class="pa-0 mt-10 mt-md-0">
                        <h3 class="portfolio__row-content-title font-weight-bold mb-3 ">Other portfolios</h3>
                        <p class="project__row-content-desc f-NSJ mb-6">
                            上記ほかにも、JavaScriptやVue.jsの学習のためにX個ほどアプリケーションを作成しました。いくつかは<a>GitHub</a>で公開しておりますので、よろしければご覧ください。
                        </p>
                        <h4 class="project__row-content-technologies mb-1">technologies</h4>
                        <p class="project__row-content-desc f-NSJ">JavaScript, Vue.js</p>
                        <v-row class="mt-5 mt-md-8 mb-0 mx-0">
                            <v-col>
                                <v-btn dark color="#24292F" class="font-weight-bold "
                                    href="https://github.com/jKai-Hw?tab=repositories">GitHub repositories</v-btn>
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
                new Portfolio('Chat App', ["https://liginc.co.jp/wp-content/uploads/2015/05/797.png", '../assets/portfolioImg/chat-app/chat-home.png', '../assets/portfolioImg/chat-app/chat-chat.png', '../assets/portfolioImg/chat-app/chat-detail.png', '../assets/portfolioImg/chat-app/chat-talk.png', '../assets/portfolioImg/chat-app/talk-mini.png',], 'オンラインで相手を探してメッセージのやり取りができるSPAアプリです。Vue.jsの学習のアウトプットとして作成しました。トーク履歴に新しく話した人順に表示するようにしたり、getterやsetterを用いたVuexの状態管理で堅牢に管理できるように工夫しました。', 'Vue CLI, Vue Router, Vuex, Vuetify.<br>外部API: <a href="https://randomuser.me/" target="_blank">RANDOM USER GENERATOR</a>, <a href="https://a3rt.recruit.co.jp/product/talkAPI/" target="_blank">Talk API</a>', 'https://jkai-hw.github.io/chat-app/', 'https://github.com/jKai-Hw/chat-app#readme'),
                new Portfolio('Recursionガチャ！ガチャ！', ['imgList'], `Recursionコミュニティ内の初心者用チーム開発(Gitのチームでの使い方をマスターするのが主な目的の開発です)の成果物です。<br>コミュニティに入って間もないユーザーに、メンターやイベント企画者などを紹介するのを目的の一つとして作成しました。おもしろ要素を入れたり、結果をツイートできるようにしてコミュニティ内で<a href="https://twitter.com/hashtag/Recursion%E3%82%AC%E3%83%81%E3%83%A3?src=hashtag_click"  target="_blank">プチバズリ</a>することができました。`, `JavaScript, Bootstrap`, 'https://recursion-teamdev-green.github.io/project/', 'https://github.com/recursion-teamdev-green/project'),
                // new Portfolio('Other portfolios', imgList, description, Technologies, pagesUrl, readmeUrl),
            ],
            colors: [
                'indigo',
                'warning',
                'pink darken-2',
                'red lighten-1',
                'deep-purple accent-4',
            ],
            slides: [
                'First',
                'Second',
                'Third',
                'Fourth',
                'Fifth',
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

@media only screen and (min-width: 37.5rem

    /* sm=600px */
) {
    .portfolio__row-content-title {
        font-size: 1.625rem;
    }

    .project__row-content-technologies {
        font-size: 1.375rem;
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
}

@media only screen and (min-width: 79rem

    /* lg=1264px */
) {
    .portfolio__row-content-title {
        font-size: 1.75rem;
    }
}
</style>
