  <template>
  <div>
  <div>
    <h1 class="text-center" id="judul">Potensi Market Sepatu Bulan Ini</h1>
  </div>
  <div class="small">
    <line-chart :chart-data="datacollection"></line-chart>
  </div>
</div>
</template>

<script>
  import LineChart from './LineChart.js'
  export default {
    components: {
      LineChart
    },
    data () {
      return {
        datacollection: null,
      }
    },
    mounted () {
      this.fillData()
    },
    methods: {
      fillData () {
        this.datacollection = {
          labels: ['Model A', 'Model B', 'Model C', 'Model D', 'Model F', 'Model G', 'Model H','Model I','Model J','Model K'],
          datasets: [
            {
              label: 'Data Sepatu Bulan ini',
              backgroundColor: 'rgba(95, 242, 208, 0.37)',
              data: [40, 39, 50, 40, 39, 60, 40,29,34,50],
            }
          ]
        }
      }
    }
  }
</script>

<style>
  .small {
    max-width: 80%;
    margin: 50px auto; 

  background: #212733;
  border-radius: 15px;
  box-shadow: 0px 2px 15px rgba(241, 208, 136, 0.95);
  /*margin:  25px 0; */     
  font-size: 48;
  }
  #line-chart{
    max-height: 600px;
  }
  #judul{
    margin-top: 50px;
  }
</style>