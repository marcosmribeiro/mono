<template>
  <div class="root">
    <p class="text-h4 titulo text-center">MONO NO INSTAGRAM</p>
    <div class="carousel-wrap justify-center">
      <div v-if="loaded">
        <slick
          id="slider-principal"
          ref="slider"
          :options="slickOptions"
        >
          <div
            v-for="(item, index) in items"
            :key="index"
            class="item"
          >
            <simple-thumb-card
              class="TESTE"
              style="min-height: 320px; min-width: 320px"
              :img="item.img"
              :link="item.link"
            />
          </div>
        </slick>
      </div>
      <div class="pt-5">
        <v-row justify="center">
          <v-col md="3" class="pb-10">
            <v-btn
              x-large
              rounded
              href="https://www.instagram.com/restaurantemono/"
              class="botao"
              style="margin-right: 15px;"
            >
              Veja mais
            </v-btn>
            <v-btn
              x-large
              rounded
              href="https://www.instagram.com/restaurantemono/"
              class="botao"
            >
              Siga Mono
            </v-btn>
          </v-col>
        </v-row>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import './instagram.scss';
</style>

<script>
import imgAPI from '~/static/images/imgAPI'
import SimpleThumbCard from '../Cards/SimpleThumb'


export default {
  components: {
    SimpleThumbCard,
    Slick: () => import('vue-slick')
  },
  data() {
    return {
      loaded: false,
      items: imgAPI.instagram,
      slickOptions: {
        dots: true,
        speed: 500,
        slidesToShow: 4,
        arrows: false,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 4000,
        infinite: true,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 4,
              slidesToScroll: 3,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      }
    }
  },
  mounted() {
    this.loaded = true;
  },
  methods: {
    slickNext() {
      this.$refs.slider.next()
    },
    slickPrev() {
      this.$refs.slider.prev()
    }
  }
}
</script>
