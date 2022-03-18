<template>
  <div class="main-wrap">
    <header-main invert />
    <main class="container-wrap">
      <v-row justify="center">
        <v-col sm="5" md="5" cols="12" class="px-6">
          <figure class="figure">
            <img :src="imgAPI.fashion[35]" alt="product" />
          </figure>
        </v-col>
        <v-col sm="7" md="5" cols="12" class="px-6">
          <h4 class="use-text-title2">
            Floral Plimsoll
          </h4>
          <p class="use-text-caption pb-2">
            {{ $t('fashionLanding.detail_id') }}
            :
            14210160762
          </p>
          <h4 class="price use-text-title2">
            $ 780.00
          </h4>
          <p class="desc text-paragraph">
            Lorem ipsum dolor sit amet enim. Etiam ullamcorper. Suspendisse a pellentesque dui, non felis. Maecenas malesuada elit lectus felis, malesuada ultricies.
          </p>
          <div class="size">
            {{ $t('fashionLanding.detail_size') }}
            <ul>
              <li>XS</li>
              <li>S</li>
              <li>M</li>
              <li>L</li>
              <li>XL</li>
            </ul>
          </div>
          <v-btn
            large
            block
            color="primary"
            href="#"
            class="button"
          >
            {{ $t('fashionLanding.detail_btn') }}
          </v-btn>
        </v-col>
      </v-row>
    </main>
    <section class="space-top">
      <footer-main />
    </section>
  </div>
</template>

<style lang="scss" scoped>
.container-wrap {
  padding: spacing(15, 0);
  @inlcude breakpoints-down(sm) {
    margin: spacing(10, 0);
  }
}

.figure {
  text-align: center;
  img {
    max-width: 100%;
  }
}

.price {
  margin-top: $spacing3;
}

.desc {
  margin-top: $spacing3;
}

.size {
  text-transform: uppercase;
  margin: spacing(3, 0);
  display: flex;
  justify-content: space-between;
  align-items: center;
  @include breakpoints-down(sm) {
    flex-direction: column;
    align-items: flex-start;
    margin-top: $spacing6;
  }
  ul {
    display: inline-block;
    padding: 0;
    @include breakpoints-up(md) {
      margin: $spacing2;
      @include margin-left($spacing5);
    }
    li {
      width: 40px;
      height: 40px;
      line-height: 40px;
      border: 1px solid;
      @include use-theme(
        border-color,
        $palette-primary-dark,
        $palette-primary-light
      );
      text-align: center;
      @include margin-right($spacing1);
      display: inline-block;
      vertical-align: middle;
    }
  }
}
</style>

<script>
import imgAPI from '~/static/images/imgAPI'
import brand from '~/static/text/brand'
import Header from '~/components/Header'
import Footer from '~/components/Footer'

export default {
  components: {
    'header-main': Header,
    'footer-main': Footer
  },
  data: () => ({
    imgAPI: imgAPI
  }),
  head() {
    return {
      title: brand.mono.name + ' - Detail Product'
    }
  }
}
</script>
