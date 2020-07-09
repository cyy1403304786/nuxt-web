<template>
 <div class="footer_wrap">
    <div class="top_footer">
      <div class="top_box"></div>
    </div>
    <div class="footer">
        <div class="word">©2020Baidu  京ICP证030173号-1 京网文【2013】0934-983号</div>
        <div class="footer_bg">
          <!-- <img src="../assets/images/icon.png" alt=""> -->
        </div>
    </div>
 </div>
</template>
<script>
export default {
 name: '',
 components: {},
 props: {},
 data () {
   return {}
 },
 computed: {},
 created () {},
 mounted () {},
 methods: {}
}
</script>
<style lang="scss">
  .footer_wrap{
    position: relative;
    .top_footer{
        position: absolute;
        top: -80px;
        right: 0;
        width: 148px;
        height: 80px;
        background-color: #b4d1d7;;
        .top_box{
            position: absolute;
            left: 0;
            top: 0;
            width: 148px;
            height: 80px;
            border-bottom-right-radius: 100px;
            background-color: #f5f5f5;
        }
    }
    .footer{
      
      height: 200px;
      background-color: #b4d1d7;
      border-radius: 120px 0px 0px 0px;
      .word{
        padding-top: 70px;
        text-align: center;
        font-size: 18px;
        color: #333333;
        line-height: 35px;
      }
      .footer_bg{
        display: flex;
        justify-content: center;
        img{
          height: 36px;
        }
      }
    }
  }
</style>