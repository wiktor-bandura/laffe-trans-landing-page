<template>
    <div class="about-wrapper">
       <section>
                <transition name="slide-in">
                    <div class="previous" v-show="notHidden"></div>
                </transition>

                <transition name="slide-in">
                    <div class="content" v-show="notHidden">
                        <div @click="close" class="close"></div>
                            <div :style="{ backgroundImage: `url('./${imageSource}')` }" alt="Motor na lawecie" class="about-image"></div>
                            <div class="company-description">
                                <h3 class="company-description-header">Kilka słów o Laffe Trans</h3>

                                <hr>

                                <transition name="slide-out" mode="out-in">
                                     <p key="1" class="page" v-if="firstPage">Laffe-Trans firma zajmująca się głównie przewozem aut w Polsce i za granicą. Nasz cel to oferowanie usług na najwyższym poziomie. Działamy tak, aby klient był zawsze zadowolony. Jesteśmy rzetelną i punktualną firmą, ale i bezpieczeństwo jest dla nas bardzo ważne.</p>

                                    <p key="2" class="page" v-else>Posiadamy ubezpieczenie na przewozony towar oraz licencję międzynarodową na jego przewóz. <br>
                                    Zapraszamy wszystkich do współpracy.
                                    Przyjmiemy każde zlecenie i spełnimy wszytkie wasze oczekiwania. </p>
                                </transition>

                                <div class="pages-switch">
                                    <p @click="firstPage = true" :class="{ active: firstPage }"> 1 </p>
                                    <p @click="firstPage = false" :class="{ active: !firstPage }"> 2 </p>
                                </div>
                            </div>
                        </div>
                </transition>
       </section>
    </div>
</template>

<script>
export default {
    name: 'About',
    props: {
        notHidden: Boolean
    },
    data() {
        return {
            imageSource: './2.jpg',
            firstPage: true
        }
    },
    methods: {
       close() {
           this.$emit('isClosed')
       }
    }
}
</script>


<style>

    .previous, .content {
        position: fixed;
        top: 0;
        left: 0;
        width: 100vw;
        height: 100vh;
    }

    .previous {
        background-color: var(--secondary-color);
        transition-duration: .2s;
    }

    .content {
        background-color: #fff;
        transition-duration: .6s;
        display: flex;
        align-items: center;
        justify-content: center;
        text-align: center;
        font-size: 20px;
        z-index: 4;
    }

    .close {
        position: fixed;
        top: 3%;
        right: 3%;
        width: 45px;
        height: 45px;
        padding: 5px;
        display: flex;
        align-items: center;
        justify-content: center;
        transition: transform .2s ease-in-out;
        -moz-transition: transform .2s ease-in-out;
        -webkit-transition: transform .2s ease-in-out;
        -o-transition: transform .2s ease-in-out;
        -ms-transition: transform .2s ease-in-out;
    }

    .active {
        font-weight: bold;
        text-decoration: underline;
    }

    .close::before,
    .close::after {
        content: '';
        display: block;
        width: 40px;
        height: 3px;
        background-color: #000;
        position: absolute;
    }

    .close::before {
        transform: rotate(-45deg);
    }

    .close::after {
        transform: rotate(45deg);
    }

    .close:hover {
        transform: scale(.9);
    }

    .slide-in-enter,
    .slide-in-leave-to {
        transform: translateX(+100%);
    }

    .slide-in-enter-active,
    .slide-in-leave-active {
        transition-property: transform;
        transition-timing-function: ease-in-out;
    }

    .about-image,
    .company-description {
        width: 40%;
        height: 70%;
        border: 1px solid var(--main-background-color);
        padding: 20px;
        margin: 5%;
        line-height: 50px;
        font-size: 20px;
        background-size: cover;
        overflow: hidden;
    }

    .slide-out-leave-active,
    .slide-out-enter-active {
        transition: transform .5s ease-in-out;
    }

    .slide-out-leave-to,
    .slide-out-enter {
        transform: translateX(-100%);
    }

    .slide-out-leave,
    .slide-out-enter-to {
        transform: translateX(0);
    }

    .company-description-header {
        font-size: 30px;
        margin: 15px;
        padding: 5% 0;
    }

    .page {
        height: 65%;
        padding: 5% 0;
    }

    .pages-switch {
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: space-evenly;
        justify-content: center;
    }

    .pages-switch p {
        margin: 0 15px;
        cursor: pointer;
    }

    @media screen and (max-width: 520px) {

        .about-image {
            display: none;
        }

        .company-description {
            width: 100%;
            height: 100%;
            margin: 0;
            font-size: 25px;
            line-height: initial;
            border: none;
        }

        .company-description-header {
            font-size: 25px;
        }

        .page {
            margin-bottom: 10%;

        }

        .about-image {
            background-size: cover;
            background-position: 40%;
        }
    }


</style>