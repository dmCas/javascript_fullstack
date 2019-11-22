<template>
  <v-scroll class="suggest">
    <ul class="suggest-list">
      <li class="suggest-item">
        <div class="icon">
          <i class="icon">&#xe641;</i>
        </div>
        <div class="name">
          <p class="text">1313</p>
        </div>
      </li>
    </ul>
  </v-scroll>
</template>

<script>
import scroll from '@/components/scroll'
import api from '@/api'
const limit = 20
export default {
  name: 'suggest',
  props: {
    query: {
      type: String,
      default: ''
    }
  },
  data(){
    return {
      page: 1,
      result: []
    }
  },
  methods: {
    fetchResult (){
      const params = {
        limit,  
        offset: this.page -1,
        keywords: this.query
      }
      api.MusicSearch(params).then(res => {
        console.log(res)
      })
    }
  },
  watch: {
    query (newQuery){
      if(!newQuery){
        return
      }
      this.fetchResult()
    }
  },
  components: {
    'v-scroll':scroll
  }
}
</script>

<style>

</style>