<template>
  <div class="teacher top-space">
    <ui-nav active="teacher"></ui-nav>
    <div class="teacher-nav" id="tNav">
      <div class="container">
        <a v-for="(item,index) in subjectsList" :key="item.id"
           @click="handleChangeRouter(item,index)"
           :class="{ 'is-active':  $route.params.id === item.id }">{{item.name}}</a>
      </div>
    </div>
    <div class="container">
      <div class="teacher-list">
        <div class="is-empty" v-if="teacherList.length === 0">暂无数据</div>
        <div class="studio-depart" v-else v-for="(studio, index) in teacherList" :key="index">
          <div class="studio-header" :id="studio.value">
            <div class="title">{{studio.text.replace(/工作室/g, '')}}</div>
            <!--<div class="total">共{{studio.data.length}}位老师</div>-->
          </div>
          <ul class="studio-list">
            <li v-for="(item, num) in studio.data" :key="num">
              <div class="avatar"><span class="photo"><img :src="item.schoolPhoto" v-if="item.schoolPhoto"/></span></div>
              <div class="words">
                <div class="name">{{item.realname}}{{item.nickname ? '('+ item.nickname +')': ''}}</div>
                <div class="gradeText">{{item.gradeText.join('&')}}</div>
                <div class="desc">
                  <div class="desc-title" v-if="item.result">教学成果</div>
                  <div class="desc-item" v-html="item.result" v-if="item.result"></div>
                  <div class="desc-title" v-if="item.through">教学经历</div>
                  <div class="desc-item" v-html="item.through" v-if="item.through"></div>
                  <div class="desc-title" v-if="item.featureContent">教学特点</div>
                  <div class="desc-item" v-html="item.featureContent" v-if="item.featureContent"></div>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>

    </div>
    <div class="teacher-side" v-if="teacherList.length !== 0" :style="{'left': sidePosition + 'px'}">
      <ul>
        <li v-for="(studio, index) in teacherList"
            :key="index"
            :id="'side_' + studio.value"
            :class="{'current': sideCurrent === index ? true : false}"
            @click="handleSide(studio.value, index)"
        >
          {{studio.text.replace(/工作室/g, '')}}
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
  import uiNav from '../../components/UiNav';
  import teachers from '../../data/teacherList.json';

  export default {
    name: 'Teacher',
    components: {
      uiNav
    },
    data() {
      return {
        subjectsList: teachers.subjects,
        teacherList: [],
        sidePosition: 0,
        sideCurrent: 0,
        sideTargets: [], // 每个工作室节点的offsetTop值
      }
    },
    mounted() {
      this.setTeacherList(this.$route.params.id);
      window.addEventListener('scroll', this.handlePageScroll);
      window.addEventListener('resize', this.setSidePosition);
      this.setSidePosition();
    },
    methods: {
      setSidePosition() {
        this.sidePosition = document.getElementsByClassName('teacher-list')[0].offsetLeft + 40;
      },
      handleChangeRouter(item,index) {
      	// if(index == 7) return
        this.$router.push({ path: '/teacher/' + item.id });
        this.setTeacherList(item.id);
      },
      setTeacherList(id) {
        teachers.subjects.forEach((item) => {
          if (item.id === id) {
            this.teacherList = item.list
            this.$nextTick(()=> this.setSideTargets(item.list))
          }
        })
      },
      // 设置工作室各点的 offsetTop 数据
      setSideTargets(list){
        let array = [];
        list.forEach((item) => {
          array.push(document.getElementById(item.value).offsetTop)
        })
        this.sideTargets = array;
      },
      handlePageScroll() {
        var scrollTop = document.documentElement.scrollTop || document.body.scrollTop
        if (scrollTop > 20) {
          let cList = document.getElementById('tNav').classList;
          let hasFixed = false;
          cList.forEach((item) => {
            if (item === 'fixed') {
              hasFixed = true
            }
          })
          if (!hasFixed) {
            document.getElementById('tNav').classList.add('fixed');
          };
        } else {
          document.getElementById('tNav').classList.remove('fixed');
        }
        let key = 0;
        let tIndex = 0;
        let flag = true;
        this.sideTargets.forEach(() => {
          key++;
          if (flag) {
            if (scrollTop >= this.sideTargets[this.sideTargets.length-key] - 300) {
              tIndex = this.sideTargets.length-key;
              flag = false;
            } else {
              flag = true;
            }
          }
        })
        this.sideCurrent = tIndex
      },
      handleSide (val, index) {
        document.body.scrollTop = document.documentElement.scrollTop = this.sideTargets[index] - 180;
      }
    },

    destroyed() {
      window.removeEventListener('scroll', this.handlePageScroll)
      window.removeEventListener('resize', this.setSidePosition);
    },
  }
</script>

<style scoped lang="scss">
  .teacher-nav {
    width: 100%;
    background: #F3EFF5;
    height: 50px;
    text-align: right;
    transition: all ease .6s;
    position: fixed;
    top: 80px;
    left: 0;
    z-index: 99;
    &.fixed {
      background-color: rgba(243, 239, 245,0.9);
      top: 50px;
    }
    .container {
      padding: 4px 50px 4px 0;
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: flex-end;
      a {
        display: inline-block;
        height: 32px;
        line-height: 26px;
        padding: 0 4px 6px;
        margin-left: 16px;
        font-size: 18px;
        color: #999999;
        cursor: pointer;
        &.is-active {
          color: #642B8D;
          border-bottom: 1px solid #642B8D;
        }
      }
    }
  }

  .teacher-list {
    padding: 50px 0 140px;
    width: 100%;
  }

  .studio-depart {
    margin: 0 120px 0 auto;
    width: 780px;
    padding-top: 80px;
  }

  .studio-header {
    color: #000033;
    width: 100%;
    .title {
      font-size: 36px;
      margin-bottom: 10px;
    }
    .total {
      font-size: 18px;
    }
  }

  .studio-list {
    list-style-type: none;
    padding: 0;
    margin: 0 auto;
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    li {
      width: 100%;
      display: flex;
      margin-top: 40px;
      position: relative;
      padding-bottom: 25px;
      border-bottom: 1px solid #ddd;
      &:last-child {
        border-bottom: 0;
      }
      &:hover {
        .avatar img {
          /*transform: scale(1.1, 1.1);*/
        }
        .name {
          color: #642B8D;
        }
      }
      .avatar {
        width: 180px;
        height: 132px;
        padding-right: 50px;
        span {
          display: inline-block;
          width: 130px;
          height: 130px;
          vertical-align: middle;
          border-radius: 50%;
          /* background: #f0f0f0;
         border: 1px solid transparent;*/
          overflow: hidden;
        }
        img {
          width: 130px;
          height: 130px;
          transition: all 0.6s ease 0s;
        }
      }
      .name {
        font-size: 18px;
        color: #000033;
        margin-bottom: 5px;
        transition: all 0.6s ease 0s;
      }
      .gradeText {
        font-size: 14px;
        color: #6F6877;
        margin-bottom: 15px;
      }
      .desc {
        padding-top: 2px;
      }
      .desc-title{
        font-weight: bold;
        font-size: 14px;
        color: #666666;
        /*margin-top: 20px;*/
        margin-bottom: 5px;
      }
      .desc-item {
        font-size: 14px;
        color: #666666;
        line-height: 18px;
        text-align: justify;
        margin-bottom: 15px;
        /deep/ ul {
          list-style-type: none;
        }
      }
    }
  }

  .is-empty {
    text-align: center;
    padding: 80px 0;
    color: #999;
    font-size: 20px;
  }

  .teacher-side{
    position: fixed;
    left:0;
    z-index: 333;
    top: 190px;
    ul{
      list-style-type: none;
      padding: 0;
      li {
        padding-left: 30px;
        position: relative;
        z-index: 3;
        cursor: pointer;
        font-size: 14px;
        margin: 20px 0;
        text-align: left;
        max-width: 180px;
        color: #000033;
        transition: all ease .6s;
        &:before{
          transition: all ease .6s;
          content:'';
          position: absolute;
          left:0;
          top: 50%;
          transform: translate(0,-50%);
          display: inline-block;
          border-radius: 50%;
          width: 16px;
          height: 16px;
          background: #F3F0F6;
        }
        &:hover,
        &.current{
          color: #642B8D;
          &:before{
            background: #642B8D;
          }
        }
      }
    }
  }

</style>
