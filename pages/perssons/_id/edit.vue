<template>
  <div>
      <h1>edit</h1>
      <h3>name :{{ persson.name }}</h3>
      <h3>id :{{ persson.id }}</h3>
      <nuxt-link :to="`/perssons/${persson.id}`">go back</nuxt-link>
  </div>
</template>

<script>
export default {
    props:['persson'],
    head(){
      return{
        title: ` اصلاح ${this.persson.name}`
      }
    }
}
</script>

<style>

</style>