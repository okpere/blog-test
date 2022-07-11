<template>
  <svg width="20" height="20" viewBox="0 0 20 20" :fill="color" xmlns="http://www.w3.org/2000/svg">
    <path d="M4.16663 10H15.8333" :stroke="color" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M12.5 13.3333L15.8333 10" :stroke="color" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M12.5 6.66669L15.8333 10" :stroke="color" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round"/>
  </svg>
</template>
<script>
export default {
  props: {
    color: {
      type: String,
      default: 'currentColor'
    }
  }
}
</script>
