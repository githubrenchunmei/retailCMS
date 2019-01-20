<template>
  <div class="index">
    <router-link to="/index/system">Go to system</router-link>
    <router-view/>
  </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex'
export default {
  name: 'index',
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
.index
  color: $theme-color
</style>
