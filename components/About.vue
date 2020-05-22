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
                                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quia, ullam. Tempora veritatis voluptates quod quidem, in eveniet. Exercitationem aliquid repudiandae, aperiam hic tenetur, obcaecati nam quidem nulla, ut veniam explicabo?
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
            imageSource: './2.jpg'
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
        background-color: #333;
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
        width: 30%;
        height: 70%;
        border: 1px solid #333;
        padding: 20px;
        margin: 5%;
        line-height: 50px;
        font-size: 25px;
        background-size: cover;
    }

    .company-description-header {
        font-size: 30px;
        margin: 15px;
    }

    @media screen and (max-width: 520px) {
        .content {
            flex-direction: column;
        }

        .about-image,
        .company-description {
            width: 80%;
            height: 40vh;
            font-size: 18px;
            line-height: initial;
        }

        .about-image {
            background-size: cover;
            background-position: 40%;
        }
    }


</style>