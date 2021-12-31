<template>
  <div>
      <h1>
          nuxt middleware
      </h1>
  </div>
</template>

<script>
export default {
    name: 'NuxtMiddleware',
    // middleware:['auth'],
    fetch(){
        return new Promise((resolve)=>{
            setTimeout(()=>{
                console.log('fetch is resolved');
                resolve(true)
            })
        })
    }
}
</script>

<style>

</style>