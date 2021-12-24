<template>
    <div class="v-card-page">

        <div class="v-card">
            <div class="v-card-hole"></div>
            <div class="v-card-wrapper">
                <div class="v-card-avatar imgLiquidFill">
                    <img src="dist/img/card/avatar.jpeg">
                </div>
                <div class="v-card-title">
                    {{ $t('Card.name') }}
                </div>
                <div class="v-card-content">
                    <div class="v-card-item">
                        <div class="v-card-item-title">
                            <i class="icon fas fa-building"></i>
                        </div>
                        <div class="v-card-item-content">
                            {{ $t('Card.company') }}
                        </div>
                    </div>
                    <div class="v-card-item">
                        <div class="v-card-item-title">
                            <i class="icon fas fa-briefcase"></i>
                        </div>
                        <div class="v-card-item-content">
                            {{ $t('Card.work_as') }}
                        </div>
                    </div>
                    <div class="v-card-item">
                        <div class="v-card-item-title">
                            <i class="fas fa-mobile-alt"></i>
                        </div>
                        <div class="v-card-item-content">
                            <a target="_blank" :href="'tel:'+$t('Card.cellphone') ">
                                {{ $t('Card.cellphone') }}
                            </a>
                        </div>
                    </div>
                    <div class="v-card-item">
                        <div class="v-card-item-title">
                            <i class="fas fa-envelope"></i>
                        </div>
                        <div class="v-card-item-content">
                            <a target="_blank" :href="'mailto:'+$t('Card.email') ">
                                {{ $t('Card.email') }}
                            </a>
                        </div>
                    </div>
                    <div class="v-card-item">
                        <div class="v-card-item-title">
                            <i class="fas fa-map-marker-alt"></i>
                        </div>
                        <div class="v-card-item-content">
                            <a target="_blank" :href="'https://www.google.com.tw/maps/place/' + $t('Card.address')">
                                {{ $t('Card.address') }}
                            </a>
                        </div>
                    </div>
                    <div class="v-card-item">
                        <div class="v-card-item-title">
                            <i class="fab fa-facebook"></i>
                        </div>
                        <div class="v-card-item-content">
                            <a target="_blank" :href="'https://www.facebook.com/' + $t('Card.facebook')">
                                {{ $t('Card.facebook') }}
                            </a>
                        </div>
                    </div>
                    <div class="v-card-item">
                        <div class="v-card-item-title">
                            <i class="fab fa-line"></i>
                        </div>
                        <div class="v-card-item-content">
                            <span>{{ $t('Card.line') }}</span>
                            <!-- <a target="_blank" :href="'line://ti/p/' + $t('Card.line')">
                                {{ $t('Card.line') }}
                            </a>
                            <a target="_blank" :href="'http://line.me/ti/p/' + $t('Card.line')">
                                {{ $t('Card.line') }}
                            </a> -->
                            <div class="line-it-button" data-lang="en" data-type="friend" data-env="REAL"   data-lineId="apan1121" style="display: none;"></div>
                            <!-- <script src="https://www.line-website.com/social-plugins/js/thirdparty/loader.min.js" async="async" defer="defer"></script> -->
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="v-card-lang">
            <div class="v-card-lang-item"
                :class="{ select: chooseLang === 'en-US' }"
                @click="chooseLangAct('en-US')"
            >
                EN
            </div>
            <div class="v-card-lang-item"
                :class="{ select: chooseLang === 'zh-TW' }"
                @click="chooseLangAct('zh-TW')"
            >
                中文
            </div>
        </div>

        <div class="v-card-tool">
            <a class="btn btn-secondary btn-block" :href="`vcard-${chooseLang}.vcf`">
                {{ $t('DownloadVCF') }}
            </a>
            <button class="btn btn-success btn-block" @click="ShareFlag = true">
                {{ $t('ShareQrcode') }}
            </button>
        </div>

        <div v-if="ShareFlag" class="v-card-share" @click="ShareFlag = false">
            <div class="v-card-share-wrapper">
                <img :src="QRCodeUrl">
            </div>
        </div>
    </div>
</template>
<script>
import { AwesomeQR } from 'awesome-qr';
import { mapActions, mapMutations, mapGetters } from 'vuex';

// import $ from 'jquery';
// import 'bootstrap';

// import 'app';
// import { string, jsVars, popup, trackJS, localStorage, ppPanel } from 'lib/common/util';

export default {
    components: {},
    filters: {},
    props: {},
    data(){
        return {
            ShareFlag: false,
            QRCodeUrl: '',
        };
    },
    computed: {
        ...mapGetters([
        ]),
        chooseLang(){
            return this.$i18n.locale;
        },
    },
    watch: {
        ShareFlag(){
            const that = this;
            if (!that.QRCodeUrl) {
                new AwesomeQR({
                    text: window.location.href,
                    size: 500,
                }).draw().then((dataURL) => {
                    that.QRCodeUrl = dataURL;
                });
            }
        },
    },
    created(){},
    mounted(){
        $('body').trigger('resizeImg');
        this.$nextTick(() => {
            const script = document.createElement('script');
            script.async = 'async';
            script.defer = 'defer';
            script.src = 'https://www.line-website.com/social-plugins/js/thirdparty/loader.min.js';
            document.querySelector('head').appendChild(script);
        });
    },
    updated(){
    },
    destroyed(){},
    methods: {
        ...mapActions({}),
        ...mapMutations({}),
        chooseLangAct(langKey){
            this.$i18n.locale = langKey;
        },
    },
};
</script>
<style lang="scss" scoped>
</style>