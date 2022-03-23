<template>
  <footer class="root" style="background-color: #414042;">
    <v-container class="max-lg pt-10" style="background-color: transparent;">
      <div class="logo">
        <img :src="logo" alt="logo" />
      </div>
      
      <div class="mb-10">
        <midias-sociais />
      </div>

      <v-divider dark/>
    </v-container>
    <div class="texto-rodape">
      <p class="body-2 text-center">
        Endereço Delivery - Take Away:<br />
        R. Rainha Guilhermina, 95A - Leblon, Rio de Janeiro - RJ, 22441-120.
      </p>
      <p class="body-2 text-center my-5">
        Copyright · MONO · Todos direitos reservados 2022
      </p>
    </div>
  </footer>
</template>

<style scoped lang="scss">
@import './footer-style';
</style>

<script>
import logo from '~/static/images/mono/mono-logo-branco.png'
import fbIcon from '~/static/images/mono/fb-icon.png'
import itgIcon from '~/static/images/mono/itg-icon.png'
import whatsappIcon from '~/static/images/mono/whatsapp-icon.png'
import brand from '~/static/text/brand'
import menu from '../Header/menu'
import MidiasSociais from '~/components/MidiasSociais'

export default {
  data: () => ({
    logo: logo,
    brand: brand,
    menu: menu,
    fbIcon: fbIcon,
    itgIcon: itgIcon,
    whatsappIcon: whatsappIcon,
  }),
  components: {
    MidiasSociais
  }
}
</script>
