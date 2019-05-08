<template>
  <div class="footer">
    <div class="container">
      <div class="footer-left">
        <div class="footer-slogan">
          <div class="slogan-logo">
            <img src="../assets/images/logo-w.png">
          </div>
          <div class="slogan-tip">
            <p>87%的好老师了解裘学后都决定留下来创业</p>
            <p>裘学欢迎优秀的创业老师和团队入驻</p>
          </div>
        </div>
        <div class="footer-copy">
          <div class="copy">
            <p>Copyright (R) 2016 深圳市艾文培训中心 All Rights Reserved. 粤ICP备08029310号-2</p>
            <p>粤公网安备 44030402000210号</p>
          </div>
          <div class="cont">
            <p><img src="../assets/images/phone.png" width="10"/>400-8723-123</p>
            <p><img src="../assets/images/mobile.png" width="10"/><span><b>唐老师</b>18676701701</span><span><b>王老师</b>13530610304</span>
            </p>
          </div>
        </div>
      </div>
      <div class="footer-right">
        <div class="footer-ewm">
          <div class="ewm-item">
            <img src="../assets/images/ewm-right.png"/>
            <br/>
            <span>服务号：裘学</span>
          </div>
          <div class="ewm-item">
            <img src="../assets/images/ewm-left.png"/>
            <br/>
            <span>咨询号：裘学资讯</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "Footer"
  }
</script>

<style scoped lang="scss">
  .footer {
    background: #242129;
    padding: 50px 0;
    color: #fff;
    .container {
      display: flex;
      padding: 0 40px;
    }
  }
  .footer-left{
    flex: 1;
    padding-right: 20px;
  }
  .footer-slogan{
    display: flex;
    height: 48px;
    .slogan-logo{
      height: 48px;
      line-height: 48px;
      margin-right:26px;
      img {
        height:36px;
      }
    }
    .slogan-tip{
      padding-top: 4px;
      line-height: 22px;
      font-size: 14px;
    }
  }
  .footer-copy{
    margin-top: 25px;
    font-size: 12px;
    color: #6F6877;
    line-height: 18px;
    display: flex;
    img {
      margin-right: 10px;
      vertical-align: middle;
    }
    p {
      margin-bottom: 5px;
    }
    .copy{}
    .cont{
      margin-left: 60px;
      span{
        padding-right: 20px;
        b {
          font-weight: normal;
          padding-right: 5px;
        }
      }
    }
  }
  .footer-center{
    flex: 1;
    padding-top: 73px;
    font-size: 12px;
    color: #6F6877;
    line-height: 18px;
  }
  .footer-right{
    width: 260px;
  }
  .footer-ewm{
    display: flex;
    padding-top:8px;
  }
  .ewm-item{
    text-align: center;
    width: 130px;
    img{
      vertical-align:middle;
      width: 76px;
      height: 76px;
    }
    span{
      font-size: 12px;
      display: block;
      margin-top: 15px;
    }
  }
</style>
