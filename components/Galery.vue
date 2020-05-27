<template>
    <div class="galery-wrapper">
        <h2 data-aos="zoom-out">Galeria Zdjęć</h2>

        <div class="photos">
            <div class="photo" v-for="photo in 11" :key="photo" :style="{ backgroundImage: `url('${photo}.jpg')` }" @click="zoom(photo)" data-aos="zoom-out"> {{ photo }} </div>
        </div>

       <transition name="slide-in">
            <div class="photo-zoom" v-if="photoClicked">
                <div @click="photoClicked = false" class="close"></div>
                <div class="zoomed" :style=" { backgroundImage: `url('./${current}.jpg')` } "></div>
            </div>
        </transition>


    </div>
</template>

<script>
export default {
    name: 'Galery',
    data() {
        return {
            photoClicked: false,
            current: null
        }
    },
    methods: {
        zoom(index) {
            this.photoClicked = true;
            this.current = index;
        }
    }
}
</script>

<style>

    .galery-wrapper {
        background-color: var(--main-background-color);
        color: white;
    }

    .photos {
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(270px, 1fr));
        grid-gap: 30px;
        padding: 0 5%;
    }

    .photo {
        min-height: 300px;
        background-size: cover;
        background-position: auto;
        border: 2px solid var(--secondary-color);
        position: relative;
        cursor: pointer;
    }

    .photo::before {
        content: 'Kliknij';
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 30px;
        text-transform: uppercase;
        text-align: center;
        position: absolute;
        width: 100%;
        height: 100%;
        background-color: #303030;
        opacity: 0;
        transition: opacity .2s ease;
    }

    .photo:hover::before {
        opacity: .5;
    }

    .photo-zoom {
        display: flex;
        align-items: center;
        justify-content: center;
        position: fixed;
        top: 0;
        left: 0;
        width: 100vw;
        height: 100vh;
        background-color: #fff;
        transition-duration: .6s;
        display: flex;
        align-items: center;
        justify-content: center;
        text-align: center;
        font-size: 20px;
        z-index: 4;
    }

    .zoomed {
        width: 80%;
        height: 80%;
        background-size: contain;
        background-position: center;
        /* background-position: center; */
        /* background-position: fixed; */
        background-repeat: no-repeat;
        border: 1px solid #333;
    }

</style>