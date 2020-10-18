new Vue({
    el: '#app',
    data:{
        message: 'hi',
        left:0,
        position: 'translateX(0%)',
        num: 0,
        scroll:'',
        screenWidth: document.body.clientWidth, 
        boxWidth: 0,
    },
    mounted(){
        this.boxWidth = this.$refs.box.clientWidth
    },
    methods: {
        scrollMethods: function(){
        },
        play: function(){
            var _this = this;
            this.scroll = setInterval(()=>{
                _this.num--;
                _this.position = 'translateX('+_this.num+'px)';
                if(-this.boxWidth-_this.num==_this.screenWidth){
                    clearInterval(_this.scroll)
                }
            },1)
        },
        pause:function(){
            clearInterval(this.scroll)
        },
        ended:function(){
            this.num = 0;
            clearInterval(this.scroll)
        }
    },
})