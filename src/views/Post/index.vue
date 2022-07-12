<template>
  <div class="page">
    <p class="page__loading" v-if="loading">Loading...</p>
    <template v-else>
      <article class="page__article">
        <header class="page__header">
          <p class="page__metaData">
            <span class="page__metaData_bold">By {{post.parsely.meta.creator[0]}}</span>
            <span>{{ ' ' + datePublished}}</span>
          </p>
          <h1 class="page__title">{{post.title.rendered}}</h1>
        </header>

        <section class="page__post" v-html="post.content.rendered" />
      </article>

        <section>
            <h2 class="page__more">More Articles</h2>
              <div class="page__section">
                <Card 
                  class="page__card"  
                  v-for="post in allPost"
                  :key="post.id"
                  :id="post.id"
                  :image="post.parsely.meta.image.url"
                  :imageAlt="post.title.rendered"
                  :title="post.title.rendered"
                  :category="post.parsely.meta.keywords[1] || ''"
                  :publishedDate="new Date(post.parsely.meta.datePublished)"
                  :content="post.excerpt.rendered"
                />
              </div>
        
      </section>
    </template>
  </div>
</template>
<script>
import { ref } from '@vue/reactivity'
import { useRoute } from 'vue-router'
import axios from 'axios'
import { computed } from '@vue/runtime-core'
import { useStore } from 'vuex'
import Card from '@/components/Card/index.vue'

export default {
  components: {
    Card
  },
  setup() {
    const store = useStore()
    const route = useRoute()
    const loading = ref(false)
    const post = ref({})
    const allPost = ref([])
    const datePublished = computed(() => {
      return post.value.parsely.meta.datePublished
    })

    const fetchPost = async (id) => {
      loading.value = true
      try {
        const res = await axios.get(`https://techcrunch.com/wp-json/wp/v2/posts/${id}`)
        
        post.value = res.data
      } catch (error) {
        console.error(error)
      }
      loading.value = false
    }

    const fetchAllPosts = async () => {
      // use cached data
      if (allPost.length > 0) return
      await store.dispatch('getAllPosts') 

      allPost.value = [...store.state.posts.slice(0, 3)]
      console.log(allPost.value)
    }

    fetchPost(route.params.id)
    fetchAllPosts()
    return {
      loading,
      post,
      datePublished,
      allPost
    }
  },
}
</script>
<style lang="scss" scoped>
@import './index.scss';
</style>