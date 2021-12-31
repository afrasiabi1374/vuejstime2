<template>
  <div>
    <h1>Nuxt Life</h1>
  </div>
</template>
<script>
export default {
    nuxtServerInit(){
        console.log('nuxtServerInit')
    },
    fetch(){
        console.log('fetch')
    },
    asyncData(){
        console.log('asyncData')
    },
    middleware(){
        console.log('middleware')
    },
    beforeCreate(){
        console.log('beforeCreate')
    },
    created(){
        console.log('created')
    },
    beforeMount(){
        console.log('beforeMount')
    }
}
</script>

<style>

</style>