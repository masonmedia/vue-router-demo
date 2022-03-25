import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    // from https://blog.logrocket.com/how-to-consume-apis-with-vuex-and-axios/
    posts: [],
    destinations:
    [
      {
        "name": "Brazil",
        "slug": "brazil",
        "id": 1,
        "title": "Big time title 1",
        "subtitle": "Subtitles are the best",
        "cta": "Eat it",
        "img": "https://source.unsplash.com/1600x900/?nature,water",
        "date": "https://source.unsplash.com/1600x900/?nature,water",
        "content": "Bacon ipsum dolor amet rump turkey swine tail ball tip. Cow swine cupim shoulder jerky, biltong bacon short ribs pork belly alcatra pastrami jowl pancetta beef ribs tail. T-bone strip steak jowl buffalo brisket rump beef spare ribs pig ham kevin ham hock alcatra. Tail buffalo brisket, short loin t-bone tri-tip tongue corned beef frankfurter. Spare ribs andouille meatball, shank pancetta ribeye chislic corned beef t-bone kevin flank."
      },
      {
        "name": "Panama",
        "slug": "panama",
        "id": 2,
        "title": "Big time title 2",
        "subtitle": "Subtitles are the best",
        "cta": "Eat it",
        "img": "https://source.unsplash.com/1600x900/?beach",
        "content": "Buffalo cow sausage pork loin hamburger, bacon chislic pork belly t-bone tail spare ribs capicola. Beef shoulder turkey fatback tri-tip tongue strip steak burgdoggen ribeye pork chop. Pork capicola ham beef ribs pig boudin. Picanha frankfurter jerky ground round sausage. Prosciutto pancetta tri-tip cupim jerky. Doner t-bone shankle andouille swine rump pancetta ground round hamburger frankfurter. Ham hock kevin boudin spare ribs, ham tri-tip landjaeger rump burgdoggen bacon ball tip ribeye kielbasa."
      },
      {
        "name": "Barcelona",
        "slug": "barcelona",
        "id": 3,
        "title": "Big time title 3",
        "subtitle": "Subtitles are the biggy best",
        "cta": "Eat more",
        "img": "https://source.unsplash.com/1600x900/?laptop",
        "content": "Ball tip pork chicken, landjaeger leberkas filet mignon doner kevin burgdoggen ribeye flank jerky alcatra drumstick meatball. Jerky ball tip pork chop drumstick chicken. Bacon shankle sirloin leberkas. Tongue spare ribs pork chop beef venison."
      }
    ]
  },
  mutations: {
    SET_POSTS(state, posts) {
      state.posts = posts
  }
  },
  actions: {
    getPosts({ commit }) {
      // from https://simplejsoncms.com/editor/kywic3bigi
      axios.get('https://simplejsoncms.com/api/kywic3bigi')
      // axios.get('https://jsonplaceholder.typicode.com/posts')
          .then(response => {
              commit('SET_POSTS', response.data)
              console.log(response.data.slice(0, 6))
      })
  }
  },
  modules: {
  }
})
