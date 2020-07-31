<template>
 <div class="blog_wrap">
    <Header></Header>
    <div class="w banner">
     
      <div class="banner_left">
          <div class="logo">
            <div class="logo_info">
                <div class="logo_image"></div>
                 <!-- <img src="../assets/images/logo.png" alt=""> -->
                 <div class="word_info">
                   	<h3>You</h3>
									  <!-- <p>by Zoe Ingram <a href="http://drbl.in/eCcV">View on Dribbble</a></p> -->
                 </div>
            </div>
           
          </div>
          <div class="intro">
            <h2 class="title animated bounceOutLeft">博文介绍</h2>
            <div class="details_info">
              <p class="params1">
                <span class="word text1">Yingying</span>
                <span class="word text2">is</span>
                <span class="word text3">a</span>
                <span class="word text4">beautiful</span>
                <span class="word text5">and</span>
                <span class="word text6">talented</span>
              </p>
              <p class="params2">
                <span class="word text7">woman</span>
                <span class="word text8">Yingying</span>
                <span class="word text9">is</span>
                <span class="word text10">a</span>
                <span class="word text11">beautiful</span>
                <span class="word text12">and</span>
                <span class="word text13">talented</span>
                <span class="word text14">woman</span>
              </p>
            </div>
            <el-button class="btn">了解更多</el-button>
          </div>
      </div>
      <div class="squareBd">
        <div class="box"></div>
      </div>
      <div class="banner_right">
        <img src="../assets/images/blogComputer.png" alt="">
      </div>

 
    </div>
    <div class="colorBg">
       <div class="content w">
         <div class="contentList">
            <div class="contentListTop">
              <img src="../assets/images/coffee.png" alt="">
              <div class="tab">最新文章</div>
            </div>
            <div class="contentListBottom" v-for="(item,index) in blogList" :key="index">
               <div class="titleLogo">
                 <!-- <img src="../assets/images/titleLogo.png" alt=""> -->
                 <img v-if="item.imgUrl"  :src= "item.imgUrl" alt="">
                 <img v-else src="../assets/images/noImg.jpg" alt="" class="">
               </div>
               <div class="titleContent">
                 <h5 class="articleTitle">
                   <nuxt-link to="">
                      {{item.title}}
                   </nuxt-link>
                </h5>
                 <p class="time">{{item.time}}</p>
                 <p class="articleContent">{{item.abstract}}</p>
                 <div class="articleInfo">
                   <img src="" alt="">
                   <span class="category">{{item.classification}}</span>
                   <div  class="read">阅读全文</div>
                 </div>
               </div>
            </div>
            <div class="loadMore">
              <el-button>加载更多</el-button>
            </div>
         </div>
       </div>
    </div>
    <Footer></Footer>
 </div>
</template>
<script>
import Header from '../components/header'
import Footer from '../components/footer'
import { mapState, mapGetters, mapActions, mapMutations } from "vuex";
export default {
 name: '',
 components: {
   Header
   
 },
 props: {},
 data () {
   return {
      str :''
  }
 },
 computed: {
  ...mapState({
      blogList: state => state.blog.blogList,
  })
},
 created () {
  this.initPage()
},
 mounted () {

},

 methods: {
   ...mapActions("blog",['allAticlesA']),
   initPage(){
     this.allAticlesA()
   }
}
}
</script>
<style lang="scss">

  .blog_wrap{
    @keyframes typer{
      from {
        opacity: 0;
      }
      to {
        opacity: 1;
      }
    }
    .banner{
      // width: 100%;
      display: flex;
      position: relative;
      .banner_left{
        width: 80%;
        background-color: #f7d2cc;
        display: flex;
        padding-top: 80px;
        padding-left: 75px;
        .logo{
          position: relative;
          width: 147px;
          height: 147px;
          border-radius: 50%;
          perspective: 900px;
          .logo_info{
              position: absolute;
              width: 147px;
              height: 147px;
              transform-style: preserve-3d;
              transition: all 0.4s linear;
              .logo_image{
               	display: block;
                position: absolute;
                width: 147px;
                height: 147px;
                border-radius: 50%;
                background-image: url('../assets/images/logo.png');
                background-repeat: no-repeat;
                background-position: center center;
              	box-shadow: inset 0 0 0 6px rgba(0,0,0,0.1);
                transition: all 0.4s linear;
                transform-origin: 50% 0%;
                // background-color: red;
              }
              .word_info{
                display: block;
                position: absolute;
                width: 147px;
                height: 147px;
                border-radius: 50%;
                 transition: all 0.4s linear;
                transform-origin: 50% 0%;
                transform: translate3d(0px, 0px, -147px) rotate3d(1, 0, 0, 90deg);
                background: #000;
                opacity: 0;
                h3{
                  color: #fff;
                  text-transform: uppercase;
                  letter-spacing: 2px;
                  font-size: 24px;
                  margin: 0 45px;
                  padding: 60px 0 0 0;
                  height: 110px;
                  font-family: 'Open Sans', Arial, sans-serif;
                  text-shadow: 
                    0 0 1px #fff, 
                    0 1px 2px rgba(0,0,0,0.3);
                }
                p{
                  color: #fff;
                  padding: 10px 5px;
                  font-style: italic;
                  margin: 0 30px;
                  font-size: 12px;
                  border-top: 1px solid rgba(255,255,255,0.5);
                }
              }
          }
          .logo_info:hover {
            transform: translate3d(0, 73px, 0) rotate3d(1, 0, 0, -90deg);
            .word_info {
              // transform: rotate3d(1,0,0,0deg);
              opacity: 1;
            }
            .logo_image {
              // transform: translate3d(0, 0, -220px) rotate3d(1, 0, 0, -90deg);
              opacity: 0;
            }
          }
        }
        .intro{
          margin-left: 55px;
          .title{
              font-size: 48px;
              line-height: 60px;
              font-weight: bold;
              color: #fefefe;
          }
          .details_info{
              font-size: 18px;
              color: #fefefe;
              font-weight: normal;
              .word{
                opacity: 0;
                animation: typer 1s linear forwards;
              }
              .text1{
                animation-delay: 0.1s;
              }
              .text2{
                  animation-delay: 0.2s;
              }
              .text3{
                  animation-delay: 0.3s;
              }
              .text4{
                  animation-delay: 0.4s;
              }
              .text5{
                  animation-delay: 0.5s;
              }
              .text6{
                  animation-delay: 0.6s;
              }
              .text7{
                  animation-delay: 0.7s;
              }
              .text8{
                  animation-delay: 0.8s;
              }
              .text9{
                  animation-delay: 0.9s;
              }
              .text10{
                  animation-delay: 1.0s;
              }
              .text11{
                  animation-delay: 1.1s;
              }
              .text12{
                  animation-delay: 1.2s;
              }
              .text13{
                  animation-delay: 1.3s;
              }
              .text14{
                  animation-delay: 1.4s;
              }
          }
          .btn{
            width: 116px;
            height: 40px;
            border-radius: 20px;
            margin-top: 10px;
            border: solid 1px #fefefe;
            font-size: 18px;
            color: #fefefe;
            background-color: #f7d2cc;
          }
        }
      }
      .squareBd{
        position: absolute;
        bottom: -75px;
        left: 0;
        width: 148px;
        height: 75px;
        background-color:#f7d2cc;
        .box{
          position: absolute;
          right: 0;
          bottom: 0;
          width: 148px;
          height: 75px;
          border-top-left-radius: 100px;
          background-color: #f5f5f5;
        }
      }
      .banner_right{
        display: flex;
        justify-content: center;
        align-items: center;
        width: 559px;
        height: 462px;
        background-color: #efd290;
        border-radius: 0px 0px 100px 0px;
        img{
          width: 80%;
        }
      }
   
    }
    .colorBg{
       border-top-left-radius: 100px;
      .content{
        .contentList{
           padding-left: 60px;
          .contentListTop{
            margin-top: 75px;
            margin-bottom: 50px;
            display: flex;
            align-items: center;
            img{
              vertical-align: middle;
            }
            .tab{
              z-index: 222;
              position: relative;
              font-size: 24px;
              font-weight: bold;
              color: #57686b;
              margin-left: 20px;
              line-height: 62px;
              border-bottom: 4px solid #f3899d;
            }
            .tab:before {
              content: "";
              position: absolute;
              z-index: -3;
              left: -10px;
              top: 8px;
              width: 25px;
              height: 25px;
              border-radius: 50%;
              border: solid 6px #f3899d;
          }

          }
          .contentListBottom{
            display: flex;
            margin-bottom: 35px;
            .titleLogo{
              width: 201px;
              margin-right: 30px;
              img{
                 height: 207px;
                 width: 210px;
              }
            }
            .titleLogo:hover{
               cursor: pointer;
              //  缩放
               transform: scale(1.1);
               transition: All 0.4s linear;

              //  y 轴延伸
                // transform: translateY(-6px);
                // box-shadow: 0 26px 40px -24px rgba(0,36,100,0.3);
                // transition: All 0.4s ease;
               
            }
            .titleContent{
              .articleTitle{
                a{
                    position: relative;
                    margin-top: 20px;
                    font-size: 20px;
                    font-weight: bold;
                    color: #333333;
                    line-height: 25px;
                    cursor: pointer;
                }
                a::after{
                    content: "";
                    position: absolute;
                    left: 50%;
                    top: 100%;
                    width: 0;
                    height: 2px;
                    background: #222;
                } 
                a:hover::after{
                    left: 0;
                    transition: all 0.1s;
                    width: 100%;
                }
              }
           
              
              .time{
                font-size: 12px;
                color: #cbcbcb;
                line-height: 20px;
              }
              .articleContent{
                  width: 827px;
                  font-size: 14px;
                  font-family: SimSun;
                  color: #999999;
                  line-height: 23px;
              }
              .articleInfo{
                display: flex;
                .category{
                  font-size: 16px;
                  color: #777777;
                }
                .read{
                  font-size: 14px;
                  color: #d0667a;
                  margin-left: 20px;
                }
              }
            }
          }
          .loadMore{
              margin: 80px auto;
               display: flex;
               justify-content: center;
              .el-button{
                width: 179px;
                height: 52px;
                font-size: 20px;
                font-weight: bold;
                color: #fefefe;
                background-image: linear-gradient(90deg, #e18356 0%, #db767b 100%);
                // background: #dc7778;
              }
           
          }
          
        }
      }
    }

    
 
  }
</style>