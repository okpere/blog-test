<template>
  <article :class="['card', `card-${type}`]">
    <figure :class="['card__image', `card__image-${type}`]">
      <img :src="image" :alt="imageAlt">
    </figure>
    <div class="card__caption">
      <p class="card__metaData">
        <span class="card__metaData-bold">{{category}} </span>
        <span>·</span>
        <span>{{timePublished}}</span>
      </p>

      <h2 :class="['card__title', `card__title-${type}`]">{{title}}</h2>
      <p :class="['card__content', `card__content-${type}`]">{{content}}</p>

      <div :class="['card__footNote', `card__footNote-${type}`]">
        <p class="card__readTime">{{readingTime}} Read</p>
        <router-link class="card__link" :to="`/post/${id}`">Read Post <Arrow /></router-link>
      </div>
    </div>
  </article>
</template>
<script>
import { computed } from '@vue/runtime-core'
import Arrow from '@/components/Icons/arrow.vue'

export default {
  components: {
    Arrow
  },
  props: {
    id: {
      type: [String, Number],
      required: true
    },
    type: {
      type: String,
      default: 'mini',
      validator: (val) => ['mini', 'large'].includes(val)
    },
    image: {
      type: String,
      required: true,
    },
    imageAlt: {
      type: String,
      default: 'image',
    },
    title: {
      type: String,
      required: true,
    },
    category: {
      type: String,
      required: true,
    },
    publishedDate: {
      type: Date,
      required: true,
    },
    content: {
      type: String,
      required: true,
    }
  },
  setup(props) {
    const timePublished = computed(() => props.publishedDate)
    const readingTime = computed(() => '3 min')

    return {
      timePublished,
      readingTime
    }
  },
}
</script>
<style lang="scss" scoped>
@import './index.scss';
</style>