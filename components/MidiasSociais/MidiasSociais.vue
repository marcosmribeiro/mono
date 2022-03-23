<template>
  <div>
    <!-- <v-btn icon >
      <img :src="fbIcon" style="width: 30px;" />
    </v-btn> -->
    <v-btn icon href="https://www.instagram.com/restaurantemono/">
      <img :src="itgIcon" style="width: 30px;" />
    </v-btn>
    <v-btn icon href="https://wa.me/5521998559595">
      <img :src="whatsappIcon" style="width: 30px;" />
    </v-btn>
  </div>
</template>

<script>
import fbIcon from '~/static/images/mono/fb-icon.png'
import itgIcon from '~/static/images/mono/itg-icon.png'
import whatsappIcon from '~/static/images/mono/whatsapp-icon.png'


export default {
  data: () => ({
    fbIcon: fbIcon,
    itgIcon: itgIcon,
    whatsappIcon: whatsappIcon,
  })

}


</script>