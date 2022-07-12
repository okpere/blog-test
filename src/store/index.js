import { createStore } from 'vuex'
import axios from 'axios'

const store = createStore({
  state: () => ({
    isMember: false,
    posts: []
  }),
  mutations: {
    setMemberShip (state, isMember) {
      state.isMember = isMember
    },
    setPosts (state, posts) {
      state.posts = posts
    }
  },
  actions: {
    async getAllPosts(context) {
      try {
        const res = await axios.get('https://techcrunch.com/wp-json/wp/v2/posts')
        if(res.status === 200) context.commit('setPosts', res.data)
      } catch (error) {
        console.error(error)
      }
    }
  }
})

export default store