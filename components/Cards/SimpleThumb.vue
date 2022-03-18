<template>
  <v-btn
    :href="link.fashion.detail"
    text
    class="simple-thumb"
  >
    <span class="wrap">
      <span class="figure">
        <img :src="img" alt="title" />
      </span>
    </span>
  </v-btn>
</template>

<style lang="scss" scoped>
@import './card-style.scss';
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
    }
  }
}
</script>
