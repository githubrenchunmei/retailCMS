<template>
  <div class="goods-list">
   <section class="search">
     <div class="main">
        <span><i class="iconfont icon-home"></i>筛选条件</span>
        <div>
          <span @click="onFold" class="fold-btn"><i class="iconfont icon-home"></i>收起筛选</span>
          <el-button size="small">查询结果</el-button>
        </div>
     </div>
     <div class="sub" v-show ="!foldStatus">
       <label for="goods-list-input-1">输入搜索：
         <el-input id="goods-list-input-1" placeholder="商品名称/商品货号" size="small"></el-input>
       </label>
       <label for="goods-list-select-1">选择分类：
         <el-select id="goods-list-select-1" placeholder="请选择商品分类" size="small" v-model="typeId">
         <el-option v-for="item in goodsTypeTree" :key="item.id" :labe="item.typeName" :value="item.typeName"></el-option>
       </el-select>
       </label>
       <label for="goods-list-select-2">选择分类：
         <el-select id="goods-list-select-2" placeholder="请选择品牌" size="small" v-model="brandId">
         <el-option v-for="item in brandList" :key="item.id" :label="item.name" :value="item.id"></el-option>
       </el-select>
       </label>
     </div>
   </section>
   <section class="content">
     <el-table :data="goodsList" border style="width: 100%" class="list">
       <el-table-column type="selection"></el-table-column>
       <el-table-column prop="id" label="编号"></el-table-column>
       <el-table-column label="商品图片">
          <template slot-scope="scope">
            <img :src="scope.row.goodsImg" alt="img" class="goodsImg">
          </template>
       </el-table-column>
       <el-table-column prop="goodsName" label="商品名称"></el-table-column>
       <el-table-column label="价格/货号">
          <template slot-scope="scope">
            <span>{{scope.row.goodsPrice}}/{{scope.row.goodsNo}}</span>
          </template>
        </el-table-column>
        <el-table-column label="SKU库存">
          <template>sku</template>
        </el-table-column>
       <el-table-column prop="salesNum" label="销量"></el-table-column>
       <el-table-column prop="status" label="状态"></el-table-column>
       <el-table-column label="操作">
         <template slot-scope="scope">
          <span>下架</span>
          <span>编辑</span>
          <span>删除</span>
         </template>
       </el-table-column>
     </el-table>
      <pagination :currentPage="currentPage" :pageSize="pageSize" :totalCount="totalCount" :totalPage="totalPage" @currentChange="handleCurrentChange"></pagination>
   </section>
  </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex'
import Pagination from '@/components/pagination'
export default {
  name: 'goods-list',
  components: {
    Pagination
  },
  data () {
    return {
      foldStatus: true,
      brandList: [],
      goodsTypeTree: [],
      pageSize: 10,
      currentPage: 1,
      totalPage: 0,
      totalCount: 0,
      brandId: null,
      goodsName: '',
      typeId: null,
      goodsList: []
    }
  },
  computed: {
    ...mapState({
      userInfo: state => state.userInfo
    })
  },
  methods: {
    handleCurrentChange (val) {
      this.currentPage = val
      this.getGoodsList()
    },
    getGoodsList () {
      this.$api.merchantGoodsListPage({
        brandId: this.brandId,
        goodsName: this.goodsName,
        typeId: this.typeId,
        currentPage: this.currentPage,
        pageSize: this.pageSize
      }).then((data) => {
        this.goodsList = data.list
        this.totalPage = data.totalPage
        this.totalCount = data.totalCount
        console.log(this.goodsList)
      })
    },
    onFold () {
      this.foldStatus = !this.foldStatus
    },
    ...mapMutations({
      setNum: 'SET_TEST'
    })
  },
  mounted () {
    this.$api.queryGoodsTypeTree().then((data) => {
      this.goodsTypeTree = data
    })
    this.$api.queryBrandList().then((data) => {
      this.brandList = data
    })
    this.getGoodsList()
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="stylus">
@import '~@/common/stylus/variables.styl'

_border()
  border:.01rem solid $border-color-dark
// .list >>> table
//   border: 1px solid $border-color-dark
.list >>> td
  border-right: 1px solid $border-color-dark
  border-bottom: 1px solid $border-color-dark
  &:first-child
    border-left: 1px solid $border-color-dark
.list >>> th
  border: 1px solid $border-color-dark
  border-left: 0
  &:first-child
    border-left: 1px solid $border-color-dark
.goods-list
  width:100%
  .search
    border:.01rem solid $border-color-dark
    font-size:.18rem
    .main
      height:.6rem
      display:flex
      justify-content:space-between
      align-items:center
      background:$background-color-lighter
      padding-left:.2rem
      padding-right:.2rem
      .fold-btn
        cursor:pointer
    .sub
      height:.6rem
      display:flex
      justify-content:space-around
      align-items:center
      background:$background-color
      .el-input
        width:2.1rem
      .el-select
        width:2.1rem
  .content
    width:100%
    margin-top:.22rem
    .list
      .goodsImg
        width:1.22rem
        height:.88rem
</style>
