<template>
    <div>
        <h3>اشخاص</h3>
        <div v-for="persson in perssons" :key="persson.id">
            <nuxt-link :to="`/perssons/${persson.id}`">
                {{ persson.name }}
            </nuxt-link>
        </div>
    </div>
</template>
<script>
export default {
    head: {
        title: 'اشخاص',
    },
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
}
</script>