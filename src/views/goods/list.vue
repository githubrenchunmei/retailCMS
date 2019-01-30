<template>
  <div class="goods-list">
   <section class="search">
     <div class="main">
        <span><i class="iconfont icon-home"></i>筛选条件</span>
        <div>
          <span @click="onFold" class="fold-btn"><i class="iconfont icon-home"></i>收起筛选</span>
          <el-button size="small" @click="handleSearch">查询结果</el-button>
        </div>
     </div>
     <div class="sub" v-show ="!foldStatus">
       <label for="goods-list-input-1">输入搜索：
         <el-input id="goods-list-input-1" placeholder="商品名称/商品货号" size="small" clearable="true" v-model="goodsName"></el-input>
       </label>
       <label for="goods-list-select-1">选择分类：
          <el-select id="goods-list-select-1" placeholder="请选择商品分类" size="small" v-model="typeId" clearable="true">
            <el-option v-for="item in goodsTypeTree" :key="item.id" :label="item.typeName" :value="item.id" clearable="true"></el-option>
          </el-select>
       </label>
       <label for="goods-list-select-2">选择品牌：
          <el-select id="goods-list-select-2" placeholder="请选择品牌" size="small" v-model="brandId" clearable="true">
            <el-option v-for="item in brandList" :key="item.id" :label="item.name" :value="item.id"></el-option>
          </el-select>
       </label>
     </div>
   </section>
   <section class="content">
     <h3 class="title">数据列表</h3>
     <el-table :data="goodsList" class="list" ref="goodListTable" tooltip-effect="dark" @selection-change="handleSelectionChange">
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
            <p>价格：{{scope.row.goodsPrice}}</p>
            <p>货号：{{scope.row.goodsNo}}</p>
          </template>
        </el-table-column>
        <el-table-column label="SKU库存">
          <template>sku</template>
        </el-table-column>
       <el-table-column prop="salesNum" label="销量"></el-table-column>
       <el-table-column label="状态">
         <template slot-scope="scope">
           {{scope.row.status === 0 ? '已下架' : '已上架'}}
         </template>
      </el-table-column>
       <el-table-column label="操作">
         <template slot-scope="scope">
          <span class="operator" @click="changeGoodsStatus(scope.row.id,scope.row.status)">{{scope.row.status === 1 ? '下架' : '上架'}}</span>
          <span class="operator">编辑</span>
          <span class="operator" @click="deleteGoods(scope.row.id)">删除</span>
         </template>
       </el-table-column>
     </el-table>
     <div class="pagination-wraper">
       <div>
          <el-checkbox v-model="checkAll" @change="handleCheckAllChange">全选</el-checkbox>
          <el-select v-model="batchOperator" placeholder="批量操作" size="small">
            <el-option v-for="item in operatorOptions" :key="item.value" :label="item.label" :value="item.value"></el-option>
          </el-select>
          <el-button @click="handleBatchOperator" size="small">确定</el-button>
       </div>
       <pagination :currentPage="currentPage" :pageSize="pageSize" :totalCount="totalCount" :totalPage="totalPage" @currentChange="handleCurrentChange"></pagination>
     </div>
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
      operatorOptions: [
        {
          value: 0,
          label: '删除'
        }
      ],
      batchOperator: 0,
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
      goodsList: [],
      checkAll: false,
      currentRow: []
    }
  },
  computed: {
    ...mapState({
      userInfo: state => state.userInfo
    })
  },
  methods: {
    handleSearch () {
      this.getGoodsList()
    },
    handleBatchOperator () {
      const idAry = []
      this.currentRow.forEach((item) => {
        idAry.push(item.id)
      })
      switch (this.batchOperator) {
        case 0:
          this.$confirm('是否删除该商品？', '提示', {
            confirmButtonText: '确定',
            cancelButtonText: '取消',
            type: 'warning'
          }).then(() => {
            this.$api.deleteBatch(idAry).then(() => {
              this.$message.success('删除操作成功')
              this.getGoodsList()
            })
          }).catch(() => {
            this.$message.info('取消删除操作')
          })
          break
        default:
          break
      }
    },
    deleteGoods (id) {
      this.$confirm('是否删除该商品？', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        this.$api.deleteBatch([id]).then(() => {
          this.$message.success('删除操作成功')
          this.getGoodsList()
        })
      }).catch(() => {
        this.$message.info('取消删除操作')
      })
    },
    changeGoodsStatus (id, status) {
      if (status === 0) {
        this.$api.merchantGoodsPut({id}).then(() => {
          this.$message.success('商品上架成功')
          this.getGoodsList()
        })
      } else {
        this.$api.merchantGoodsPull({id}).then(() => {
          this.$message.success('商品下架成功')
          this.getGoodsList()
        })
      }
    },
    handleCheckAllChange (val) {
      if (val) {
        this.$refs.goodListTable.toggleAllSelection()
      } else {
        this.$refs.goodListTable.clearSelection()
      }
    },
    handleSelectionChange (val) {
      this.checkAll = val.length === this.goodsList.length
      this.currentRow = val
    },
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
  width:100% !important
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
    .title
      height:.5rem
      line-height:.5rem
      font-size:.2rem
      font-weight:bold
      text-indent:.3rem
      _border()
      border-bottom:0
      background:$background-color
    .list
      .goodsImg
        width:1.22rem
        height:.88rem
      .operator
        cursor:pointer
        &:hover
          text-decoration:underline
          color:$theme-color
    .pagination-wraper
      box-sizing:border-box
      padding:0 .2rem
      width:100%
      height:.6rem
      display:flex
      justify-content:space-between
      align-items:center
      background:$background-color
      _border()
</style>
