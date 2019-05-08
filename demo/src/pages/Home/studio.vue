<template>
  <div class="home-plate studio">
    <div class="studio-top">
      <div class="container">
        <div class="plate-title wow fadeInDown" data-wow-delay=".1s" data-wow-duration="2s">
          <img src="../../assets/images/title01.png" width="946"/>
        </div>
        <div class="cloud wow pulse" data-wow-delay=".1s">
          <img src="../../assets/images/studio-clound.png" width="1105"/>
        </div>
      </div>
    </div>
    <div class="studio-show wow fadeInUp" data-wow-delay=".1s" data-wow-duration="2s">
      <div class="container">
        <div class="show-ad">
          <img src="../../assets/images/model-05.png" width="1228"/>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
  export default {
    name: "studio"
  }
</script>

<style scoped lang="scss">
  .studio {
    background: #F8F8FC;
    .studio-top{
      height: 498px;
      background-image: url("../../assets/images/bg-arc.png");
      background-position: center bottom;
      background-repeat: no-repeat;
    }
    .plate-title{
      margin-bottom: 48px;
    }
    .cloud{
      text-align: center;
    }
    .show-ad{
      margin-top: 20px;
    }
  }

  @media (min-width: 1921px) {
    .studio .studio-top{
      background-size: cover;
    }
  }
</style>
