<template>
  <div class="product-ratting">
    <v-btn
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
