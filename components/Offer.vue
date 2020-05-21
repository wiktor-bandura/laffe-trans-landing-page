<template>
    <div class="offer-wrapper">
        <div class="background"></div>
        <h2 class="offer-header" data-aos="zoom-out">Nasza oferta</h2>

        <div class="services" >
            <div class="service-box" v-for="service in services" :key="service.iconHref" data-aos="fade-up">
               <h3 class="service-header"> {{ service.name }} </h3>
               <hr>
                <div class="service-icon" :style="{ backgroundImage: `url('./${service.iconHref}')` }"></div>
                </div>
            </div>
        </div>
</template>

<script>
export default {
    name: 'Offer',
    props: {
        services: Array
    }
}
</script>

<style scoped>
    .offer-wrapper {
        box-sizing: border-box;
        width: 100vw;
        padding: 30px;
        position: relative;
    }

    .background {
        width: 100%;
        height: 100%;
        background-color: #282e2e;
        -webkit-clip-path: polygon(100% 40%, 0% 100%, 100% 100%);
        clip-path: polygon(100% 40%, 0% 100%, 100% 100%);
        position: absolute;
        bottom: 0;
        left: 0;
        z-index: -1;
    }

    .offer-header {
        text-align: center;
        font-size: 48px;
        margin: 5%;
    }

    .services {
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
        grid-gap: 30px;
    }

    .service-box {
        box-sizing: border-box;
        min-height: 350px;
        padding: 15px;
        box-sizing: border-box;
        border: 1px solid #a0a0a0;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-around;
        text-align: center;
        background-color: #fff;
        transition: background-color .5s ease-in-out;
    }

    .service-box:hover {
        background-color: #282e2e;
        color: white;
    }

    .service-header {
        height: 50px;
    }

    hr {
        width: 100%;
    }

    .service-icon {
        width: 100%;
        height: 100px;
        background-position: center;
        background-repeat: no-repeat;
    }
</style>