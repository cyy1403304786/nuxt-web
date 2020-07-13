<template>
  <div class="header_wrap">
    <div class="w">
      <div class="headerBox">
        <div class="leftBar">
          <blockquote class="point">
            <nuxt-link to="/">
              <img src="../assets/images/font.png" alt />
            </nuxt-link>
          </blockquote>
          <div>
            <nuxt-link to="/">首页</nuxt-link>
          </div>
          <div>
            <nuxt-link to="/blog">博客</nuxt-link>
          </div>
          <div>
            <nuxt-link to="/vlog">vlog</nuxt-link>
          </div>
          <div>
            <nuxt-link to="/items">项目</nuxt-link>
          </div>
          <div>
            <nuxt-link to="/aboutme">关于我aa</nuxt-link>
          </div>
        </div>

        <div class="rightBar">
          <input type="text" placeholder="输入查询" class="imputBox">
          <div class="searchBtn">
            <div class="searchIcon">
              <img src="../assets/images/search.png" alt />
            </div>
          </div>
        
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "",
  components: {},
  props: {},
  data() {
    return {};
  },
  computed: {},
  created() {},
  mounted() {},
  methods: {}
};
</script>
<style lang="scss">
.header_wrap {
  background-color: #fff;
  .headerBox {
    display: flex;
    justify-content: space-between;
    .leftBar {
      display: flex;
      padding: 20px 0 30px 60px;
      a {
        font-size: 18px;
        font-weight: bold;
        font-family: MicrosoftYaHei;
        color: #141415;
      }
      .nuxt-link-exact-active {
        color: #4cd7a3;
        text-decoration: none;
        background: transparent;
      }
      .point {
        position: relative;
        margin-right: 25px;
        z-index: 5;
      }
      .point:before {
        content: "";
        position: absolute;
        z-index: -3;
        right: -5px;
        top: -10px;
        width: 20px;
        height: 20px;
        border-radius: 50%;
        border: solid 5px #4cd7a3;
      }
      div {
        margin-left: 30px;
      }
    }
    .rightBar{
          position: relative;
          margin-right: 10px;
          .searchBtn{
            display: flex;
            align-items: center;
            justify-content: center;
            cursor: pointer;
            width: 96px;
            height: 86px;
            background-color: #f3899d;
            .searchIcon{
              
            }
          }
          .imputBox{
            position: absolute;
            right: 22px;
            top: 10px;
            width: 45px;
            height: 66px;
            outline: none;
            border: none;
            background-color: #f3899d;
            color: #fff;
            border-radius: 30px;
            transition: all 1s;
            opacity: 0;
            z-index: 5;
          }
          .imputBox::placeholder{
            color: #fff;
          }
          .imputBox:hover{
             width: 300px;
              padding: 0 80px 0 20px;
              opacity: 1;
              cursor: text;
          }
      }
  }
}
</style>