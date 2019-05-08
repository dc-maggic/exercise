<template>
  <div class="studio top-space">
    <cnav active="studio"></cnav>
    <div class="container">
      <div class="studio-list">
        <div class="studio-item"
             v-for="(item, index) in memberList"
             :id="item.value"
             :key="index">
          <div class="surface">
            <div class="logo" :style="{'background-image': 'url(' + item.logo +')'}"></div>
            <div class="main">
              <div class="name">{{item.name.replace(/工作室/g, '')}}</div>
              <div class="business">{{item.business}}</div>
              <div class="description">{{item.description}}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import cnav from '../../components/nav';
  import memberData from '../../data/studio.json';

  export default {
    name: 'Studio',
    components: {
      cnav,
    },
    data() {
      return {
        memberList: memberData.data,
        activeId: null
      }
    },
    mounted () {
      this.activeId = this.$route.query.id;
      if (this.activeId) {
        let currentId = document.getElementById(this.activeId)
        currentId.classList.add('active');
        document.body.scrollTop = document.documentElement.scrollTop = currentId.offsetTop - 100;
        setTimeout(()=>{
          currentId.classList.remove('active');
        }, 3500)
      }
    },
  }
</script>

<style scoped lang="scss">
  .studio-list {
    width: 800px;
    padding: 100px 0 140px;
    margin: 0 auto;
  }

  .studio-item {
    /*padding:10px 100px;*/
    margin-bottom: 80px;
    .surface{
      padding: 0px 100px;
      display: flex;
      align-items: start;
      transition: all ease-out .3s;
      width: 100%;
    }
    &.active{
      .surface{
        background: rgba(241, 241, 241, 0.5);
        padding-left: 40px;
        padding-right: 160px;
      }
      .main .name{
        color:#642B8D;
      }

      .main .description{
        color: #333;
      }
    }
    .logo{
      width:100px;
      height: 100px;
      background-repeat: no-repeat;
      background-size: contain;
      /*background-color: #D8D8D8;*/
      transition: all 1s ease 0s;
    }
    .main{
      flex:1;
      padding-left: 50px;
      .name{
        font-size: 18px;
        color: #000033;
      }
      .business {
        color: #6F6877;
        margin-top: 15px;
        margin-bottom: 15px;
      }
      .description {
        color: #666666;
        line-height: 20px;
        text-align: justify;
      }
    }
  }
</style>
