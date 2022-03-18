<template>
  <div class="product-ratting">
    <v-row class="align-center">
        <v-col>
          <span class="figure">
            <img :src="img" alt="text" />
          </span>
        </v-col>
        <v-col>
            <p class="text-h4 titulo-card text-center">
                {{ titulo }}
            </p>
            <p class="text-center texto-card" style="line-height: 2.5;">
                <span v-html="texto"></span>
            </p>
        </v-col>
    </v-row>
  </div>
</template>

<style lang="scss" scoped>
@import './card-style';
.sub-titulo {
    color: #B6B6B6;
  }
  .sub-titulo-2 {
    color: #606060;
  }
</style>

<script>
import imgAPI from '~/static/images/imgAPI'


export default {
  data() {
    return {
        imgAPI: imgAPI
    }
  },
  props: {
    img: {
      type: String,
      required: true
    },
    texto: {
      type: String,
      required: true
    },
    titulo: {
      type: String,
      required: true
    },
  }
}
</script>
