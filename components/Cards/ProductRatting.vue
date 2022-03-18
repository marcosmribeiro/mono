<template>
  <div class="product-ratting">
    <v-btn
      :href="link.fashion.detail"
      class="btn-wrap"
      text
    >
      <span class="figure">
        <img :src="img" alt="text" />
      </span>
    </v-btn>
  </div>
</template>

<style lang="scss" scoped>
@import './card-style';
</style>

<script>
import link from '~/static/text/link'

export default {
  data() {
    return {
      link: link
    }
  },
  props: {
    img: {
      type: String,
      required: true
    },
    text: {
      type: String,
      required: true
    },
    price: {
      type: String,
      required: true
    },
    ratting: {
      type: Number,
      required: true
    }
  }
}
</script>
