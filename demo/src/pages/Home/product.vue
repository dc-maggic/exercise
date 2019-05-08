<template>
  <div class="home-plate product">
    <div class="container">
      <div class="plate-title wow fadeInDown" data-wow-delay=".1s" data-wow-duration="2s">
        <img src="../../assets/images/title04.png" width="972"/>
      </div>
      <div class="product-content">
        <div  class="wow fadeInUp" data-wow-delay=".2s" data-wow-duration="2s"><img src="../../assets/images/ad-product1.png"/></div>
        <div  class="wow fadeInUp" data-wow-delay=".2s" data-wow-duration="2s"><img src="../../assets/images/ad-product2.png"/></div>
      </div>
    </div>
  </div>
</template>

<script>
	export default {
		name: "product"
	}
</script>

<style scoped lang="scss">
  .product {
    /*padding-bottom: 140px;*/
  }

  .product-content{
    text-align: center;
    img {
      width: 100%;
    }
  }
</style>
