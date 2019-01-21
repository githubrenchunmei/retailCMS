<template>
  <div class="index">
    <header>
      <div class="logo"></div>
      <nav>
        <span v-for="(item, index) in nav" :key="item.name" @click="handleParentNav(index)">{{item.desc}}</span>
      </nav>
    </header>
    <div class="main">
      <div class="sub-nav">
        <router-link :to="item.path" v-for="item in subNav" :key="item.name">{{item.desc}}</router-link>
      </div>
      <div class="content"></div>
    </div>
    <router-view/>
  </div>
</template>

<script>
import {nav} from '@/router/config'
import { mapState, mapMutations } from 'vuex'
export default {
  name: 'index',
  data () {
    return {
      nav,
      subNav: nav[0].children
    }
  },
  computed: {
    ...mapState({
      num: state => state.test
    })
  },
  methods: {
    handleParentNav (index) {
      this.subNav = this.nav[index].children
    },
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
@import '../common/stylus/variables.styl'
.index
  color: $theme-color
</style>
