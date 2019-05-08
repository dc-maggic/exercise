<template>
  <div class="home-plate team">
    <div class="container">
      <div class="plate-title wow fadeInDown" data-wow-delay=".1s"  data-wow-duration="2s">
        <img src="../../assets/images/title05.png" width="242"/>
      </div>
      <div class="team-content">
        <div class="team-member">
          <div class="team-title wow fadeInUp" data-wow-delay=".2s"  data-wow-duration="2s">工作室</div>
          <ul class="list wow fadeInUp" data-wow-delay=".2s" data-wow-duration="2s">
            <li v-for="(item, index) in memberList" :key="index">
              <router-link  :to="{ path:'/studio/', query: { id:  item.value} }">
                <span class="logo" :style="{'background-image': 'url(' + item.logo +')'}"></span>
                <span class="name">{{item.name.replace(/工作室/g, '')}}</span>
              </router-link>
            </li>
          </ul>
        </div>
        <div class="team-member teacher">
          <div class="team-title wow fadeInUp" data-wow-delay=".4s"  data-wow-duration="2s">名师介绍</div>
          <ul class="list wow fadeInUp" data-wow-delay=".4s" data-wow-duration="2s">
            <li v-for="(item, index) in subjectsList"  :key="index">
              <a @click="handleTeacher(item)">
                <span class="icon"><img :src="'/static/images/subject/'+item.value+'.png'"/></span>
                <span class="name">{{item.name}}名师</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import memberData from '../../data/studio.json';
  import teachers from '../../data/teacherList.json';
  export default {
    name: "team",
    data() {
      return {
        memberList: memberData.data,
        subjectsList: teachers.subjects
      }
    },
    methods: {
      handleTeacher (item) {
        this.$router.push({ path: '/teacher/'+ item.id});
      }
    }
  }
</script>

<style scoped lang="scss">
  .team {
    background: #FAFBFF;
  }

  .team-content {
    width: 1000px;
    height: auto;
    margin: 80px auto 170px;
    background: #fff;
    position: relative;
    z-index: 1;
    &:after {
      content: '';
      width: 100%;
      height: 100%;
      background: #E6EBF5;
      z-index: -1;
      position: absolute;
      top: 30px;
      right: -30px;
    }
  }

  .team-title {
    padding-top: 60px;
    padding-bottom: 40px;
    font-size: 24px;
    color: #000033;
  }

  .team-member {
    padding-left: 140px;
    background: #fff;
    &.teacher{

      padding-bottom: 40px;
    }
    .list{
      display: flex;
      flex-wrap: wrap;
    }
    a {
      font-size: 14px;
      color:#000033;
    }
  }

  .team-member {
    .list{
      list-style-type: none;
      padding:0;
      margin:0;
      li {
        width: 33.333%;
        padding-right: 10px;
        margin-bottom: 15px;
        cursor: pointer;
        a:hover{
          .icon,
          .logo{
            transform: rotateY(360deg);
          }
          color: #642B8D;
        }
        .logo{
          width: 30px;
          height: 30px;
          border-radius: 50%;
          display: inline-block;
          background-repeat: no-repeat;
          background-size: contain;
          vertical-align: middle;
          transition: all 1s ease 0s;
        }
        .name {
          padding-left: 25px;
        }
        .icon{
          width: 30px;
          height: 30px;
          line-height: 26px;
          border-radius: 50%;
          display: inline-block;
          background:#F7F7F7;
          text-align: center;
          transition: all 1s ease 0s;
          img {
            width: 20px;
            height: 20px;
            vertical-align: middle;
          }
        }
      }

    }
  }

</style>
