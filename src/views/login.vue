<template>
  <div class="login">
    login{{num}}
  </div>
</template>

<script>
export default {
  name: 'login',
  data () {
    return {
      num: this.store.test
    }
  },
  mounted () {
    this.store.commit('SET_TEST', '1')
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="stylus">
@import '../common/stylus/base.styl'
.login
  color: $theme-color
</style>
