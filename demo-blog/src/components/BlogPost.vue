<template>
  <div class="blogpost" :class="{highlighted: post.highlighted}">
    <h2>{{post.title}}</h2>
    <p v-if="post.highlighted">This post is highlighted!</p>
    <p>{{post.body}}</p>  
    <p class="meta">Written by {{post.author}} on {{date}}</p>
  </div>
</template>

<script lang='ts'>
  import {Vue, Prop, Component} from "vue-property-decorator";
  // 抛出一个接口
  export interface Post {
    title: string;
    body: string;
    author: string;
    datePosted: Date;
    highlighted?: boolean;
  }

  @Component
  export default class BolgPost extends Vue {
    // !表示当前这个字段必须存在
    @Prop() post!: Post
    
    get date(){
      return `${this.post.datePosted}`
      // return `${this.post.datePosted.getDate()}/${this.post.datePosted.getMonth()+1}/${this.post.datePosted.getFullYear()}`
    }
    created(){
      console.log(this.post)
    }
  }
</script>

<style lang="stylus">
.blogpost
    width 400px
    margin 0 auto
    h2
      text-decoration underline
    .meta
      font-style italic
  .highlighted
    border 1px solid #f4d942
    background #fff3b2
</style>