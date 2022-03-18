<template>
  <div class="root">
    <v-container :class="{ 'fixed-width': isDesktop }">
      <v-row class="spacing3">
        <v-col md="3" cols="12">
          <title-main
            :align="isMobile ? 'center' : 'left'"
            primary="New"
            secondary="Arrivals"
          />
          <p class="use-text-paragrpah">
            lorem inpsu dollor
          
          </p>
        </v-col>
        <v-col md="3" sm="4" cols="12">
          <product-ratting-card
            :img="imgAPI.fashion[11]"
            :ratting="4"
            text="It is a long established"
            price="$90.00"
          />
        </v-col>
        <v-col md="3" sm="4" cols="12">
          <product-ratting-card
            :img="imgAPI.fashion[12]"
            :ratting="5"
            text="It is a long established"
            price="$90.00"
          />
        </v-col>
        <v-col md="3" sm="4" cols="12">
          <product-ratting-card
            :img="imgAPI.fashion[13]"
            :ratting="5"
            text="It is a long established"
            price="$90.00"
          />
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<style lang="scss" scoped>
@import './new-products-style.scss';
</style>

<script>
import imgAPI from '~/static/images/imgAPI'
import Title from '../Title'
import ProductRattingCard from '../Cards/ProductRatting'

export default {
  components: {
    'title-main': Title,
    ProductRattingCard
  },
  data() {
    return {
      imgAPI: imgAPI
    }
  },
  computed: {
    isDesktop() {
      const mdUp = this.$store.state.breakpoints.mdUp
      return mdUp.indexOf(this.$mq) > -1
    },
    isMobile() {
      const xsDown = this.$store.state.breakpoints.xsDown
      return xsDown.indexOf(this.$mq) > -1
    }
  }
}
</script>
