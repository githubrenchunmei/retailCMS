<template>
  <div class="index">
    <header>
      <div class="center">
        <span class="logo">LOGO</span>
        <div class="nav">
          <span class="nav-item"
          v-for="(item, index) in nav"
          :key="item.name"
          @click="onParentNavClick(index)"
          :class="{active:index===currentNavIndex}"
          >{{item.desc}}</span>
        </div>
        <div class="info-icons">
          <img :src="avatar" alt="avatar">
          <span>{{this.userInfo.merchantName}}</span>
          <i class="iconfont icon-home1"></i>
          <i class="iconfont icon-lingdang"></i>
          <i class="iconfont icon-kaiguan"></i>
        </div>
      </div>
    </header>
    <div class="current-nav">
      <span class="par-nav">{{nav[currentNavIndex].desc}}</span>
      <span class="sub-nav">{{currentNav}}</span>
    </div>
    <div class="main center">
      <div class="sub-nav">
        <router-link :to="item.path" v-for="(item, index) in subNav" :key="item.name" @click.native="onSubNavClick(index)">{{item.desc}}</router-link>
      </div>
      <div class="content">
        <router-view/>
      </div>
    </div>
  </div>
</template>

<script>
import {nav} from '@/router/config'
import { mapState } from 'vuex'
export default {
  name: 'index',
  data () {
    return {
      avatar: '',
      nav,
      subNav: nav[0].children,
      currentNavIndex: 0,
      currentSubNavIndex: 0
    }
  },
  mounted () {
    console.log(this.userInfo)
    this.avatar = this.userInfo.imgUrl + this.userInfo.merchantLogo
  },
  computed: {
    currentNav: function () {
      return this.subNav[this.currentSubNavIndex].desc
    },
    ...mapState({
      userInfo: (state) => state.userInfo
    })
  },
  methods: {
    onSubNavClick (index) {
      this.currentSubNavIndex = index
    },
    onParentNavClick (index) {
      this.subNav = this.nav[index].children
      this.currentNavIndex = index
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="stylus">
@import '../common/stylus/variables.styl'
.center
      width:100%
      @media all and (min-width: 1440px)
        width:85%
        margin:0 auto
.index
  width:100%
  height:100%
  header
    width:100%
    height 0.9rem
    background:$theme-color
    color:#fff
    .center
      display:flex
      align-items:center
      justify-content:space-between
      .logo
        display:inline-block
        font-size:.35rem
        line-height:.9rem
        height:.9rem
        width:1.8rem
        text-indent:.28rem
      .nav
        flex-grow:1
        display:inline-block
        .active
          background:$theme-color - 15%
        .nav-item
          display:inline-block
          width:.8rem
          font-size:.19rem
          line-height:.9rem
          text-align:center
          &:hover
            cursor: pointer
      .info-icons
        display:flex
        align-items:center
        img
          width:.4rem
          height:.4rem
          border-radius:50%
          margin-right:.3rem
        i
          display:inline-block
          height:.3rem
          line-height: .3rem;
          margin:0 .23rem
          font-size:.2rem
        span
          font-size:.16rem
          padding-right:.3rem
          border-right: .01rem solid #fff
          i
            padding-right:.12rem
            margin:0
  .current-nav
    width:100%
    height: .6rem
    background: $background-color
    line-height:.6rem
    span
      font-size:.21rem
      font-weight:bold
    .par-nav
      width:16%
      display:inline-block
      text-align:center
    .sub-nav
      border-left:.14rem solid $theme-color
      padding-left:.3rem
  .main
    width:100%
    height:100%
    display:flex
    .sub-nav
      width:16%
      height:100%
      display:flex
      flex-direction:column
      text-align:center
      a
        display:inline-block
        box-sizing:border-box
        height:.6rem
        line-height:.6rem
        font-size:.18rem
        background:$background-color
        border-bottom:.01rem solid $border-color
        color:$font-color
      .router-link-active
        color:$theme-color
        border-bottom:.01rem solid $theme-color
    .content
      width:84%
      height:100%
      box-sizing:border-box
      width:100%
      padding:.36rem .44rem
</style>
