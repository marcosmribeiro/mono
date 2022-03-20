<template>
  <div class="pt-0 cor-fundo">
    <v-row>
        <v-col md="6" class="pb-10 order-last order-md-first">
            <p class="d-none d-md-block" style="height: 150px"></p>
            <p class="text-h4 titulo-take-away text-center">
                FAÇA SEU<br />PEDIDO
            </p>
            <p class="text-center">
                <v-btn
                  x-large
                  rounded
                  class="cardapio"
                  href="https://jotaja.com/?pedido=mono"
                  target="_blank"
                >
                  Confira o cardápio aqui
                </v-btn>
            </p>
        </v-col>
        <v-col md="6" class="pt-0 order-first order-md-last">
            <img
              :src="imgTakeAway"
              alt="take away"
            >
        </v-col>
    </v-row>
  </div>
</template>

<script>
import imgTakeAway from '~/static/images/mono/embalagem-mao-1.png'
export default {
  name: 'TakeAway',
  data () {
    return {
        imgTakeAway: imgTakeAway
    }
  }
}
</script>

<style lang="scss" scoped>
  @import './take-away.scss';
</style>
