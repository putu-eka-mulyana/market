<template>
    <div class="foo">
        <p>{{ title }} &copy; {{  new Date().getFullYear() }}</p>
    </div>
</template>
<script>
export default {
     data () {
    return {
         title:"Market Analysis"
    }
  }
};
</script>
 <style scoped >
.foo {
  background-color:#232931;
  height: 50px;
  color: #ededed;
  line-height: 50px;
  position: relative;
  bottom: 0px;
  width: 100%;
  text-align: center;
}
p{
    margin: auto;
}
</style>