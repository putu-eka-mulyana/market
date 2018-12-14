<template>
<div class="cari">
<b-row>    
    <b-form inline> 
      <b-col>
        <label cols="12" md="4" sm="4" for="cari">Product Name</label>
      </b-col>
      <b-col>
         <b-input type="text" placeholder="Enter your product" id="cari" cols="12" sm="4" inline>
        </b-input>
      </b-col>
        <b-button variant="primary" cols="12" sm="4">Search</b-button>
    </b-form> 
   </b-row>
</div>

</template>

<script>
export default {};
</script>

<style scoped>
.cari {
  margin-top: 30px;
  margin-bottom: 30px;
}
</style>
