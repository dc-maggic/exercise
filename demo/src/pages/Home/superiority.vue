<template>

  <div class="home-plate superiority">
    <div class="container">
      <div class="plate-title wow fadeInDown" data-wow-delay=".1s">
        <img src="../../assets/images/title03.png" width="646"/>
      </div>
      <div class="superiority-list">
        <!--<div class="super-bg"></div>-->
        <div class="item zz wow fadeInUp" data-wow-delay=".2s"  data-wow-duration="2s">
          <div class="item-icon"><img src="../../assets/images/icon-01.png" width="120"/> </div>
          <div class="item-title">资质</div>
          <div class="item-tips">
            <p><b>·</b> 八大校区</p>
            <p><b>·</b> 正规资质</p>
          </div>
        </div>
        <div class="item ll wow fadeInUp" data-wow-delay=".4s"  data-wow-duration="2s">
          <div class="item-icon"><img src="../../assets/images/icon-02.png" width="120"/> </div>
          <div class="item-title">流量</div>
          <div class="item-tips">
            <p><b>·</b> 裘学平台上学员共享</p>
            <p><b>·</b> 线上线下教学资源共享</p>
          </div>
        </div>
        <div class="item fw wow fadeInUp" data-wow-delay=".6s" data-wow-duration="2s">
          <div class="item-icon"><img src="../../assets/images/icon-03.png" width="120"/> </div>
          <div class="item-title">服务</div>
          <div class="item-tips">
            <p><b>·</b> 家长接待</p>
            <p><b>·</b> 学员入学评测</p>
            <p><b>·</b> 学员报班缴费</p>
            <p><b>·</b> 校区清洁</p>
            <p><b>·</b> 设备维护</p>
            <p><b>·</b> 财务法务顾问</p>
            <p><b>·</b> 人力招聘</p>
          </div>
        </div>
        <div class="item tg wow fadeInUp" data-wow-delay=".8s"  data-wow-duration="2s">
          <div class="item-icon"><img src="../../assets/images/icon-04.png" width="120"/> </div>
          <div class="item-title">推广</div>
          <div class="item-tips">
            <p><b>·</b> 微信微博推文</p>
            <p><b>·</b> 线上线下讲座</p>
            <p><b>·</b> 云平台首页推广位</p>
            <p><b>·</b> 品牌形象设计</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
	export default {
		name: "superiority"
	}
</script>

<style scoped lang="scss">
  .superiority{
    background:#FBFBFB;
  }
  .superiority-list{
    width: 1180px;
    margin: 170px auto 130px;
    display: flex;
    height: 440px;
    position: relative;
    z-index: 1;
    .super-bg{
      content: '';
      position: absolute;
      width: 200%;
      height: 100%;
      z-index: 0;
      background: #fff;
      left: 0px;
    }
    .item{
      flex: 1;
      width: 25%;
      height: 100%;
      position: relative;
      z-index: 2;
      background: #fff;
      padding: 90px 50px 0;
      border-bottom-width: 10px;
      border-bottom-style: solid;
      &.zz{
        border-bottom-color: #F5A623;
      }
      &.ll{
        border-bottom-color: #D0021B;
      }
      &.fw{
        border-bottom-color: #642B8D;
      }
      &.tg{
        border-bottom-color: #ABCE37;
      }
    }
    .item-title{
      font-size: 36px;
      color: #000033;
      margin-bottom: 20px;
    }
    .item-tips{
      font-size: 18px;
      line-height: 30px;
      b {
        font-weight: normal;
        font-size: 14px;
      }
    }
    .item-icon{
      position: absolute;
      top:-60px;
      left: 36%;
      transform: translate(-50%, 0);
      width: 120px;
      height: 120px;
      border-radius: 50%;
      background: #EDEDF3;
    }
  }

</style>
