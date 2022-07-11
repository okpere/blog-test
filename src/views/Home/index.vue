<template>
  <div>
    <section class="home">
      <!-- Todo:: add appropriate padding -->
      <Card 
        :id="2345"
        type="large"
        image="https://techcrunch.com/wp-content/uploads/2022/07/IMG_9938-Enhanced.jpg"
        imageAlt="blog 2345 image"
        category="Front-end"
        title="Optimizing CSS for faster page loads"
        :publishedDate="new Date('2022-07-09T09:00:16')"
        :content="`Not long ago I decided to improve the loading times of my website. 
          It already loads pretty fast, but I knew there was still room for improvement
        and one of them was CSS loading. I will walk you through the process and show you how 
        you can improve your load times as well.To see how CSS affects the load time of a webpage 
        we first have to know how the browser converts an HTML document into a functional webpage
        is simply dummy text of the printing and typesetting industry.
        
          Lorem Ipsum has been the 
        industry's standard dummy text ever since the 1500s, when an unknown printer took a galley 
        of type and scrambled it to make a type specimen book.Lorem Ipsum has been the 
        industry's standard dummy text ever since the 1500s, when an unknown printer took a galley 
        of type and scrambled it to make a type specimen book.Lorem Ipsum has been the 
        industry's standard dummy text ever since the 1500s, when an unknown printer took a galley 
        of type and scrambled it to make a type specimen book.Lorem Ipsum has been the 
        industry's standard dummy text ever since the 1500s, when an unknown printer took a galley 
        of type and scrambled it to make a type specimen book.Lorem Ipsum has been the 
        industry's standard dummy text ever since the 1500s, when an unknown printer took a galley 
        of type and scrambled it to make a type specimen book.Lorem Ipsum has been the 
        industry's standard dummy text ever since the 1500s, when an unknown printer took a galley 
        of type and scrambled it to make a type specimen book.`"
      />

      <!-- Todo:: -->
      <!-- style the blogs -->
      <!-- fetch data from API -->
      <Card 
        v-for="i in 6"
        :key="i"
        :id="2346"
        image="https://techcrunch.com/wp-content/uploads/2022/07/IMG_9938-Enhanced.jpg"
        imageAlt="blog 2346 image"
        title="Colors in Css"
        category="Front-end"
        :publishedDate="new Date('2022-07-09T09:00:16')"
        content="Colors play a vital role in making a web page usable or not. In CSS, we can 
        control the foreground and background color of an element with the color and background
        properties.To see how CSS affects the load time of a webpage 
        we first have to know how the browser converts an HTML document into a functional webpage
        is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the 
        industry's standard dummy text ever since the 1500s, when an unknown printer took a galley 
        of type and scrambled it to make a type specimen book."
      />
    </section>

    <Hero />
  </div>
</template>
<script>
import Card from '@/components/Card/index.vue'
import Hero from '@/components/Hero/index.vue'

export default {
  components: {
    Card,
    Hero
  },
  setup() {
    console.log('Home page')
  },
}
</script>
<style lang="scss" scoped>
@import './index.scss';
</style>