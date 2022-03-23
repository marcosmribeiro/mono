<template>
  <div class="root">
    <div class="video" align="center">
      <div class="overlay" />
      <img v-if="!play" :src="videoPlaceholder" class="placeholder" alt="cover" />
      <div class="rwd-video">
        <youtube
          :video-id="videoId"
          :player-vars="playerVars"
          :width="1080"
          :height="720"
          ref="youtube"
          @ready="onReady"
          @playing="playing"
          @ended="ended"
        />
      </div>
      <div class="caption">
        <v-container class="max-md">
          <hidden point="mdDown">
            <v-btn
              v-if="play"
              icon
              class="btn-play"
              @click="togglePause()"
            >
              <i v-if="playCtrl" class="ion-ios-pause-outline" />
              <i v-else class="ion-ios-play-outline" />
            </v-btn>
          </hidden>
        </v-container>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import './banner-style.scss';
</style>

<script>
import videoPlaceholder from '~/static/images/mono/video_placeholder.jpg'
import youtube from '~/youtube'
import Hidden from '../Hidden'

export default {
  components: {
    Hidden
  },
  data() {
    return {
      videoPlaceholder: videoPlaceholder,
      loaded: false,
      videoId: 'Vtz6W6lCyTo',
      playerVars: {
        autoplay: 1,
        controls: 0,
        rel: 0,
        showinfo: 0,
        mute: 1,
        origin: 'https://www.youtube.com'
      },
      yt: youtube,
      play: false,
      playCtrl: true,
    }
  },
  mounted() {
    this.loaded = true
  },
  methods: {
    onReady() {
      this.player.playVideo()
    },
    playing() {
      this.play = true
      this.playCtrl = true
    },
    ended() {
      this.player.playVideo()
    },
    togglePause() {
      this.playCtrl = !this.playCtrl
      if (this.playCtrl) {
        this.player.playVideo()
      } else {
        this.player.pauseVideo()
      }
    }
  },
  computed: {
    player() {
      return this.$refs.youtube.player
    },
    isDesktop() {
      const lgUp = this.$store.state.breakpoints.lgUp
      return lgUp.indexOf(this.$mq) > -1
    },
    isMobile() {
      const mdDown = this.$store.state.breakpoints.mdDown
      return mdDown.indexOf(this.$mq) > -1
    }
  }
}
</script>
