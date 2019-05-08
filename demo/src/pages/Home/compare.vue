<template>
  <div class="home-plate compare">
    <div class="container">
      <div class="plate-title wow fadeInDown" data-wow-delay=".1s">
        <img src="../../assets/images/title02.png" width="648"/>
      </div>
      <div class="compare-content wow fadeInUp" data-wow-delay=".2s" data-wow-duration="2s">
        <img src="../../assets/images/compare.png" width="1120"/>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "compare"
  }
</script>

<style scoped lang="scss">
  .compare {
    height: 1355px;
    background-image: url("../../assets/images/bg-cor-01.png");
    background-repeat: no-repeat;
    background-position: center;
  }

  .compare-content {
    padding-top: 80px;
    text-align: center;
  }

  @media (min-width: 1921px) {
    .compare {
      background: #fff;
      &:before,
      &:after {
        content: '';
        position: absolute;
        z-index: 1;
      }
      &:before {
        left: 0;
        bottom: 124px;
        background: url("../../assets/images/bg-cor-g2.png") no-repeat;
        width: 202px;
        height: 350px;
        background-size: cover;
      }
      &:after {
        right: 0;
        top: 170px;
        background: url("../../assets/images/bg-cor-p2.png") no-repeat;
        width: 215px;
        height: 298px;
        background-size: cover;
      }
    }
  }
</style>
