<template>
  <div class="pagination">
   <el-pagination
      @current-change="handleCurrentChange"
      :current-page="currentPage"
      :page-size="pageSize"
      layout="slot, prev, pager, next, jumper"
      :total="totalCount">
      <span>共{{totalPage}}页/{{totalCount}}条</span>
    </el-pagination>
  </div>
</template>

<script>
export default {
  name: 'pagination',
  props: {
    currentPage: {
      type: Number,
      default: 0
    },
    pageSize: {
      type: Number,
      default: 0
    },
    totalCount: {
      type: Number,
      default: 0
    },
    totalPage: {
      type: Number,
      default: 0
    }
  },
  methods: {
    handleCurrentChange (val) {
      this.$emit('currentChange', val)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="stylus" scoped>
@import '~@/common/stylus/variables.styl'
@import '~@/common/stylus/mixins.styl'

.pagination >>> span
  margin-right:.2rem
  font-size:.16rem
.pagination >>> span,.pagination >>> input
  box-sizing:border-box
  width:.4rem
  height:.3rem
  line-height:.3rem
  color:$font-color-lighter
  font-size:.16rem
.pagination >>> button,.pagination >>> li
  width:.4rem
  height:.3rem
  line-height:.3rem
  border:.01rem solid $border-color-lighter !important
  border-radius:10%
  color:$font-color-lighter
  margin-right:.06rem
  font-size:.16rem
  padding:0 !important
.pagination >>> .active
  color:#fff
  background:$theme-color
</style>
