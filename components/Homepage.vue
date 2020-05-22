<template>
    <div class="homepage-wrapper">
        <div class="filter"></div>
        <div class="background" style="background-image: url('./8.jpg')"></div>
       <header>
           <div class="h-wrap">
               <h1>Laffe Trans</h1>
        </div>
            <div class="navbar">
                <ul>
                    <li v-for="(link, index) in links" :key="index">
                        <a v-if="link.name !== 'O nas'" @click="scroll(link.href)"> {{ link.name }} </a>
                        <a v-else @click="clickAbout" > {{ link.name }} </a>
                    </li>
                </ul>
            </div>
       </header>
    </div>
</template>

<script>

export default {

    name: 'Homepage',
    data() {
        return {
            links: [
                { name: 'Oferta', href: 'offer-wrapper' },
                { name: 'O nas', href: 'about-wrapper' },
                { name: 'Kontakt', href: 'contact-wrapper' },
            ]        }
    },
    methods: {
        clickAbout() {
            this.$emit('clickedAbout');
        },
        scroll(ref) {
            const scrollElement = document.querySelector(`.${ref}`);
            scrollElement.scrollIntoView({
                behavior: 'smooth',
                clock: 'end'
            })
        }
    }
}
</script>

<style scoped>

    @keyframes clipEntrence {
        0% {
            -webkit-clip-path: polygon(0 0, 100% 0%, 100% 100%, 0% 100%);
            clip-path: polygon(0 0, 100% 0%, 100% 100%, 0% 100%);
        }

        50% {
            -webkit-clip-path: polygon(70% 0, 100% 0%, 30% 100%, 0% 100%);
            clip-path: polygon(70% 0, 100% 0%, 30% 100%, 0% 100%);
        }

        100% {
            -webkit-clip-path: polygon(50% 0, 100% 0%, 50% 100%, 0% 100%);
            clip-path: polygon(50% 0, 100% 0%, 50% 100%, 0% 100%);
        }
    }

    .homepage-wrapper {
        width: 100vw;
        height: 100vh;
        color: #fff;
        border-bottom: 2px solid #a0a0a0;
    }

    .filter,
    .background {
        position: absolute;
        top: 0;
        left: 0;
        width: 100vw;
        height: 100vh;
    }

    .background {
        background-size: cover;
        animation: clipEntrence 1.5s ease-in-out;
        -webkit-clip-path: polygon(50% 0, 100% 0%, 50% 100%, 0% 100%);
        clip-path: polygon(50% 0, 100% 0%, 50% 100%, 0% 100%);
    }

    .filter {
        background-color: var(--main-background-color);
        z-index: -1;
    }

    header {
        z-index: +1;
        animation: fadeIn 1s ease-in-out;

    }

    h1 {
        font-size: 6rem;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        text-align: center;
        text-shadow: -1px 0 black, 0 1px black, 1px 0 black, 0 -1px black;

    }

    h1::before,
    h1::after {
        content: '';
        position: absolute;
        width: 60%;
        height: 100%;
    }

    h1::before {
        border: 5px solid #fff;
        position: absolute;
    }

    h1::after {
        border: 5px solid black;
        position: absolute;
        top: 0;
        left: 40%;
        z-index: -1;
    }

    ul {
        list-style-type: none;
        display: flex;
        padding: 5%;
    }

    ul > li {
        padding: 10px 20px;
        font-size: 1.6rem;
        display: block;
        position: relative;
        margin: 0 10px 0 10px;
        cursor: pointer;
        overflow-x: hidden;

    }

    li::before {
        content: '';
        width: 100%;
        height: 2px;
        background-color: #fff;
        position: absolute;
        bottom: 0;
        transform: translateX(-120%);
        transition: transform .2s ease-in-out;
    }

    li:hover:before {
        transform: translateX(0);
    }

        @media screen and (max-width: 520px) {

        ul {
            position: absolute;
            bottom: 20%;
            width: 100vw;
        }

}

</style>