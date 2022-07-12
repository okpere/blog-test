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

      <h2 :class="['card__title', `card__title-${type}`]"  v-html="title" />
      <p :class="['card__content', `card__content-${type}`]" v-text="content" />

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
// word count 
// 
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
    },
  },
  setup(props) {
    const readingTime = computed(() => '3 min')

    const timeSince = (date) => {
      if (typeof date !== 'object') {
        date = new Date(date);
      }

      let seconds = Math.floor((new Date() - date) / 1000);
      let intervalType;

      let interval = Math.floor(seconds / 31536000);
      if (interval >= 1) {
        intervalType = 'year';
      } else {
        interval = Math.floor(seconds / 2592000);
        if (interval >= 1) {
          intervalType = 'month';
        } else {
          interval = Math.floor(seconds / 86400);
          if (interval >= 1) {
            intervalType = 'day';
          } else {
            interval = Math.floor(seconds / 3600);
            if (interval >= 1) {
              intervalType = "hour";
            } else {
              interval = Math.floor(seconds / 60);
              if (interval >= 1) {
                intervalType = "minute";
              } else {
                interval = seconds;
                intervalType = "second";
              }
            }
          }
        }
      }

      if (interval > 1 || interval === 0) {
        intervalType += 's';
      }

      return `${interval} ${intervalType} ago`;
    }

    const timePublished = computed(() => timeSince(props.publishedDate))


    return {
      timePublished,
      readingTime,
      timeSince,
    }
  },
}
</script>
<style lang="scss" scoped>
@import './index.scss';
</style>