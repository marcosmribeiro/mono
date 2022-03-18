<template>
  <div class="root">
    <title-main align="center" primary="MONO NO INSTAGRAM" class="titulo" />
    <div class="carousel-wrap justify-center">
      <!-- <v-btn class="nav prev" @click="slickPrev">
        <v-icon>mdi-arrow-left</v-icon>
      </v-btn>
      <v-btn class="nav next" @click="slickNext">
        <v-icon>mdi-arrow-right</v-icon>
      </v-btn> -->
      <div v-if="loaded">
        <slick
          ref="slider"
          :options="slickOptions"
        >
          <div
            v-for="(item, index) in dataProducts"
            :key="index"
            class="item"
          >
            <simple-thumb-card
              :img="item.img"
            />
          </div>
        </slick>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import './instagram.scss';
</style>

<script>
import imgAPI from '~/static/images/imgAPI'
import Title from '../Title'
import SimpleThumbCard from '../Cards/SimpleThumb'

const dataProducts = [
  {
    img: imgAPI.instagram[0]
  },
  {
    img: imgAPI.instagram[1]
  },
  {
    img: imgAPI.instagram[2]
  },
  {
    img: imgAPI.instagram[3]
  },
  {
    img: imgAPI.instagram[4]
  },
  {
    img: imgAPI.instagram[5]
  },
  {
    img: imgAPI.instagram[2]
  },
  {
    img: imgAPI.instagram[4]
  }
]

export default {
  components: {
    'title-main': Title,
    SimpleThumbCard,
    Slick: () => import('vue-slick')
  },
  data() {
    return {
      loaded: false,
      dataProducts: dataProducts,
      slickOptions: {
        dots: true,
        speed: 500,
        slidesToShow: 6,
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
              slidesToShow: 2,
              slidesToScroll: 2
            }
          }
        ]
      }
    }
  },
  mounted() {
    this.loaded = true
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
