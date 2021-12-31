<template>
  <div>
    <template v-for="(pageIndex, i) in pages">
      <v-btn :to="`PIndex/${pageIndex}?pages=${pages}`" :key="i"> {{ pageIndex }} </v-btn>
    </template>
  </div>
</template>

<script>
export default {
    data() {
      return {
        list:[],
        pages:10 ,
        loading:false
      }
    },
    fetch() {
      return this.service()
    },
    methods:{
         service(){
            if (this.source) {
                 this.source.cancel('cancel by user')
            }
            this.source = this.$axios.CancelToken.source()
            this.loading++
            return this.$axios
            .$get('https://jsonplaceholder.typicode.com/todos',
            {
                cancelToken: this.source.token,
                params:{
                title_like: this.title
            }}
            )
            .then((res)=>{
                this.list = res
                this.loading--
            })
            .catch((e)=>{
                this.loading--
                console.log(e)
            })
        }
    }
}
</script>

<style>

</style>