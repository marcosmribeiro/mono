<template>
  <div>
    <div class="main-wrap">
      <header-main />
      <div class="container-wrap">
        <section id="home">
          <video-banner />
        </section>
        <section id="conceito" class="space-top">
          <conceito />
        </section>
        <section id="detalhes" class="space-top">
          <detalhes />
        </section>
        <section id="pedido" class="space-top">
          <take-away />
        </section>
        <section id="instagram" class="space-top-short">
          <instagram />
        </section>
      </div>
      <section id="footer" class="space-top">
        <footer-main />
      </section>
      <hidden point="mdDown">
        <page-nav />
      </hidden>
    </div>
  </div>
</template>

<style scoped lang="scss">
@import '~/assets/styles';

@function section-margin($margin) {
  @return $margin * 20;
}
.main-wrap {
  position: relative;
  width: 100%;
  overflow: hidden;
  .theme--dark & {
    background-color: $dark-background-default;
  }
  .theme--light & {
    background-color: $light-background-paper;
  }
}
.space-bottom {
  margin-bottom: section-margin(6px);
  @include breakpoints-down(sm) {
    margin-bottom: section-margin(3px);
  }
  @include breakpoints-down(xs) {
    margin-bottom: section-margin(2px);
  }
}
.space-bottom-short {
  margin-bottom: section-margin($spacing1 * 0.5);
}
.space-top {
  margin-top: section-margin(6px);
  @include breakpoints-down(sm) {
    margin-top: section-margin(3px);
  }
  @include breakpoints-down(xs) {
    margin-top: section-margin(2px);
  }
}
.space-top-short {
  margin-top: section-margin($spacing1 * 0.5);
  @include breakpoints-down(sm) {
    margin-top: section-margin(3px);
  }
  @include breakpoints-down(xs) {
    margin-top: section-margin(2px);
  }
}
.container-wrap {
  margin-top: -40px;
  > section {
    position: relative;
  }
}
</style>

<script>
import Header from '~/components/Header'
import VideoBanner from '~/components/VideoBanner'
import Conceito from '~/components/Conceito'
import Detalhes from '~/components/Detalhes'
import TakeAway from '~/components/TakeAway'
import Instagram from '~/components/Instagram'
import Footer from '~/components/Footer'
import Hidden from '~/components/Hidden'
import PageNav from '~/components/PageNav'
import brand from '~/static/text/brand'

export default {
  components: {
    'header-main': Header,
    VideoBanner,
    Conceito,
    Detalhes,
    TakeAway,
    Instagram,
    'footer-main': Footer,
    PageNav,
    Hidden
  },
  head() {
    return {
      title: brand.mono.name + ' - Home Page'
    }
  }
}
</script>
