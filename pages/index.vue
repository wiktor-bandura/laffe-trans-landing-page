<template>
  <div id="app">
    <Homepage @clickedAbout="isClickedAbout"/>
    <About  :notHidden="isClicked" @isClosed="checkClose"/>
    <Offer :services="services"/>
    <Galery/>
    <Contact />

    <footer>
      <p>
        &copy; {{ getCurrentYear() }} Laffe Trans All rights reserved.
        <a target="_blank" href="https://icons8.com/icons/set/tow-truck">Tow Truck</a>, <a target="_blank" href="https://icons8.com/icons/set/truck">Truck</a> and other icons by <a target="_blank" href="https://icons8.com">Icons8</a>
      </p>
    </footer>
  </div>
</template>

<script>

import Homepage from '@/components/Homepage'
import About from '@/components/About'
import Offer from '@/components/Offer'
import Contact from '@/components/Contact'
import Galery from '@/components/Galery'

export default {
  name: 'App',
  data() {
    return {
      isClicked: false,
      services: [
                {
                    name: 'Transport pojazdów Polska - Europa',
                    iconHref: 'icons8-fiat-500-100.png' },
                {
                    name: 'Pomoc drogowa - 24h',
                    iconHref: 'icons8-under-construction-100.png'},
                {
                    name: 'Odpalanie awaryjne',
                    iconHref: 'icons8-car-rental-100.png'},
                {
                    name: 'Odbiór pojazdów z aukcji',
                    iconHref: 'icons8-auction-100.png'},
                {
                    name: 'Holowanie',
                    iconHref: 'icons8-tow-truck-100.png'},
                {
                    name: 'Wyciąganie z rowów',
                    iconHref: 'icons8-crashed-car-100.png'},
                {
                    name: 'Przeprowadzki',
                    iconHref: 'icons8-empty-box-100.png'},
                {
                    name: 'Przewóz paczek PL/DE/NL/B',
                    iconHref: 'icons8-truck-100.png'}
            ]
    }
  },
  components: {
    Homepage,
    About,
    Offer,
    Galery,
    Contact
  },
  methods: {
    isClickedAbout  () {
      this.isClicked = !this.isClicked;
    },
    checkClose() {
      this.isClicked = !this.isClicked;
    },
    getCurrentYear() {
      const now = new Date();
      return now.getFullYear();
    }
  }
}
</script>

<style>

    #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  footer {
    background-color: var(--main-background-color);
    color: #fff;
    font-size: 18px;
    text-align: center;
    padding: 10px 20px;
  }

  footer a {
    color: #fff;
    font-weight: bold;
  }

</style>
