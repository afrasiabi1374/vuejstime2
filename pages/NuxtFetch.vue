<template>
  <div>
    <h1>nuxt fetch</h1>
    <div v-if="$fetchState.pending">loading...</div>
    <!-- <div v-else-if="$fetchState.error">
      {{ $fetchState.error.message }}
    </div> -->
    <p v-else>
      {{ title }}
    </p>
  </div>
</template>

<script>
export default {
  name: 'NuxtFetch',
  fetch() {
    this.loading = true
    return this.$axios
      .$get('https://jsonplaceholder.typicode.com/todos/0')
      .then((response) => {
        this.title = response.title
      })
      .catch((e) => {
        const statusCode = e?.response?.status || 500
        const message = e?.response?.statusText || 'oops error'
        if (process.server) {
          this.$nuxt.context.res.statusCode = statusCode
        }
        this.$nuxt.error({ statusCode, message })
        // throw new Error(`${message} (${statusCode})`)
      })
  },
  data() {
    return {
      title: '',
    }
  },
}
</script>

<style scoped></style>
