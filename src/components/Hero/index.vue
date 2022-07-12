<template>
  <section class="hero">
    <h1 class="hero__title">Join our Team of Writers</h1>
    <p class="hero__info">On dasdas, writers earn a living doing what they love. <br>
      Getting started is easy. Just pay a one time $25 fee and everything is ready to go.
    </p>
    <button class="hero__btn" @click="handlePayment">JOIN US</button>
  </section>
</template>
<style lang="scss" scoped>
@import './index.scss';
</style>
<script>
export default {
  emits: ['join'],
  setup(_, ctx) {
    const handlePayment = () => {
      const modal = FlutterwaveCheckout({
        public_key: 'FLWPUBK_TEST-SANDBOXDEMOKEY-X',
        tx_ref: Date.now(),
        amount: 25,
        currency: 'USD',
        payment_options: 'card',
        callback: () => {
          // set local storage
          localStorage.setItem('member', true);
          ctx.emit('join', true)
          setTimeout(function() {
            modal.close()
          }, 10000);
        },
        meta: {
          consumer_id: 21,
          consumer_mac: '92a3-912ba-1192a',
        },
        customer: {
          email: 'rose@unsinkableship.com',
          phone_number: '08102909304',
          name: 'Rose DeWitt Bukater',
        },
        customizations: {
          title: 'We Blog',
          description: 'Join our Team of Writers',
          logo: 'https://techcrunch.com/wp-content/uploads/2022/07/IMG_9938-Enhanced.jpg',
        },
      })
    }

    return {
      handlePayment
    }
  },
}
</script>