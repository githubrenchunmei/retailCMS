<template>
  <div class="system-info">
    <table>
      <tbody>
        <tr>
          <td>服务器操作系统:</td>
          <td>Linux(114.55.35.251)</td>
          <td>web服务器:</td>
          <td>nginx/1.10.2</td>
        </tr>
        <tr>
          <td>PHP版本:</td>
          <td>5.6.30</td>
          <td>MySQL版本:</td>
          <td>否</td>
        </tr>
        <tr>
          <td>安全模式:</td>
          <td>否</td>
          <td>安全模式GID:</td>
          <td>否</td>
        </tr>
        <tr>
          <td>Socket支持:</td>
          <td>是</td>
          <td>时区设置:</td>
          <td>Asia/Shanghai</td>
        </tr>
        <tr>
          <td>GD版本:</td>
          <td>GD2(JPED GIF PNG)</td>
          <td>Zilb支持:</td>
          <td>是</td>
        </tr>
        <tr>
          <td>IP库版本:</td>
          <td>20071024</td>
          <td>文件上传的最大大小:</td>
          <td>40M</td>
        </tr>
        <tr>
          <td>程序版本:</td>
          <td>v2.2.2 RELEASE 20170629</td>
          <td>安装日期:</td>
          <td>2017-05-02</td>
        </tr>
        <tr>
          <td>编码:</td>
          <td>UTF-8</td>
          <td></td>
          <td></td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: 'system-info',
  data () {
    return {
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="stylus">
@import '../../common/stylus/variables.styl'
.system-info
  table
    width:12.96rem
    font-size:.16rem
    margin:0 auto
    tbody
      tr
        height:.5rem
        td
          text-align:center
          vertical-align:middle
          border:.01rem solid $border-color-dark
          &:nth-child(odd)
            background:$background-color
</style>
