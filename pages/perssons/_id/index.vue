<template>
  <div>
     well come to your panell :  {{ persson.name }}
     <p>
         edit your panel :
         <nuxt-link :to="`${ persson.id }/edit`">Here</nuxt-link>
     </p>
  </div>
</template>

<script>
export default {
    head(){
      return {
        title: this.persson.name
      }
    },
    props:['persson']
}
</script>

<style>

</style>