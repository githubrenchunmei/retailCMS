<template>
  <div class="system-home">
    <section class="order-count">
      <card :iconName="'icon-dingdan'" :title="'今日订单总数'" :num="OrderAllCount.todayOrderNum"></card>
    </section>
    <section class="to-do"></section>
    <section class="entrance"></section>
    <section class="total"></section>
  </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex'
import Card from '@/components/card'
export default {
  name: 'system-home',
  data () {
    return {
      OrderAllCount: {}
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
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="stylus">
@import '~@/common/stylus/variables.styl'
.system-home
  color: $theme-color
</style>
