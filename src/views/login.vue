<template>
  <div class="login">
    <div class="content">
      <h3>后台业务管理系统</h3>
    <el-form :mode="form" class="login-form">
      <el-form-item>
        <el-input v-model="form.loginName" type="text" :clearable="true"></el-input>
        <i class="iconfont icon-user2"></i>
      </el-form-item>
      <el-form-item>
        <el-input v-model="form.loginPassword" type="password" :clearable="true"></el-input>
        <i class="iconfont icon-psw"></i>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onLoginBtn" style="width:100%">登录</el-button>
      </el-form-item>
    </el-form>
    </div>
  </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex'
export default {
  name: 'login',
  data () {
    return {
      form: {
        loginName: '13932493200',
        loginPassword: '000000'
      }
    }
  },
  computed: {
    ...mapState({
      userInfo: state => state.userInfo
    })
  },
  methods: {
    ...mapMutations({
      setUserInfo: 'SET_USERINFO'
    }),
    onLoginBtn () {
      this.$api.login(this.form).then((data) => {
        this.setUserInfo(data)
        this.$router.push('/index')
        this.$message.success('登录成功')
      })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="stylus">
@import '../common/stylus/variables.styl'
.login >>> .el-input__inner
  padding-left: .4rem
.login
  width: 100%
  height: 100%
  background: url('~@src/login-background.png') no-repeat
  .content
    width: 18%
    position: absolute
    top: 50%
    left: 50%
    transform: translateY(-50%) translateX(-50%)
    h3
      font-size: .27rem
      line-height: .27rem
      font-weight: bold
      letter-spacing: .08rem
      text-align: center
      color: #fff
      margin-bottom: .72rem
    .el-form
      .el-form-item
        position: relative
        .iconfont
          position: absolute
          top: 0
          left: .1rem
          color: #606266
</style>
