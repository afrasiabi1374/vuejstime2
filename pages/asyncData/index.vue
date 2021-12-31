<template>
    <ol>
        <template v-for="(country, i) in myData">
            <li :key="i"> {{ i + 1 }}-{{ country }}</li>
        </template>
    </ol>
</template>
<script>
export default {
    async asyncData(context){
        const fetch = await context.$axios.$get('https://restcountries.com/v3.1/all')
        let myData = fetch.map(i=>i.name.common)
        console.log(myData)
        return {
            myData
        }
    }
}
</script>
