<template>
  <div class="index_wrap">
    <div class="searchBar">
        <div class="topborList">
            <blockquote class="point">
              <img src="../assets/images/point.png" alt="">
            </blockquote>
            <div>首页</div>
            <div>博客</div>
            <div>vlog</div>
            <div>项目</div>
            <div>关于我</div>
        </div>
        <div class="rightBar">
          <div class="searchBtn">
            <div class="searchIcon">
              <img src="../assets/images/search.png" alt="">
            </div>
          </div>
        </div>
    </div>
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
    <div class="footer">
      <div class="bgImg">
        <img src="../assets/images/shape.png" alt="">
      </div>
      <div class="footerIcon">
        <img src="../assets/images/icon.png" alt="">
      </div>
    </div>
  </div>
</template>

<script>
export default {}
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
      margin: 50px 0 0 345px;
      display: flex;
   
      .blogCenter{
        z-index: 999;
        width: 890px;
        height: 520px;
        background-color: #fff;
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
    .footer{
      display: flex;
      .bgImg{
        position: absolute;
        z-index: 100;
        left: -30px;
        bottom: 0;
        img{
          width: 100%;
        }
      }
      .footerIcon{
        img{
          width: 237px;
        }
      }
    }
  }
</style>
