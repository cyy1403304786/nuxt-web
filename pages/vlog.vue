<template>
  <div class="vlog_wrap">
    <Header></Header>
    <div class="bannerBlog">
      <img :src="`${common.base_url}cyy/bannerVlog.png`" alt="">
      <div class="modal_box">
          <div class="tip1">用胶片定格幸福时刻</div>
          <h5 class="tip2">或许有一天，水电费混发送非黑即算单</h5>
          <p class="tip3">Lorem Ipsum I sdnapd cndj love me  is shou dao de why need
you need to fullted is scould can you</p>
      </div>
    </div>
    <div class="w">
      <div class="banner">
        <!-- <img :src="`${common.base_url}cyy/pictureBanner.png`" alt /> -->
      </div>
      <!-- 跟着镜头去旅行 -->
      <div class="part1">
        <div class="part1_left">
          <h5 class="part1_left_title">跟着镜头去旅行</h5>
          <div class="boxRight">
            <p class="part1_left_info">
              总成本的脚步V型据北京市打开吧的深V不能
              小城北街道健康四点半v的长度柯尼卡女的嫁女记
              是大军几点开始女你打开你看代码博客看快递
            </p>
          </div>
          <div class="part1_center">
            <div class="arrow">
              <img src="../assets/images/arrow.png" alt />
            </div>
            <div class="line"></div>
          </div>
          <img :src="`${common.base_url}cyy/part2.png`" alt class="part2" />
        </div>
        <div class="part1_right">
          <img :src="`${common.base_url}cyy/part1.png`" alt />
        </div>
      </div>
      <!-- 美食不可辜负 -->

      <div class="part2">
        <div class="modelBox"></div>
        <div class="colomn">
          <img :src="`${common.base_url}cyy/colomn.png`" alt />
        </div>
        <div class="part2_left">
          <img :src="`${common.base_url}cyy/part2_1.png`" alt />
        </div>
        <div class="part2_right">
          <h5 class="part2_right_title">美食与爱不可辜负</h5>
          <div class="box2Right">
            <p class="part2_right_info">调查的脚步是祭孔大典VN四大皆空女女放技能水电费混</p>
          </div>
          <p class="tips">The tip of the tongue</p>
          <div class="arrow">
              <img src="../assets/images/arrow.png" alt />
          </div>
        </div>
        <div class="food">
          <img :src="`${common.base_url}cyy/part2_2.png`" alt />
        </div>
      </div>
      <!-- 合照集合 -->
      <div class="part3">
        <img :src="`${common.base_url}cyy/part3.png`" alt />
        <p class="name">YINGYING</p>
        <p class="ending">Record the goodness of life</p>
      </div>
    </div>
    <Footer></Footer>
  </div>
</template>
<script>
import Header from "../components/header";
import Footer from '../components/footer'
import { mapState } from "vuex";
export default {
  name: "",
  components: {
    Header,
    Footer
  },
  props: {},
  data() {
    return {};
  },
  computed: {
    ...mapState({
      common: state => state.common
    })
  },
  created() {},
  mounted() {},
  methods: {}
};
</script>
<style lang="scss">
.vlog_wrap {
  .bannerBlog{
    position: relative;
    img{
     width: 100%;
     height: 600px;
    }
    .modal_box{
      position: absolute;
      right: 168px;
      top: 75px;
      width: 492px;
      height: 268px;
      background-color: #ffffff;
      opacity: 0.4;
      .tip1{
        margin-top: 105px;
        color: #000000;
        font-family: FZLTXHK;
        font-size: 18px;
        font-weight: bold;
        line-height: 25px;
        padding: 0 25px;
      }
      .tip2{
        padding: 0 25px;
        font-weight: bold;
        font-size: 24px;
        color: #000000;
      }
      .tip3{
        padding: 0 25px;
        font-family: MicrosoftYaHei;
        line-height: 20px;
      	font-size: 14px;
        color: #b4b4b4;
      }
    }
    .modal_box::before{
      top: -30px;
      right: -25px;
      content: "";
      position: absolute;
      width: 76px;
    	height: 68px;
      border-top: 3px solid #ffffff;
      border-right: 3px solid #ffffff;
    }
    .modal_box::after{
      bottom: -30px;
      left: -25px;
      content: "";
      position: absolute;
      width: 76px;
    	height: 68px;
      border-bottom: 3px solid #ffffff;
      border-left: 3px solid #ffffff;
    }
  }
  .w {
    .banner {
      img {
        height: 500px;
      }
    }
    .part1 {
      margin-top: 80px;
      margin-bottom: 125px;
      display: flex;
      .part1_left {
        margin-right: 115px;
        text-align: right;
        .part1_left_title {
          margin-top: 55px;
          margin-bottom: 100px;
          font-size: 24px;
          font-weight: bold;
          color: #191818;
        }
        .boxRight {
          display: flex;
          justify-content: flex-end;
          .part1_left_info {
            font-size: 16px;
            color: #6e6e6e;
            width: 350px;
            line-height: 25px;
            margin-bottom: 30px;
          }
        }
        .part1_center {
          display: flex;
          .arrow {
            display: flex;
            justify-content: center;
            width: 99px;
            height: 35px;
            background-color: #50b1be;
            margin-left: 230px;
            margin-bottom: 45px;
            img {
              width: 47px;
            }
          }
          .line {
            width: 50px;
            height: 4px;
            background-color: #333333;
            margin-left: 150px;
            margin-top: 32px;
          }
        }

        img {
          width: 647px;
        }
      }
      .part1_right {
        img {
          // height: 560px;
          width: 500px;
        }
      }
    }
    .part2 {
      display: flex;
      position: relative;
      margin-bottom: 140px;
      //  padding: 0 50px;
      .modelBox {
        position: absolute;
        margin-left: 78px;
        top: -80px;
        width: 1221px;
        height: 416px;
        background-color: #000000;
        opacity: 0.1;
      }
      .colomn {
        position: absolute;
        right: 200px;
        top: -138px;
      }
      .part2_left {
        margin-left: 155px;
        img {
          width: 489px;
        }
      }
      .part2_right {
        margin-left: 115px;
        .part2_right_title {
          margin-top: 50px;
          font-size: 24px;
          color: #333333;
          line-height: 35px;
          font-weight: bold;
        }
        .box2Right {
          width: 211px;
          .part2_right_info {
            font-family: MicrosoftYaHei;
            font-size: 16px;
            line-height: 23px;
            color: #5a5959;
          }
        }
        .tips{
            margin-top: 25px;
            margin-bottom: 20px;
            font-family: MicrosoftYaHei;
            font-size: 16px;
            color: #929292;
            
        }
        .arrow {
            display: flex;
            justify-content: center;
            width: 99px;
            height: 35px;
            background-color: #50b1be;
            // margin-left: 230px;
            margin-bottom: 45px;
            img {
              width: 47px;
            }
        }
      }
      .food {
        position: absolute;
        right: 0;
        bottom: 0;
        img {
          width: 300px;
        }
      }
    }
    .part3 {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      margin-bottom: 35px;
      img {
        width: 1166px;
      }
      .name{
        margin-top: 50px;
        // text-align: center;
        font-size: 36px;
        color: #444444;
        font-weight: bold;
        font-family: SimHei;
        line-height: 35px;
      }
      .ending{
        //  text-align: center;
         font-size: 30px;
          font-family: SimHei;
          color: #acacac;
          margin-bottom: 70px;
      }
    }
  }
}
</style>