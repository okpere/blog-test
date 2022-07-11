<template>
  <section class="hero">
    <h1 class="hero__title">Join our Team of Writers</h1>
    <p class="hero__info">On dasdas, writers earn a living doing what they love. 
      Getting started is easy. Just pay a one time $25 fee and everything is ready to go.
    </p>
    <button class="hero__btn" @click="handlePayment">join us</button>
  </section>
</template>
<style lang="scss" scoped>
@import './index.scss';
</style>
<script>
export default {
  setup() {
    const handlePayment = () => {
      
    }

    return {
      handlePayment
    }
  },
}
</script>