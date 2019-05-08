<template>
  <div class="nav" id="nav">
    <div class="container">
      <div class="nav-logo">
        <router-link to="/"><img src="../assets/images/logo-g.png"></router-link>
      </div>
      <div class="nav-menu">
        <router-link v-for="(item, index) in navList" :key="index"
                     :to="item.url"
                     class="{ 'is-active':  active === item.value }">{{item.title}}
        </router-link>
      </div>
    </div>
  </div>
</template>
<script>
  import { WOW } from 'wowjs';

  export default {
    name: "cnav",
    props: {
      active: String,
    },
    data() {
      return {
        navList: [
          {
            'title': '首页',
            'value': 'home',
            'url': '/'
          },
          {
            'title': '工作室一览',
            'value': 'studio',
            'url': '/studio'
          },
          {
            'title': '教师一览',
            'value': 'teacher',
            'url': '/teacher/1'
          },
          {
            'title': '常见问答',
            'value': 'question',
            'url': '/question'
          },
          {
            'title': '申请入驻',
            'value': 'apply',
            'url': '/apply'
          },
          /* {
             'title': '联系我们',
             'value': 'contact',
             'url': '/contact'
           }*/
        ]
      }
    },
    mounted() {
      const wow = new WOW(
        {
          boxClass: 'wow',      // animated element css class (default is wow)
          animateClass: 'animated', // animation css class (default is animated)
          offset: 0,          // distance to the element when triggering the animation (default is 0)
          mobile: true,       // trigger animations on mobile devices (default is true)
          live: false,       // act on asynchronously loaded content (default is true)
          callback: function (box) {
            // the callback is fired every time an animation is started
            // the argument that is passed in is the DOM node being animated
          },
          scrollContainer: null // optional scroll container selector, otherwise use window
        }
      );
      wow.init();
      window.addEventListener('scroll', this.handleScroll)
    },
    methods: {
      handleScroll() {
        var scrollTop = document.documentElement.scrollTop || document.body.scrollTop
        if (scrollTop > 10) {
          let cList = document.getElementById('nav').classList;
          let hasMini = false;
          cList.forEach((item) => {
            if (item === 'mini') {
              hasMini = true
            }
          })
          if (hasMini) return;
          document.getElementById('nav').classList.add('mini');
        } else {
          document.getElementById('nav').classList.remove('mini');
        }
      }
    },
    destroyed() {
      window.removeEventListener('scroll', this.handleScroll)
    },
  }
</script>
<style scoped lang="scss">
  .nav {
    width: 100%;
    height: 80px;
    background: #502D6A;
    position: fixed;
    z-index: 99;
    top: 0;
    left: 0;
    width: 100%;
    transition: all ease .6s;
    &.mini {
      height: 50px;
      background: rgba(80, 45, 106, .9);
      .nav-logo {
        padding: 10px 0;
        img {
          height: 30px;
        }
      }
      
      .nav-menu {
        padding: 5px 0;
      }
    }
    .container {
      display: flex;
      padding: 0 40px;
    }
  }

  .nav-logo {
    width: 110px;
    height: 100%;
    padding: 20px 0;
    transition: all ease 1s;
    img {
      transition: all ease 1s;
      vertical-align: center;
      height: 40px;
    }
  }

  .nav-menu {
    flex: 1;
    text-align: right;
    height: 100%;
    padding: 20px 0;
    transition: all ease .6s;
    a {
      font-size: 16px;
      display: inline-block;
      text-decoration: none;
      color: #fff;
      padding: 10px;
      height: 40px;
      line-height: 20px;
      margin-left: 30px;
      position: relative;
      /*border-bottom: 1px solid transparent;*/
      &:after {
        content: '';
        display: inline-block;
        position: absolute;
        left: 50%;
        transform: translate(-50%, 0);
        bottom: 0;
        width: 30px;
        border-bottom: 1px solid #fff;
        opacity: 0;
        -webkit-transition: all .4s ease 0s;
        transition: all .4s ease 0s;
      }
      &:hover {
        &:after {
          opacity: 1;
          width: 60px;
        }
      }
      &.is-active {
        &:after {
          opacity: 1;
          width: 60px;
        }
      }
    }
    // 路由选中
    .router-link-exact-active {
      &:after {
        opacity: 1;
        width: 60px;
      }
    }
  }
</style>