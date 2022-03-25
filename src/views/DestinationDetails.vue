<template>
    <b-container fluid class="">
    <b-row align-v="center" class="p-5">
      <b-col lg="5" align-self="center" class="p-5" >
        This is the {{ this.$route.params.id }} page
        <b-img :src="destination.img" class="w-100 img-thumbnail"></b-img>
      </b-col>
      <b-col lg="7" align-self="center" class="text-left">
        <h1 v-html="destination.name"></h1>
        <p v-html="destination.content"></p>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
export default {
    name: 'DestinationDetails',
    data() {
      return {
        destinationId: this.$route.params.id,
        // destination: this.$store.state.destinations
      }
    },
    computed: {
      destination() {
        return this.$store.state.destinations.find(
          destination => destination.id === this.destinationId
        )
      }
    },
}
</script>