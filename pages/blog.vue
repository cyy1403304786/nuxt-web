<template>
 <div class="blog_wrap">
    <Header></Header>
    <div class="w banner">
     
      <div class="banner_left">
          <div class="logo">
            <img src="../assets/images/logo.png" alt="">
          </div>
          <div class="intro">
            <h2 class="title">博文介绍</h2>
            <p class="details">Yingying is a beautiful and talented woman Yingying is a beautiful and talented woman</p>
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
                 <img :src="item.imgUrl" alt="">
               </div>
               <div class="titleContent">
                 <h5 class="articleTitle">{{item.title}}</h5>
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
  // let obj = {
  //   'name': [{name: 'zhouxue',age:12},{name: 'eee',age:23}],
  //   'name2': [{name: 'zhouxue',age:12},{name: 'eee',age:23}],
  // }
  // let arrList = Object.values(obj)
  // arrList.flat().forEach((item) => {
  //   this.str += (item.name) + ','
  // })
  // let newArr = this.str.split(',')
  // this.str = Array.from(new Set(newArr)).join(",")
  // console.log(this.str)



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
          width: 147px;
          height: 147px;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 50%;
          background-color: #d28dbd;
          img{
            height: 137px;
            vertical-align: middle;
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
          .details{
              width: 340px;
              font-size: 18px;
              color: #fefefe;
              font-weight: normal;
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
              margin-right: 30px;
              img{
                height: 207px;
              }
            }
            .titleContent{
              .articleTitle{
                margin-top: 20px;
                font-size: 20px;
                font-weight: bold;
                color: #333333;
                line-height: 25px;
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