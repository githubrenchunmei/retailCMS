<template>
  <div class="login">
    <el-form :mode="form" class="login-form">
      <el-form-item>
        <el-input v-model="form.loginName" type="text" :clearable="true"></el-input>
      </el-form-item>
      <el-form-item>
        <el-input v-model="form.loginPassword" type="password" :clearable="true"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onLoginBtn" style="width:100%">登录</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
// element-theme@2.0.1
// webpack-dev-server@3.1.14
// webpack-dev-middleware@3.4.0
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
      num: state => state.test
    })
  },
  methods: {
    ...mapMutations({
      setNum: 'SET_TEST'
    }),
    onLoginBtn () {
      console.log('login...')
      this.$api.login(this.form).then((data) => {
        console.log(data)
      })
    }
  },
  mounted () {
    this.setNum('888')
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="stylus">
@import '../common/stylus/base.styl'
.login
  .login-form
    width:300px
    margin:100px auto
</style>
