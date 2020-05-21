<template>
  <div id="app">
    <Homepage @clickedAbout="isClickedAbout"/>
    <Offer :services="services"/>
    <About  :notHidden="isClicked" @isClosed="checkClose"/>
    <Contact />

    <footer> &copy; 2020 Laffe Trans All rights reserved.
            <a target="_blank" href="https://icons8.com/icons/set/tow-truck">Tow Truck</a>, <a target="_blank" href="https://icons8.com/icons/set/truck">Truck</a> and other icons by <a target="_blank" href="https://icons8.com">Icons8</a>
    </footer>
  </div>
</template>

<script>

import Homepage from '@/components/Homepage'
import About from '@/components/About'
import Offer from '@/components/Offer'
import Contact from '@/components/Contact'

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
    Contact
  },
  methods: {
    isClickedAbout  () {
      this.isClicked = !this.isClicked;
    },
    checkClose() {
      this.isClicked = !this.isClicked;
    }
  }
}
</script>

<style>
  * {
    margin: 0;
    padding: 0;
  }

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
