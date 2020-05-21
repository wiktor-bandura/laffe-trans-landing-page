<template>
    <div class="contact-wrapper">
        <h2>Skontaktuj się z nami</h2>

        <p>Nr telefonu:</p>
        <a :href="number"> {{ number }} </a>

        <p>Adres e-mail: </p>
        <a :href="`mailto:${emailAdress}`"> {{ emailAdress }} </a>
    </div>
</template>

<script>
export default {
    name: 'Contact',
    data() {
        return {
            number: '+48732708138',
            emailAdress: 'msi20@wp.pl'
        }
    }
}
</script>

<style scoped>
    .contact-wrapper {
        height: 300px;
        background-color: #282e2e;
    }
</style>