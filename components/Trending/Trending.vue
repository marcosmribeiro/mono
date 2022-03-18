<template>
  <div class="root">
    <hidden point="xsDown">
      <div class="grid-25">
        <img :src="imgAPI.fashion[8]" alt="trending" />
        <v-btn text class="overlay">
          <h5 class="headline">Autumn Show</h5>
        </v-btn>
      </div>
      <div class="grid-50">
        <img :src="imgAPI.fashion[9]" alt="trending" />
        <v-btn text class="overlay">
          <h5 class="headline">New Trending</h5>
          <h3 class="display-2">2020</h3>
        </v-btn>
      </div>
      <div class="grid-25">
        <img :src="imgAPI.fashion[10]" alt="trending" />
        <v-btn text class="overlay">
          <h5 class="headline">Man Collection</h5>
        </v-btn>
      </div>
    </hidden>
    <hidden v-if="loaded" point="smUp">
      <slick
        ref="slick"
        :options="slickOptions"
      >
        <div>
          <div class="grid-25">
            <img :src="imgAPI.fashion[8]" alt="trending" />
            <v-btn text class="overlay">
              <h5  class="headline">Autumn Show</h5>
            </v-btn>
          </div>
        </div>
        <div>
          <div class="grid-50">
            <img :src="imgAPI.fashion[9]" alt="trending" />
            <v-btn text class="overlay">
              <h5 class="headline">New Trending</h5>
              <h3 class="display-2">2020</h3>
            </v-btn>
          </div>
        </div>
        <div>
          <div class="grid-25">
            <img :src="imgAPI.fashion[10]" alt="trending" />
            <v-btn text class="overlay">
              <h5 class="headline">Man Collection</h5>
            </v-btn>
          </div>
        </div>
      </slick>
    </hidden>
  </div>
</template>

<style lang="scss" scoped>
@import './trending-stye.scss';
</style>

<script>
import imgAPI from '~/static/images/imgAPI'
import Hidden from '../Hidden'

export default {
  components: {
    Hidden,
    Slick: () => import('vue-slick')
  },
  data() {
    return {
      loaded: false,
      imgAPI: imgAPI,
      slickOptions: {
        dots: false,
        speed: 500,
        slidesToShow: 1,
        arrows: false,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 7000
      }
    }
  },
  mounted() {
    this.loaded = true
  }
}
</script>
