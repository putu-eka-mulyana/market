<template>
  <div id="app">
    <app-header></app-header>
    <b-container>
    <!-- <app-search></app-search> -->
    <router-view></router-view>
     </b-container>
    <app-footer></app-footer>
  </div>
</template>

<script>
import Header from './components/Header'
import Footer from './components/Footer'
import Content from './components/Content'
// import Search from  './components/Search'

export default {
  name: 'app',
  components:{
    'app-header':Header,
    'app-footer':Footer,
    'app-content':Content,
    // 'app-search':Search
  },
  data () {
    return {
     
    }
  }
}
</script>

<style>
body{
  background-color: #ebf0f6;
}
</style>
