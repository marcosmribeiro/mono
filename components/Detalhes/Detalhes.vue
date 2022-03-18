<template>
  <div class="root">
    <v-container :class="{ 'fixed-width': isDesktop }">
      <div class="product-ratting">
        <v-row class="align-center">
          <v-col>
            <div class="bg" :style="'background-image: url(' + imgBg1 + ')'">
              <div class="fg">
                <img 
                  :src="imgFg1"
                  alt="text"
                  :style="'margin-top: 15px; margin-left: ' + posicao1 +'px;'"
                />
              </div>
            </div>
          </v-col>
          <v-col>
            <p class="text-h4 titulo-card text-center">
                DETALHES
            </p>
            <p class="text-center texto-card" style="line-height: 2.5;">
                <span v-html="textoDetalhes1"></span>
            </p>
          </v-col>
        </v-row>

        <v-row class="align-center">
          <v-col>
            <p class="text-h4 titulo-card text-center">
                EXPERIÊNCIA MONO
            </p>
            <p class="text-center texto-card" style="line-height: 2.5;">
                <span v-html="textoDetalhes2"></span>
            </p>
          </v-col>
          <v-col>
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

        <v-row class="align-center">
          <v-col>
            <div class="bg" :style="'background-image: url(' + imgBg3 + '); margin-left: 25px;'">
              <div class="fg">
                <img 
                  :src="imgsComposicao3[2]"
                  alt="text"
                  :style="'margin-top: ' + posicao33 +'px; margin-left: 95px; position: absolute; z-index: 1;'"
                />
                <img 
                  :src="imgsComposicao3[1]"
                  alt="text"
                  :style="'margin-top: ' + posicao32 +'px; margin-left: 150px; position: absolute; z-index: 1;'"
                />
                <img 
                  :src="imgsComposicao3[0]"
                  alt="text"
                  :style="'margin-top: ' + posicao31 +'px; margin-left: 85px; position: absolute; z-index: 1;'"
                />
                <img 
                  :src="imgFg3"
                  alt="text"
                  :style="'margin-top: 25px; margin-left: -58px; max-width: 462px;'"
                />
              </div>
            </div>
          </v-col>
          <v-col>
            <p class="text-h4 titulo-card text-center">
                MOMENTO MONO
            </p>
            <p class="text-center texto-card" style="line-height: 2.5;">
                <span v-html="textoDetalhes3"></span>
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
  name: 'Detalhes',
  data () {
    return {
      navbarOffset: 0,
      
      posicao1: -430,
      posicaoInicial1: -430,
      imgFg1: imgFg1,
      imgBg1: imgBg1,
      imgsComposicao1: [],
      textoDetalhes1: "Nossa cozinha é equipada com as melhores mentes<br />que produzem em cada peça, detalhes que alimentam<br />os sentidos",
      
      posicao2: 680,
      posicaoInicial2: 680,
      imgFg2: imgFg2,
      imgBg2: imgBg2,
      imgsComposicao2: [],
      textoDetalhes2: "Proporcionamos uma experiência<br />que transcende os sabores e texturas<br />da culinária nopônica.",
      
      posicao31: -30,
      posicaoInicial31: -30,
      posicao32: -120,
      posicaoInicial32: -120,
      posicao33: -160,
      posicaoInicial33: -160,
      imgFg3: imgFg3,
      imgBg3: imgBg3,
      imgsComposicao3: [img32, img31, img33],
      textoDetalhes3: "Acreditamos que tempo é vida,<br />logo, oferecemos uma mistura de boas<br />sensações para breves momentos<br />serem desfrutados de forma plena.",
    }
  },
  components: {
    // Card
  },
  methods: {
    runOnScroll () {
      if (this.posicao1 < 50 || (window.pageYOffset - 600) < 50) {
        let newPosicao1 = this.posicaoInicial1 + (window.pageYOffset - 600);
        if (newPosicao1 <= 50) {
          this.posicao1 = newPosicao1;
        }
      }
      
      if (this.posicao2 > 130 || (window.pageYOffset - 1030) > 130) {
        let newPosicao2 = this.posicaoInicial2 - (window.pageYOffset - 1030);
        if (newPosicao2 >= 130) {
          this.posicao2 = newPosicao2;
        }
      }
      
      if (window.pageYOffset <= 1400) {
        this.posicao31 = -30;
        this.posicao33 = -160;
        this.posicao32 = -120;
      }
      else {
        if (window.pageYOffset > 1480 && (this.posicao31 < 45 || (window.pageYOffset - 1480) < 45)) {
          let newPosicao31 = this.posicaoInicial31 + (window.pageYOffset - 1480);
          console.log(newPosicao31, window.pageYOffset - 1500)
          if (newPosicao31 <= 45 && newPosicao31 >= this.posicaoInicial31) {
            this.posicao31 = newPosicao31;
          }
        }
      
        if (window.pageYOffset > 1450 && (this.posicao32 < -15 || (window.pageYOffset - 1850) < 0)) {
          let newPosicao32 = this.posicaoInicial32 + (window.pageYOffset - 1450);
          if (newPosicao32 <= -15 && newPosicao32 >= this.posicaoInicial33) {
            this.posicao32 = newPosicao32;
          }
        }
      
        if (window.pageYOffset > 1400 && (this.posicao32 < -15 || (window.pageYOffset - 1850) < 0)) {
          var diferenca = (window.pageYOffset - 1400) * 0.7
          let newPosicao33 = this.posicaoInicial33 + diferenca;
          this.posicao33 = newPosicao33;
          if (newPosicao33 <= -55  && newPosicao33 >= this.posicaoInicial33) {
            this.posicao33 = newPosicao33;
          } else {
            this.posicao33 = -55;
          }
        }
      }

    }
  },
  beforeMount () {
    window.addEventListener('scroll', this.runOnScroll);
  },
  beforeDestroy() {
    window.removeEventListener('scroll', this.runOnScroll);
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


<style lang="scss" scoped>
  @import './detalhes.scss';
</style>
