<template>
  <div :class="align" class="title-main">
    <h4 class="primary-title display-1">
      {{ primary }}
    </h4>
  </div>
</template>

<style lang="scss" scoped>
@import './title-style';
</style>

<script>
export default {
  props: {
    primary: {
      type: String,
      required: true
    },
    align: {
      type: String,
      default: 'left'
    }
  }
}
</script>
