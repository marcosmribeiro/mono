<template>
  <v-btn
    :href="link"
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

export default {
  data() {
    return {
    }
  },
  props: {
    img: {
      type: String,
      required: true
    },
    link: {
      type: String,
      required: true
    }
  }
}
</script>
