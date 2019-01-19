<template>
  <div class="login">
    login
    {{num}}
  </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex'
export default {
  name: 'login',
  data () {
    return {
    }
  },
  computed: {
    ...mapState({
      num: state => state.test
    })
  },
  methods: {
    ...mapMutations({
      setNum: 'SET_TEST'
    })
  },
  mounted () {
    this.setNum('888')
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="stylus">
@import '../common/stylus/base.styl'
.login
  color: $theme-color
</style>
