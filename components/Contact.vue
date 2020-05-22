<template>
    <div class="contact-wrapper">
        <h2 data-aos="zoom-out">Skontaktuj się z nami</h2>

       <div data-aos="fade-up">
            <div class="phone-wrap">
            <p> <b> Nr telefonu: </b> </p>
            <a :href="number">
                {{ number }}
            </a>
            <a :href="number">
                <div :style="{ backgroundImage: `url('./${phoneIcon}')` }"></div>
            </a>
        </div>

        <div class="mail-wrap">
            <p> <b> Adres e-mail: </b> </p>
            <a :href="`mailto:${emailAdress}`">
                 {{ emailAdress }}
            </a>
            <a :href="`mailto:${emailAdress}`">
                <div :style="{ backgroundImage: `url('./${emailIcon}')` }"></div>
            </a>
        </div>
       </div>
    </div>
</template>

<script>
export default {
    name: 'Contact',
    data() {
        return {
            number: '+48732708138',
            emailAdress: 'msi20@wp.pl',
            phoneIcon: 'icons8-phone-80.png',
            emailIcon: 'icons8-composing-mail-80.png'
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

    .phone-wrap,
    .mail-wrap {
        display: flex;
        margin: 30px;
    }

    p, a {
        display: block;
        box-sizing: border-box;
        height: 50px;
        display: flex;
        justify-content: center;
        align-items: center;
        border: 1px solid #fff;
        padding: 15px;
    }

    p {
        letter-spacing: 1px;
    }

    a {
        text-decoration: none;
        color: white;
        transition: all .2s ease;
        letter-spacing: 3px;
    }

    a:hover {
        background-color: #6d6969;
    }

    .phone-wrap div,
    .mail-wrap div {
        width: 30px;
        height: 30px;
        padding: 20px;
        background-position: center;
        background-size: cover;
        background-repeat: no-repeat;
    }

    .phone-wrap > p,
    .mail-wrap > p {
        border-top-left-radius: 13px;
        border-bottom-left-radius: 13px;
        border-right: none;
    }

    a:last-child {
        border-top-right-radius: 13px;
        border-bottom-right-radius: 13px;
        border-left: none;
    }

</style>