<template>
  <div>
    <section class="home">
    
      <p v-if="loading">
        Loading...
      </p>
      
      <template v-else>
        <Card 
          type="large"  
          :key="latest.id"
          :id="latest.id"
          :image="latest.parsely.meta.image.url"
          :imageAlt="latest.title.rendered"
          :title="latest.title.rendered"
          :category="latest.parsely.meta.keywords[1] || ''"
          :publishedDate="new Date(latest.parsely.meta.datePublished)"
          :content="latest.excerpt.rendered"
        />
        <div class="home__list">
          <Card   
            v-for="post in posts"
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
      </template>
    </section>
    <Hero v-if="!isMember" @join="isMember = $event" />
  </div>
</template>
<script>
import Card from '@/components/Card/index.vue'
import Hero from '@/components/Hero/index.vue'
import { computed, onMounted, ref } from '@vue/runtime-core'
import { useStore } from 'vuex'

export default {
  components: {
    Card,
    Hero
  },
  setup() {
    const store = useStore()
    const isMember = ref(null)
    const loading = ref(false)
    const allPost = computed(() => store.state.posts)
    const posts = ref([])
    const latest = ref({})

    const fetchPosts = async () => {
      loading.value = true
      await store.dispatch('getAllPosts') 
      const [ first ] = allPost.value

      latest.value = first
      posts.value = [...allPost.value]
      posts.value.shift()

      loading.value = false
    }

    fetchPosts()
    onMounted(() => {
      isMember.value = localStorage.getItem('member')
    })

    return {
      loading,
      posts,
      latest,
      isMember
    }
  },
}
</script>
<style lang="scss" scoped>
@import './index.scss';
</style>