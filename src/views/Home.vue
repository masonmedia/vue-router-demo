<template>
  <b-container fluid class="">
    <h1>All Destinations</h1>
    <b-row align-v="center" class="">
      <b-col lg="4" align-self="center" class="p-5" 
      v-for="destination in destinations" :key="destination.name">
        <router-link :to="{ name: 'DestinationDetails', params: { id: destination.id } }">
          <h2>{{ destination.name }}</h2>
        </router-link>
        <router-link :to="{ name: 'DestinationDetails', params: { id: destination.id } }">
          <b-img :src="destination.img" class="w-100"></b-img>
        </router-link>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
// @ is an alias to /src
// import store from '@/store/index.js'

export default {
  name: 'Home',
  data() {
    return {
      destinations: this.$store.state.destinations
    }
  }
}
</script>
