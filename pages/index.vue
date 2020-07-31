<template>
  <div class="index_wrap">
    
    <Header></Header>
    <div class="contentBox">
        <div class="blogCenter">
            <div class="firstName">
              <img src="../assets/images/chen.png" alt="">
            </div>
            <div class="blogName">
              <img src="../assets/images/blogname.png" alt="">

            </div>
           <p class="blogIntro">莹莹是一名精致的技术宅猪猪女孩，这里是我记录生活感悟、技术博文和学习总结的地方</p>
        </div>
        <div class="peroson">
          <img src="../assets/images/person.png" alt="">
          <div class="imgIifo">
            <img src="../assets/images/wenzi.png" alt="">
          </div>
        </div>
        <!-- <div class="asideImg">
          <img src="../assets/images/aside.png" alt="">
        </div>  -->
    </div>
    <div class="bgImg"></div>
    <div class="line"></div>
    <div class="footer_icon">
      <img src="../assets/images/icon.png" alt="">
    </div>
    <!-- <div class="footer">
    </div> -->
  </div>
</template>

<script>
import Header from '../components/header'
export default {
   components: {
   Header
 },
   mounted () {
    this.$nextTick(() => {
        this.$nuxt.$loading.start()
        setTimeout(() => this.$nuxt.$loading.finish(), 500)
      })
}
}
</script>

<style lang="scss">
  .index_wrap{
    background-color: #f5f5f5;
    .searchBar{
      display: flex;
      font-size: 18px;
      font-family: MicrosoftYaHei;
      font-weight: bold;
      color: #121313;
      .topborList{
        display: flex;
        margin: 30px 0 30px 50px;
        .point{
          margin-right: 45px;
        }
        div{
          margin-left: 40px;
        }
      }
      .rightBar{
        position: absolute;
        right: 0;
        margin-right: 10px;
          .searchBtn{
            display: flex;
            align-items: center;
            justify-content: center;
            width: 96px;
            height: 86px;
            background-color: #f3899d;
            .searchIcon{
              
            }
          }
      }
    
    } 
    .contentBox{
      position: relative;
      margin: 50px 0 0 345px;
      display: flex;
      .blogCenter{
        z-index: 999;
        width: 890px;
        height: 520px;
        background-color: #fff;
        box-shadow: 8px 9px 25px 13px 
		rgba(227, 225, 225, 0.47);
	      border-radius: 10px;
        .firstName{
          padding: 50px 0 0 50px;
          img{
            width: 50%;
            z-index: 6;
          }
        }
        .blogName{
         display: flex;
         justify-content: center;
         position: relative;
         margin: 20px 0 40px 0;
        }
        .blogName:before{
          content: "";
          position:absolute;
          z-index: 3;
          left: 540px;
          top: -18px;
          width: 42px;
          height: 42px;
          border-radius: 50%;
          border: solid 8px #4cd7a3;
        }
        .blogIntro{
          width: 490px;
          margin-left: 185px;
          text-align: center;
          font-size: 21px;
          color: #847979;

        }
      }
      .peroson{
        position: relative;
        img{
          height: 685px;
        }
        .imgIifo{
          position: absolute;
          bottom: 50px;
          left: 30px;
          img{
            height: 63px;
          }
        }
      }
      .asideImg{
        position: absolute;
        right: 40px;
        margin-top: 95px;
    
      }
    }
    .bgImg{
      position: absolute;
      top: 380px;
        width: 555px;
        height: 555px;
        background-color: #b4d1d7;
        border-radius: 0 523px 0 0;
    }
    .line{
      position: absolute;
      width: 1100px;
      height: 1px;
      background-color: #000000;
      opacity: 0.15;
      // margin-bottom: 30px;
    }
    .footer_icon{
      position: absolute;
      margin-left: 800px;
      margin-top: 30px;
    }

  }
</style>
