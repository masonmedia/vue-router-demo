<template>
    <b-container fluid class="">
    <h1></h1>
    <b-row align-v="center" class="p-5">
      <b-col lg="5" align-self="center" class="p-5" >
        This is the {{ this.$route.params.id }} page
        <b-img :src="post.img" class="w-100 img-thumbnail shadow"></b-img>
        <!-- <b-img src="https://via.placeholder.com/150" class="w-100 img-thumbnail"></b-img> -->
      </b-col>
      <b-col lg="7" align-self="center" class="text-left">
        <h1 v-html="post.title"></h1>
        <h5 v-html="post.subtitle"></h5>
        <p v-html="post.content"></p>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
export default {
    data() {
        return {
            postId: this.$route.params.id,
        }
    },
    computed: {
      post() {
        return this.$store.state.posts.find(
          post => post.id === this.postId
        )
      }
    },
}
</script>