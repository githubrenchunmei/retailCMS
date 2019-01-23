<template>
  <div class="card">
    <div class="left">
      <i class="iconfont" :class="iconName"></i>
    </div>
    <div class="right">
      <h5 class="title">{{title}}</h5>
      <span class="num">{{num}}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'card',
  props: {
    iconName: {
      type: String,
      default: 'icon-home'
    },
    title: {
      type: String,
      default: 'title'
    },
    num: {
      type: Number,
      default: 0
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="stylus" scoped>
@import '~@/common/stylus/variables.styl'
.card
  box-sizing:border-box
  width:2.8rem
  height:1.06rem
  border:.01rem solid $theme-color
  background:$background-color
  display:flex
  align-items:center
  .right
    display:flex
    flex-direction:column
    justify-content:space-between
    margin-left:.2rem
    .title
      font-size:.17rem
      color:$font-color
      margin-bottom:.1rem
    .num
      font-size:.2rem
      font-weight:bold
      color:$red
  .left
    margin-left:.36rem
    .iconfont
      font-size:.54rem
      color:$theme-color
</style>
