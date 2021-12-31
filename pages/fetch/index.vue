<template>
    <ol>
        <template v-for="(country, i) in $store.state.countries">
            <li :key="i"> {{ i + 1 }}-{{ country }}</li>
        </template>
    </ol>
</template>
<script>
export default {
    async fetch(context){
        const fetch = await context.$axios.$get('https://restcountries.com/v3.1/all')
        let myData = fetch.map(i=>i.name.common)
        console.log(myData)
        context.store.commit('SET_COUNTRIES', myData)
        return {
            myData
        }
    }
}
</script>
