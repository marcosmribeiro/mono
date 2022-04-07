<template>
  <v-btn
    text
    class="simple-thumb"
    @click="abrirLink(link)"
  >
    <span class="wrap">
      <span class="figure">
        <img :src="img" alt="title" style="height: 170%; overflow: visible;" />
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
  },
  methods: {
    abrirLink(link) {
      window.open(link, '_blank').focus();
    }
  }

}
</script>
