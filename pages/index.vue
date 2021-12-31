<template>
  <div>
    <v-btn to="/perssons/">
      perssons
    </v-btn>
    <v-btn :to="`pagination/PIndex/${1}?pages=${10}`">
      pagination
    </v-btn>
    <v-btn to="/asyncData">
      asyncData
    </v-btn>
    <v-btn to="/fetch">
      fetch
    </v-btn>
    <v-btn
      to="/vuejsTime" 
      >
      vuejsTime
    </v-btn>
    <h1>
      vuejstile
    </h1>
    <nuxt-link
    :to="{name: 'NuxtLife'}"
    >
    nuxt-life-SSR
    </nuxt-link>
    <br>
    <nuxt-link to="Middleware">
      Middleware
    </nuxt-link>
  </div>
</template>
<script>
  export default {

  }
</script>