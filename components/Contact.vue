<template>
    <div class="contact-wrapper">
        <h2 data-aos="zoom-out">Skontaktuj się z nami</h2>
        <h3 data-aos="zoom-out">Znajdź nas na facebook'u, napisz maila lub po prostu zadzwoń. <br> Kliknij, w ikonę, aby się skontaktować. </h3>

        <hr>
        <div class="contacts" data-aos="fade-right">

            <a class="contact" v-for="{ icon, href } in contacts" :key="icon" :href="`${href}`" target="_blank">
                <div :style="{ backgroundImage: `url('./${icon}')`}"></div>

            </a>

        </div>
    <hr>
    </div>
</template>

<script>
export default {
    name: 'Contact',
    data() {
        return {
            contacts: [
                {
                    icon: 'icons8-facebook-80.png',
                    href: 'https://www.facebook.com/Laffe-Trans-105774571090786'                },
                {
                    icon: 'icons8-composing-mail-80.png',
                    href: 'mailto:msi20@wp.pl'                },
                {
                    icon: 'icons8-phone-80.png',
                    href: 'tel:+48732708138'
                }
            ]
        }
    },
}
</script>

<style scoped>
    .contact-wrapper {
        background-color: var(--main-background-color);
        color: #fff;
        padding: 20px;
    }

    .contacts {
        width: 100%;
        height: 300px;
        display: flex;
        align-items: center;
        justify-content: space-around;
    }

    .contact {
        width: 200px;
        height: 200px;
        border: 3px solid #fff;
        border-radius: 50%;
        position: relative;
        overflow: hidden;
    }

    .contact div {
        width: 100%;
        height: 100%;
        background-position: center;
        background-repeat: no-repeat;
        z-index: 3;
        position: absolute;
    }

    .contact::before {
        content: '';
        width: 100%;
        height: 100%;
        position: absolute;
        background-color: var(--secondary-color);
        transform: translateY(100%);
        transition: transform 0.2s ease-in-out;
        border-radius: 50%;
        z-index: 2;
    }

    .contact:hover {
        border: 2px dashed #fff;
    }

    .contact:hover::before {
        transform: translateY(0);
    }


    @media screen and (max-width: 520px) {
        .contact {
            width: 105px;
            height: 105px;
        }

        .contact::before {
            display: none;
        }
    }
</style>