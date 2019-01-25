<template>
  <div class="system-account">
    <el-upload
      class="upload-demo"
      action=""
      :http-request="uploadFile"
      accept="image/jpeg, image/png"
      :show-file-list="false">
      <img class="uploading-img-img" :src="avatar">
      <div slot="tip" class="el-upload__tip">上传头像</div>
    </el-upload>
    <el-form :model="ruleForm"  ref="ruleForm" :rules="rules" label-width="80px" required>
      <el-form-item label="用户名" prop="name">
        <el-input v-model="ruleForm.name"></el-input>
      </el-form-item>
      <el-form-item label="旧密码" prop="oldPassword">
        <el-input v-model="ruleForm.oldPassword" type="password"></el-input>
      </el-form-item>
      <el-form-item label="新密码" prop="newPassword">
        <el-input v-model="ruleForm.newPassword" type="password"></el-input>
      </el-form-item>
      <el-form-item label="确认密码" prop="twicePassword">
        <el-input v-model="ruleForm.twicePassword" type="password"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onSubmit">提交</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex'
export default {
  name: 'system-account',
  data () {
    var validatePass2 = (roule, value, callback) => {
      if (value === '') {
        callback(new Error('请再次输入密码'))
      } else if (this.form.newPassword !== value) {
        callback(new Error('两次输入密码不一致'))
      } else {
        callback()
      }
    }
    return {
      avatar: '',
      ruleForm: {
        name: '',
        oldPassword: '',
        newPassword: '',
        twicePassword: '',
        merchantLogo: ''
      },
      rules: {
        name: [{ required: true, message: '请输入用户名', trigger: 'blur' }],
        oldPassword: [{required: true, message: '请输入旧密码', trigger: 'blur'}],
        newPassword: [{required: true, message: '请输入新密码', trigger: 'blur'}],
        twicePassword: [{required: true, validator: validatePass2, trigger: 'blur'}]
      }
    }
  },
  computed: {
    ...mapState({
      userInfo: state => state.userInfo
    })
  },
  methods: {
    onSubmit () {
      this.$api.changePassword(this.form).then((data) => {
        console.log(data)
      })
    },
    uploadFile () {},
    ...mapMutations({
      setNum: 'SET_TEST'
    })
  },
  mounted () {
    this.ruleForm.name = this.userInfo.merchantName
    this.avatar = this.userInfo.imgUrl + this.userInfo.merchantLogo
    console.log(this.avater)
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="stylus">
@import '../../common/stylus/variables.styl'
.system-account
  width:4.8rem
  margin:0 auto
  .upload-demo
    text-align:center
    margin-bottom:.2rem
    .uploading-img-img
      width:1.64rem
      height:1.64rem
      border-radius:50%
</style>
