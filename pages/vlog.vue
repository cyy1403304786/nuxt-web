<template>
 <div class="vlog_wrap">
     <Header></Header>
     <div class="w">
       <div class="banner">
         <img src="../assets/images/pictureBanner.png" alt="">
       </div>
       <!-- 跟着镜头去旅行 -->
       <div class="part1">
          <div class="part1_left">
            <h5 class="part1_left_title">跟着镜头去旅行</h5>
            <div class="boxRight">
              <p class="part1_left_info">总成本的脚步V型据北京市打开吧的深V不能
              小城北街道健康四点半v的长度柯尼卡女的嫁女记
              是大军几点开始女你打开你看代码博客看快递</p>
            </div>
            <div class="arrow">

            </div>
            <img src="../assets/images/part2.png" alt="" class="part2">
           
          </div>
          <div class="part1_right">
            <img src="../assets/images/part1.png" alt="">
          </div>
       </div>
       <!-- 美食不可辜负 -->
       
       <div class="part2">
          <div class="modelBox">
          </div>
          <div class="colomn">
            <img src="../assets/images/colomn.png" alt="">
          </div>
          <div class="part2_left">
            <img src="../assets/images/part2_1.png" alt="">
          </div>
          <div class="part2_right">
            <h5 class="part2_right_title">美食与爱不可辜负 </h5>
            <div class="box2Right">
              <p class="part2_right_info">调查的脚步是祭孔大典VN四大皆空女女放技能水电费混</p>
            </div>
     
             <div class="arrow">

            </div>
          </div>
          <div class="food">
            <img src="../assets/images/part2_2.png" alt="">
          </div>
       </div>
       <!-- 合照集合 -->
       <div class="part3">
         <img src="../assets/images/part3.png" alt="">
       </div>
     </div>
     
 </div>
</template>
<script>
import Header from '../components/header'
export default {
 name: '',
 components: {
  Header
},
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
  .vlog_wrap{
    .w{
      .banner{
        img{
          height: 500px;
        }
      }
      .part1{
        margin-top: 80px;
        margin-bottom: 125px;
        display: flex;
        .part1_left{
          margin-right: 115px;
          text-align: right;
          .part1_left_title{
            margin-top: 55px;
            margin-bottom: 100px;
            font-size: 24px;
            font-weight: bold;
            color: #191818;
          }
          .boxRight{
            display: flex;
            justify-content: flex-end;
            .part1_left_info{
                font-size: 16px;
                color: #6e6e6e;
                width: 350px;
                line-height: 25px;
                margin-bottom: 30px;
              }
          }
          .arrow{
            width: 99px;
            height: 35px;
            background-color: #50b1be;
            margin-left: 230px;
            margin-bottom: 45px;
          }
          img{
            width: 647px;
          }
        }
        .part1_right{
          img{
            // height: 560px;
            width: 500px;
          }
        }
      }
      .part2{
         display: flex;
         position: relative;
         margin-bottom: 140px;
        //  padding: 0 50px;
         .modelBox{
            position:absolute;
            top: -60px;
           	width: 1221px;
            height: 416px;
            background-color: #000000;
            opacity: 0.1;
         }
         .colomn{
           position: absolute;
           right: 200px;
           top: -138px;
         }
         .part2_left{
          margin-left: 155px;
           img{
             width: 489px;
           }
         }
         .part2_right{
           margin-left: 115px;
           .part2_right_title{
             margin-top: 50px;
             font-size: 24px;
             color: #333333;
             line-height: 35px;
             font-weight: bold;
           }
           .box2Right{
             width:  211px;
             .part2_right_info{
               font-family: MicrosoftYaHei;
               font-size: 16px;
               line-height: 23px;
               	color: #5a5959;
             }
           }
         }
         .food{
           position:absolute;
           right: 0;
           bottom: 0;
           img{
             width: 300px;
           }
         }
      }
      .part3{
        display: flex;
        justify-content: center;
        margin-bottom: 35px;
        img{
          width: 1166px;
          // height: 1064px;
        }
      }
    }
  }
</style>