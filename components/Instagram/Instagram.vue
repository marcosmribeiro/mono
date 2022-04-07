<template>
  <div class="root">
    <p class="text-h4 titulo text-center mx-3">MONO NO INSTAGRAM</p>
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
      items: undefined,
      instagramToken: 'IGQVJWSExsTVVoY3paWmxqQ3ExWjZAUWE1NM2hXNW1ZAcjhQaDB4alA0ODQ3WExma2RfUU9QRUwyRF81SEJ2WGxyUXJ3VXhOeS15OFpmdXQ1SU5MRjBtTlVDRlJrbkMyVVFhN19xLVVwU3dzTnRrZAktPSwZDZD',
      instagramMaxImages: 6,
      slickOptions: {
        dots: true,
        speed: 500,
        slidesToShow: 4,
        arrows: false,
        slidesToScroll: 4,
        autoplay: true,
        autoplaySpeed: 2000,
        infinite: true,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 4,
              slidesToScroll: 4,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 860,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2
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
  
  async mounted() {
    this.items = JSON.parse(window.localStorage.getItem("images") || "[]")
    this.loaded = true;
  },
  methods: {
    slickNext() {
      this.$refs.slider.next()
    },
    slickPrev() {
      this.$refs.slider.prev()
    },
    async buscarImagens() {
      const axios = require('axios').default;
      let url = 'https://graph.instagram.com/me/media/?access_token=' + this.instagramToken + '&fields=media_url,media_type,caption,permalink';

      let response = await axios.get(url)
      
      var imgCounter = 0;
      response.data.data.forEach(post => {
        imgCounter ++;
        if (imgCounter <= this.instagramMaxImages && post.media_type == 'IMAGE') {
          if (!this.items) {
            this.items = [{img: post.media_url, link: post.permalink}]
          } else {
            this.items.push({
              img: post.media_url,
              link: post.permalink
            })
          }
        }
      });

    }
  }
}
</script>
