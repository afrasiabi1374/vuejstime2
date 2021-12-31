<template>
  <div>
      parent
      <nuxt-child :persson="perssonById" />
  </div>
</template>

<script>
export default {
    data(){
        return {
            perssons: [
                {
                    name: 'مرتضی',
                    id: 1
                },
                {
                    name: 'تقی',
                    id: 2
                },
                {
                    name: 'شفیع',
                    id: 3
                },
                {
                    name: 'حامد',
                    id: 4
                }
            ]
        }
    },
    computed: {
        perssonById(){
            return this.perssons.find(p => p.id == this.$route.params.id)
        }
    }
}
</script>

<style>

</style>