<template>
  <div class="root">
    <v-container :class="{ 'fixed-width': isDesktop }">
      <v-row class="spacing3">
        <v-col md="6" cols="12">
          <title-main
            :align="isMobile ? 'center' : 'left'" 
            primary="Top"
            secondary="Categories"
          />
        </v-col>
        <v-col md="3" sm="6" cols="12">
          <category-full-card
            :img="imgAPI.fashion[11]"
            title="Woman Shoes"
            total="24"
            background="eddacf"
          />
        </v-col>
        <v-col md="3" sm="6" cols="12">
          <category-full-card
            :img="imgAPI.fashion[12]"
            title="Woman bag"
            total="24"
            background="eddacf"
          />
        </v-col>
      </v-row>
      <v-row class="spacing3">
        <v-col md="6" cols="12" class="py-0">
          <category-half-card
            :img="imgAPI.fashion[13]"
            title="Men Casual"
            total="24"
            background="D9D8C9"
            type="top-over"
          />
          <v-row class="spacing3">
            <v-col md="6" sm="6" cols="12" >
              <category-full-card
                :img="imgAPI.fashion[14]"
                title="Men Watch"
                total="24"
                background="e7ddd9"
              />
            </v-col>
            <v-col md="6" sm="6" cols="12">
              <category-full-card
                :img="imgAPI.fashion[15]"
                title="Men Shoes"
                total="24"
                background="f2dede"
              />
            </v-col>
          </v-row>
        </v-col>
        <v-col md="6" cols="12" class="py-0">
          <category-half-card
            :img="imgAPI.fashion[16]"
            title="Woman Sport"
            total="24"
            background="f3f7bc"
            type="bottom-over"
          />
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<style lang="scss" scoped>
@import './categories-style.scss';
</style>

<script>
import imgAPI from '~/static/images/imgAPI'
import Title from '../Title'
import CategoryHalfCard from '../Cards/CategoryHalf'
import CategoryFullCard from '../Cards/CategoryFull'

export default {
  components: {
    CategoryFullCard,
    CategoryHalfCard,
    'title-main': Title
  },
  data() {
    return {
      imgAPI: imgAPI
    }
  },
  computed: {
    isDesktop() {
      const lgUp = this.$store.state.breakpoints.lgUp
      return lgUp.indexOf(this.$mq) > -1
    },
    isMobile() {
      const xsDown = this.$store.state.breakpoints.xsDown
      return xsDown.indexOf(this.$mq) > -1
    }
  }
}
</script>
