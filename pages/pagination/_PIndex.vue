<template>
  <div style="display: flex;flex-wrap:wrap;margin:auto;justify-content:center" class="justify-center">
    <v-btn :to="`/pagination/`">back</v-btn>
    <v-progress-circular
    v-if="loading"
      :size="50"
      indeterminate
    ></v-progress-circular>
    <div v-else v-for="(item, i) in list" :key="i">
      <h1>{{ item.name.common }}</h1>
      <img :src="item.flags.png" :alt="item.name.common + 'flag'">
    </div>
    <div>
      <template v-for="(pageIndex, i) in pages">
        <v-btn :to="`/pagination/PIndex/${pageIndex}?pages=${pages}`" :key="i"> {{ pageIndex }} </v-btn>
      </template>
    </div>

  </div>
</template>

<script>
export default {
    data() {
      return {
        list:[],
        loading:false,
        from:this.$route.params.PIndex*this.$route.query.pages,
        pages:10
      }
    },
    computed:{
      selected(){
        return this.list.slice(this.$route.params.PIndex*this.$route.query.pages,10)
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
            .$get('https://restcountries.com/v3.1/all',
            {
                cancelToken: this.source.token,
                params:{
                title_like: this.title
            }}
            )
            .then((res)=>{
                this.list = res.slice((this.$route.params.PIndex-1)*this.$route.query.pages, this.$route.params.PIndex*this.$route.query.pages + 10)
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