<template>
  <div class="system">
    this is system
  </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex'
export default {
  name: 'system',
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
    console.log('system')
    this.setNum('888')
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="stylus">
@import '../../common/stylus/base.styl'
.system
  color: $theme-color
</style>
