<template>
  <div class="pa-5">
    <p class="text-h3 text-center">
      <img
        :src="imgConceitoKanji"
        alt="take away"
      >
    </p>
    <p class="text-h4 titulo-conceito text-center">
      MONO - NO - AWARE
    </p>

    <p class="texto-conceito mt-10 text-center">
      Mono No Aware é um instigante conceito milenar que nos lembra da brevidade da vida.
    </p>
    <p class="texto-conceito text-center">
      Esta lembrança se bem aproveitada, nos motiva a agir o melhor que podemos no presente momento,
    </p>
    <p class="texto-conceito text-center">
      desde saborear um delicioso sushi ou iniciar um novo ciclo.
    </p>
  </div>
</template>

<script>
import imgConceitoKanji from '~/static/images/mono/img-conceito-kanji.png'
export default {
  name: 'Conceito',
  data () {
    return {
      imgConceitoKanji: imgConceitoKanji
    }
  }
}
</script>

<style lang="scss" scoped>
  @import './conceito.scss';
</style>
