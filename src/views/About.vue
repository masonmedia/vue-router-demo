<template>
  <b-container fluid>
    <h1>This is an about page</h1>
    <b-row align-v="center" class="p-5">
<!-- `/${news.id}` -->
      <b-col lg="4" md="6" class="text-left mb-3" v-for='post in posts.slice(0,6)' :key='post.id'>
          <div class="border rounded shadow p-5">
          <router-link :to="{ name: 'Post', params: { id: post.id } }">
            <h3>{{post.title}}</h3>  
            <h5 class="my-3">{{post.subtitle}}</h5>
            <b-button variant="info" v-html="post.cta" @click="submitClicked"></b-button> 
          </router-link>
          </div>
      </b-col>  
      
    </b-row>
  </b-container>
</template>

<script>
export default {
  name: 'About',
  data() {
    return {
      // post: this.$store.state.posts.slice(0,6)
    }
  },
  methods: {
    submitClicked() {
      if(this.post.length - 1) {
        console.log("I fuckinnnn submitted!!!")
      } else alert("Fuck it")

    }
  },
  computed: {
    posts() {
      return this.$store.state.posts
    }
  },
  mounted() {
    // makes the API call from the store
    this.$store.dispatch("getPosts")
  }
}
</script>
