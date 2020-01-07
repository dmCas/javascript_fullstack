<template>
  <div id="app">
    <h1>Beichen's blog</h1>
    <button></button>
    <BlogPost v-for="blogPost in blogPosts" :key="blogPost.title" :post="blogPost"></BlogPost>
    <!-- <router-view/> -->
  </div>
</template>


<script lang='ts'>
  //默认抛出 不需要{}
  import BlogPost, {Post} from "./components/BlogPost.vue"
  import { Component,Vue } from 'vue-property-decorator'

  @Component({
    components:{
       BlogPost
    }
  })

  export default class App extends Vue {
    // 用 Post限定blogPosts的类型
    private blogPosts: Post[] = [
      {
        title: 'My first blogpost ever!',
        body: '我的博客',
        author: 'beichen',
        datePosted: new Date(2020, 0, 7)
      },
      {
        title: 'My second blogpost ever!',
        body: '我的博客',
        author: 'beichen',
        datePosted: new Date(2020, 0, 8),
        highlighted: true
      },
      {
        title: 'My third blogpost ever!',
        body: '我的博客',
        author: 'beichen',
        datePosted: new Date(2020, 0, 9)
      }
    ]
  }
  
</script>


<style lang="stylus">
#app
  font-family 'Avenir', Helvetica, Arial, sans-serif
  -webkit-font-smoothing antialiased
  -moz-osx-font-smoothing grayscale
  text-align center
  color #2c3e50
  margin-top 60px
</style>
