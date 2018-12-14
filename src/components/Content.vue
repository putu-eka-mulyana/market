<template>
<div class="product-card">
  <app-search></app-search>
<b-row>
    <b-col cols="12" md="4" v-for="(data,index) in product" :key="index" v-bind:title="data.name">
        <b-card  class="item-card" v-bind:title="data.name">
          <span class="badge badge-pill badge-danger no">#{{ data.rangking}}</span>
          <hr>
          <p class="card-text">
             <span>today</span>
             <b-progress v-bind:value="data.hari" :max="max" show-progress animated></b-progress>
             <span>this week</span>
             <b-progress v-bind:value="data.minggu" :max="max" show-progress animated></b-progress>
             <span>this month</span>
             <b-progress v-bind:value="data.bulan" :max="max" show-progress animated></b-progress>
          </p>
          <b-link href="#/detail" class="card-link">View Detail</b-link>
      </b-card>
    </b-col>
</b-row>
</div>

</template>

<script>
  import Search from './Search'
export default {
  components:{
    'app-search':Search
  },
  data() {
    return {
      counter: 45,
      max: 100,
      product:[
       {"name":"sepatu","rangking":1,"hari":50,"bulan":70,"minggu":50},
       {"name":"baju","rangking":2,"hari":50,"bulan":70,"minggu":50},
       {"name":"sepatu","rangking":1,"hari":50,"bulan":70,"minggu":50},
       {"name":"sepatu","rangking":1,"hari":50,"bulan":70,"minggu":50},
       {"name":"sepatu","rangking":1,"hari":50,"bulan":70,"minggu":50},
       {"name":"sepatu","rangking":1,"hari":50,"bulan":70,"minggu":50},
       {"name":"sepatu","rangking":1,"hari":50,"bulan":70,"minggu":50},
       {"name":"sepatu","rangking":1,"hari":50,"bulan":70,"minggu":50},
       {"name":"sepatu","rangking":1,"hari":50,"bulan":70,"minggu":50},
       {"name":"sepatu","rangking":1,"hari":50,"bulan":70,"minggu":50}
     ]
    };
  }
};
</script>

<style>
.content {
  padding: 10px;
  padding-bottom: 60px;
}
.no {
  position: absolute;
  right: 40px;
  top: 25px;
}
.product-card{
  margin-top: 50px;
}
@media only screen and (min-width: 768px) {
  .item-card{
  margin-right: 30px;
  margin-bottom: 30px;
  max-width: 20rem;
}
}
@media only screen and (max-width: 768px) {
 .item-card{
  margin-bottom: 30px;
 } 
}
</style>
