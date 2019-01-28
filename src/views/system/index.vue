<template>
  <div class="system-index">
    <section class="order-count">
      <card :iconName="'icon-dingdan'" :title="'今日订单总数'" :num="this.OrderAllCount.todayOrderNum"></card>
      <card :iconName="'icon-dingdan'" :title="'今日销售额'" :num="this.OrderAllCount.todayOrderMoney"></card>
      <card :iconName="'icon-dingdan'" :title="'昨日销售额'" :num="this.OrderAllCount.yesterdayOrderMoney"></card>
      <card :iconName="'icon-dingdan'" :title="'近七日销售总额'" :num="this.OrderAllCount.nearlySevenDaysOrderMoney"></card>
    </section>
    <section class="to-do">
      <table>
        <thead>
          <tr>
            <th colspan="3">待处理事务</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>待付款订单<span>({{this.OrderAllCount.dfk}})</span></td>
            <td>已完成订单<span>({{this.OrderAllCount.ywc}})</span></td>
            <td>待确认退货订单<span>({{this.OrderAllCount.dqrth}})</span></td>
          </tr>
          <tr>
            <td>待发货订单<span>({{this.OrderAllCount.dfh}})</span></td>
            <td>待处理退款订单<span>({{this.OrderAllCount.dcltk}})</span></td>
            <td>已发货订单<span>({{this.OrderAllCount.dsh}})</span></td>
          </tr>
          <tr>
            <td>广告位即将到期<span>(0)</span></td>
            <td></td>
            <td></td>
          </tr>
        </tbody>
      </table>
    </section>
    <section class="entrance">
      <table>
        <thead>
          <tr>
            <th colspan="5">运营快捷入口</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <div>
                <i class="iconfont icon-tianjia"></i>
                <p>添加商品</p>
              </div>
            </td>
            <td>
              <div>
                <i class="iconfont icon-dingdan"></i>
                <p>订单列表</p>
              </div>
            </td>
            <td>
              <div>
                <i class="iconfont icon-yonghuguanli"></i>
                <p>用户管理</p>
              </div>
            </td>
            <td>
              <div>
                <i class="iconfont icon-yonghuguanli"></i>
                <p>交易统计</p>
              </div>
            </td>
            <td>
              <div>
                <i class="iconfont icon-yonghuguanli"></i>
                <p>广告管理</p>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </section>
    <section class="total">
      <table>
        <thead>
          <tr>
            <th colspan="3">商品总览</th>
          </tr>
        </thead>
        <tbody>
          <tr>
             <td>
              <div>
                <i>111</i>
                <p>已下架</p>
                </div>
              </td>
               <td>
              <div>
                <i>111</i>
                <p>已上架</p>
                </div>
              </td>
               <td>
              <div>
                <i>111</i>
                <p>全部商品</p>
                </div>
              </td>
          </tr>
        </tbody>
      </table>
      <table>
        <thead>
          <tr>
            <th colspan="3">用户总览</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <div>
                <i>{{this.loginUserData.yesterdayAddUserCount}}</i>
                <p>昨日新增</p>
              </div>
            </td>
            <td>
              <div>
                <i>{{this.loginUserData.monthAddUserCount}}</i>
                <p>本月新增</p>
              </div>
            </td>
            <td>
              <div>
                <i>{{this.loginUserData.allUserCount}}</i>
                <p>会员总数</p>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </section>
  </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex'
import Card from '@/components/card'
export default {
  name: 'system-index',
  data () {
    return {
      OrderAllCount: {},
      loginUserData: {}
    }
  },
  components: {
    Card
  },
  computed: {
    ...mapState({
      userInfo: state => state.userInfo
    })
  },
  methods: {
    ...mapMutations({
      setNum: 'SET_TEST'
    })
  },
  mounted () {
    this.$api.getOrderAllCount({merchantId: this.userInfo.merchantId}).then((data) => {
      this.OrderAllCount = data
    })
    this.$api.merchantIndex().then((data) => {
      this.loginUserData = data
    })
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="stylus">
@import '~@/common/stylus/variables.styl'
_border()
  border:.01rem solid $border-color
.system-index
  color: $theme-color
  .order-count
    display:flex
    justify-content:space-between
  .to-do,.entrance,.total
    table
      width:100%
      margin:.3rem auto
      _border()
      thead
        font-size:.22rem
        font-weight:bold
        color:$title-color
        height:.6rem
        line-height:.6rem
        text-indent:.24rem
        text-align:left
        background:$background-color
        _border()
      tbody
        tr
          height:.62rem
          line-height:.62rem
          td
            color:$font-color
            text-indent:.46rem
            position:relative
            font-size:.18rem
            _border()
            span
              position:absolute
              font-size:.18rem
              right:.5rem
              color:$red
  .entrance
    table
      tbody
        tr
          height:1.7rem !important
          td
            border:0 !important
            text-align:center
            vertical-align:middle
            div
              &:hover
                color:$theme-color
                cursor:pointer
              i
                font-size:.52rem
                font-style: normal
              p
                font-size:.18rem
                line-height:.18rem
  .total
    display:flex
    justify-content:space-between
    table
      width:49% !important
      margin:0 !important
      tbody
        tr
          height:1.7rem !important
          td
            border:0 !important
            text-align:center
            vertical-align:middle
            div
              i
                font-size:.22rem
                font-style: normal
                color:$red
              p
                font-size:.18rem
                line-height:.18rem

</style>
