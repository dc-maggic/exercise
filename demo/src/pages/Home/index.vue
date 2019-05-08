<template>
    <div class="home top-space">
        <cnav></cnav>
        <intro></intro>
        <studio></studio>
        <compare></compare>
        <superiority ></superiority>
        <product />
        <team />
    </div>
</template>
<script>
    import cnav from '../../components/nav';
    import intro from './intro';
    import studio from './studio';
    import compare from './compare';
    import superiority from './superiority';
    import product from './product';
    import team from './team';
    export default {
        name: 'Home',
        components: {
            cnav,intro,studio,compare,superiority,product,team,
        },
        data() {
            return {
                msg: 'Welcome to Your Vue.js App'
            }
        }
    }
</script>
<style scoped lang="scss">
  .home-plate {
    position: relative;
    width: 100%;
    height: auto;
    overflow: hidden;
  }

  .home-plate /deep/ .plate-title {
    text-align: center;
    padding-top: 100px;
  }
</style>
