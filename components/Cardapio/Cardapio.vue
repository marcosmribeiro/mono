<template>
  <div class="root">
    <v-container :class="{ 'fixed-width': isDesktop }">
      <div class="product-ratting">
        <v-row class="align-center">
          <v-col align="center">
            <div class="bg" :style="'background-image: url(' + imgBg1 + '); min-width: 300px; min-height: 349px;'">
              <div class="fg">
                <img 
                  :src="imgFg1"
                  alt="text"
                  :style="'margin-top: ' + posicao1 +'px; margin-left: ' + margem1 + 'px;'"
                />
              </div>
            </div>
          </v-col>
          <v-col align="center">
            <p class="text-h4 titulo-card text-center">
              DETALHES
            </p>
            <p class="text-center texto-card" style="line-height: 2.5;">
              {{ textoCardapio11 }}
            </p>
          </v-col>
        </v-row>

        <v-row class="align-center">
          <v-col align="center" class="order-last order-sm-first">
            <p class="text-h4 titulo-card text-center">
              EXPERIÊNCIA MONO
            </p>
            <p class="text-center texto-card" style="line-height: 2.5;">
              {{ textoCardapio21 }}
            </p>
          </v-col>
          <v-col align="center" style="min-width: 300px;">
            <div class="bg" :style="'background-image: url(' + imgBg2 + ')'">
              <div class="fg">
                <img 
                  :src="imgFg2"
                  alt="text"
                  :style="'margin-top: 15px; margin-left: ' + posicao2 +'px;'"
                />
              </div>
            </div>
          </v-col>
        </v-row>

        <v-row class="align-center" :style="margemCouve">
          <v-col align="center" >
            <div>
              <div class="fg">
                <img 
                  :src="imgsComposicao3[2]"
                  alt="text"
                  class="estiloCouve2"
                  :style="'margin-top: ' + posicao33 +'px; position: absolute; z-index: 1;'"
                />
                <img 
                  :src="imgsComposicao3[1]"
                  alt="text"
                  class="estiloCouve1"
                  :style="'margin-top: ' + posicao32 +'px; position: absolute; z-index: 1;'"
                />
                <img 
                  :src="imgsComposicao3[0]"
                  alt="text"
                  class="estiloCouve0"
                  :style="'margin-top: ' + posicao31 +'px;position: absolute; z-index: 1;'"
                />
                <img 
                  :src="imgFg3"
                  alt="text"
                  class="estiloCouve"
                />
              </div>
            </div>
          </v-col>
          <v-col align="center">
            <p class="text-h4 titulo-card text-center">
              MOMENTO MONO
            </p>
            <p class="text-center texto-card" style="line-height: 2.5;">
              {{ textoCardapio31 }}
            </p>
          </v-col>
        </v-row>

      </div>
    </v-container>
  </div>
</template>

<script>
import imgFg1 from '~/static/images/mono/tartar_wagyu_1.png'
import imgBg1 from '~/static/images/mono/tartar_wagyu_1_bg.png'
import imgFg2 from '~/static/images/mono/hashi_sushi_1.png'
import imgBg2 from '~/static/images/mono/hashi_sushi_1_bg.png'

import img31 from '~/static/images/mono/couve_bruxelas_1.png'
import img32 from '~/static/images/mono/couve_bruxelas_2.png'
import img33 from '~/static/images/mono/couve_bruxelas_3.png'
import imgFg3 from '~/static/images/mono/couve_bruxelas_bg_2.png'
import imgBg3 from '~/static/images/mono/couve_bruxelas_bg_1.png'

export default {
  name: 'Cardapio',
  data () {
    return {
      navbarOffset: 0,
      
      margem1: 0,
      posicao1: -70,
      posicaoInicial1: -70,
      imgFg1: imgFg1,
      imgBg1: imgBg1,
      imgsComposicao1: [],
      textoCardapio1: "Nossa cozinha é equipada com as melhores mentes<br />que produzem em cada peça, detalhes que alimentam<br />os sentidos",
      textoCardapio11: "Nossa cozinha é equipada com as melhores mentes que produzem em cada peça, detalhes que alimentam os sentidos",
      
      posicao2: 680,
      posicaoInicial2: 600,
      maxPosicao2: 65,
      imgFg2: imgFg2,
      imgBg2: imgBg2,
      imgsComposicao2: [],
      textoCardapio2: "Proporcionamos uma experiência<br />que transcende os sabores e texturas<br />da culinária nopônica.",
      textoCardapio21: "Proporcionamos uma experiência que transcende os sabores e texturas da culinária nopônica.",
      
      posicao31: 20,
      posicaoInicial31: 20,
      posicao32: -65,
      posicaoInicial32: -65,
      posicao33: -70,
      posicaoInicial33: -70,
      imgFg3: imgFg3,
      imgBg3: imgBg3,
      imgsComposicao3: [img32, img31, img33],
      textoCardapio3: "Acreditamos que tempo é vida,<br />logo, oferecemos uma mistura de boas<br />sensações para breves momentos<br />serem desfrutados de forma plena.",
      textoCardapio31: "Acreditamos que tempo é vida, logo, oferecemos uma mistura de boas sensações para breves momentos serem desfrutados de forma plena.",
      margemCouve: '',

      estiloCouve: '',
      offSetProduto1: 0,
      offSetProduto2: 0,
      offSetProduto3: 0,
    }
  },
  components: {
    // Card
  },
  methods: {
    pegarTamanhoDaTela() {
      return window.innerWidth
    },
    runOnScroll () {
      if (!this.isDesktop) {
        this.margem1 = 5;
        this.maxPosicao2 = 80;
        this.margemCouve = "margin-top: 50px;";

        this.offSetProduto1 = 300;
        this.offSetProduto2 = 1300;
        this.offSetProduto3 = 100;
      }

      if (this.posicao1 < 15 && window.pageYOffset > (800 - this.offSetProduto1)) {
        let newPosicao1 = this.posicaoInicial1 + (window.pageYOffset - (800 - this.offSetProduto1));
        if (newPosicao1 <= 15) {
          this.posicao1 = newPosicao1;
        }
      }

      if (this.posicao2 > this.maxPosicao2 || (window.pageYOffset - (1030 - this.offSetProduto1)) > this.maxPosicao2) {
        // let newPosicao2 = this.posicaoInicial2 - (window.pageYOffset - (1030 - this.offSetProduto1));
        let newPosicao2 = this.posicaoInicial2 - (window.pageYOffset - (this.posicaoInicial2 / this.maxPosicao2));
        if (newPosicao2 >= this.maxPosicao2) {
          this.posicao2 = newPosicao2;
        }
      }
      
      if (window.pageYOffset <= (1680 - this.offSetProduto1)) {
        this.posicao31 = 20;
        this.posicao33 = -70;
        this.posicao32 = -65;
      }
      else {
        if (window.pageYOffset > (1680 - this.offSetProduto1) && (this.posicao31 < 45 || (window.pageYOffset - (1680 - this.offSetProduto1)) < 45)) {
          let newPosicao31 = this.posicaoInicial31 + (window.pageYOffset - (1680 - this.offSetProduto1));
          if (newPosicao31 <= 45 && newPosicao31 >= this.posicaoInicial31) {
            this.posicao31 = newPosicao31;
          }
        }
      
        if (window.pageYOffset > (1680 - this.offSetProduto1) && (this.posicao32 < -15 || (window.pageYOffset - 1850) < 0)) {
          let newPosicao32 = this.posicaoInicial32 + (window.pageYOffset - (1680 - this.offSetProduto1));
          if (newPosicao32 <= -15 && newPosicao32 >= this.posicaoInicial33) {
            this.posicao32 = newPosicao32;
          }
        }
      
        if (window.pageYOffset > 1600 && (this.posicao32 < -15 || (window.pageYOffset - 1850) < 0)) {
          var diferenca = (window.pageYOffset - 1600) * 0.7
          let newPosicao33 = this.posicaoInicial33 + diferenca;
          this.posicao33 = newPosicao33;
          if (newPosicao33 <= -40  && newPosicao33 >= this.posicaoInicial33) {
            this.posicao33 = newPosicao33;
          } else {
            this.posicao33 = -40;
          }
        }
      }

    }
  },
  beforeMount () {
    window.addEventListener('scroll', this.runOnScroll);
    this.posicaoInicial2 = this.pegarTamanhoDaTela()
  },
  beforeDestroy() {
    window.removeEventListener('scroll', this.runOnScroll);
  },
  computed: {
    isDesktop() {
      const mdUp = this.$store.state.breakpoints.mdUp
      return mdUp.indexOf(this.$mq) > -1
    },
  }
}
</script>


<style lang="scss" scoped>
  @import './cardapio.scss';
</style>
