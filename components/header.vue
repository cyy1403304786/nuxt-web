<template>
 <div class="header_wrap">
    <div class="w">
        <div class="headerBox">
          <blockquote class="point">
            <img src="../assets/images/point.png" alt="">
          </blockquote>
          <div>首页</div>
          <div>
            <nuxt-link to="/blog">博客</nuxt-link>
          </div>
          <div>
            <nuxt-link to="/vlog">vlog</nuxt-link>
          </div>
          <div>
            <nuxt-link to="/">项目</nuxt-link>
          </div>
          <div>
            <nuxt-link to="/">关于我</nuxt-link>
          </div>
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
  .header_wrap{
    .headerBox{
      display: flex;
      padding: 20px 0 30px 60px;
      // background-color: #ffffff;
      font-size: 18px;
      font-weight: bold;
      color: #141415;
      .point{
         margin-right: 25px;
      }
      div{
        margin-left: 30px;
      }
    }
  }
</style>