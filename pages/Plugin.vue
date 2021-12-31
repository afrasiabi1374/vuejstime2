<template>
  <div>
      <h1>
          plugin Injection
      </h1>
  </div>
</template>

<script>
export default {
    fetch(){
        console.log('fetch injection');
        this.$injector.loger()
    },
    asyncData({$injector}){
        console.log('asycData injection');
        $injector.loger()
    },

}
</script>

<style>

</style>