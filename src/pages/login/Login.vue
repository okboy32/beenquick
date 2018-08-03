<template>
    <div class="Login">
      <login-header></login-header>
      <form class="login-form">
        <div class="pic-block">
          <div class="pic">
            <p class="pic-word">为了方便您及时查询订单信息，鲜蜂侠需要验证您的手机号为查询帐号</p>
          </div>
        </div>
        <div class="input-block">
          <div class="padding-small border-bottom">
            <input name="phone" class="phone" placeholder="手机号码" v-model="mobile"/>
            <span class="get-code" @click="handleGetVerifyCode">获取验证码</span>
          </div>
          <div class="padding-small border-bottom">
            <input name="code" class="phone"  v-model="code" placeholder="短信验证码"/>
          </div>
        </div>
        <div class="login-warp">
          收不到短信？使用<span>语音验证码</span>
        </div>
      </form>
      <button @click="handleLogin">确定</button>
    </div>
</template>

<script>
import LoginHeader from './components/Header'
import axios from 'axios'
import cookie from '../../../static/js/cookie'
export default {
  name: 'Login',
  data () {
    return {
      mobile: '',
      code: ''
    }
  },
  components: {
    LoginHeader
  },
  methods: {
    handleGetVerifyCode: function () {
      axios.post('http://120.79.0.254/api/codes/', {'mobile': this.mobile}).then((response) => {
      }).catch(function (error) {
        console.info(error)
      })
    },
    handleLogin: function () {
      axios.post('http://120.79.0.254/api/login/', {'username': this.mobile, 'password': this.code}).then((response) => {
        cookie.setCookie('token', response.data.token, 7)
        const user = response.data.user
        cookie.setCookie('username', user.username, 7)
        cookie.setCookie('uid', user.id, 7)
        cookie.setCookie('mobile', user.mobile, 7)
        cookie.setCookie('level', user.level, 7)
        this.$store.commit('setUserInfo')
        this.$router.push({name: 'Home'})
      }).catch(function (error) {
        console.info(error)
      })
    }
  }
}
</script>

<style lang="stylus" scoped>
.border-bottom
  &:before
    border solid 2px #eee
.login-form
  .pic-block
    background #ffd600
    .pic
      background url('./img/verify_bg.png') 5% bottom no-repeat
      background-size auto 85%
      height 1.85rem
      position relative
      .pic-word
        position absolute
        right 0
        width 5rem
        height .76rem
        top .55rem
        font-size .3rem
  .input-block
    background #fff
    .padding-small
      padding .32rem 0 .32rem .48rem
      .phone
        height .42rem
        border none
        background-color transparent
        font-size .36rem
      .get-code
        background #ffd600
        padding .16rem .20rem
        border-radius .1rem
        font-size .36rem
  .login-warp
    margin-top .2rem
    font-size .36rem
    text-align center
    span
      color blue
button
  margin .5rem 2%
  background #ffd600
  height 1rem
  font-size .42rem
  width 96%
  border-radius .1rem
</style>
