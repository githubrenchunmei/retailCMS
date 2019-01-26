<template>
  <div class="system-log">
    <h3>数据列表</h3>
    <table>
      <thead>
        <tr>
          <th>时间</th>
          <th>IP</th>
          <th>地区</th>
          <th>浏览器</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(item, index) in logList" :key="index">
          <td>{{item.operateTime}}</td>
          <td>{{item.ip}}</td>
          <td>{{parseDesc(item.description)}}</td>
          <td>{{item.pack}}</td>
        </tr>
      </tbody>
    </table>
    <pagination :currentPage="currentPage" :pageSize="pageSize" :totalCount="totalCount" :totalPage="totalPage" @currentChange="handleCurrentChange"></pagination>
  </div>
</template>

<script>
import Pagination from '@/components/pagination'
export default {
  name: 'system-log',
  data () {
    return {
      currentPage: 1,
      pageSize: 10,
      orderBy: 'operate_time desc',
      logList: [],
      totalPage: 0,
      totalCount: 0
    }
  },
  components: {
    Pagination
  },
  methods: {
    handleCurrentChange (val) {
      console.log(val)
      this.getLogList(val)
    },
    parseDesc (desc) {
      if (desc) {
        let descObj = JSON.parse(desc)
        return `${descObj.data.country}-${descObj.data.region}-${descObj.data.city}`
      } else {
        return ''
      }
    },
    getLogList (currentPage) {
      this.$api.getMerchantLoginInfoList({
        currentPage: currentPage,
        pageSize: this.pageSize,
        orderBy: this.orderBy
      }).then((data) => {
        this.totalCount = data.totalCount
        this.totalPage = data.totalPage
        this.currentPage = data.currentPage
        this.logList = data.list
      })
    }
  },
  mounted () {
    this.getLogList(this.currentPage)
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="stylus">
@import '../../common/stylus/variables.styl'
.system-log
  h3
    box-sizing:border-box
    font-size:.21rem
    font-weight:bold
    width:12.96rem
    height:.5rem
    line-height:.5rem
    background:$background-color
    border:.01rem solid $border-color-dark
    border-bottom:0
    margin:0 auto
    text-align:center
  table
    width:12.96rem
    font-size:.16rem
    margin:0 auto
    thead
      tr
        th
          background:$background-color
    tbody,thead
      tr
        height:.5rem
        td,th
          text-align:center
          vertical-align:middle
          border:.01rem solid $border-color-dark
  .pagination
    box-sizing:border-box
    width:12.96rem
    height:.52rem
    line-height:.52rem
    text-align:right
    margin:0 auto
    border:.01rem solid $border-color-dark
    border-top:0
    background:$background-color
</style>
