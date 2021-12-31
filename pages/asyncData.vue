<template>
  <div>
    <h1>nuxt life ssr</h1>
    <h2>
        title :{{ title }}
    </h2>
  </div>
</template>

<script>
export default {
    async asyncData({$axios}){
        const response = await $axios
        .$get('https://jsonplaceholder.typicode.com/todos/1')
        return{
            title: response.title
        }
    },
    data(){
        return{
            name: 'ali',
        }
    }
}
</script>

<style>

</style>