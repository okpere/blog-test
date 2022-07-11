<template>
  <nav class="nav">
    <div class="nav__logo">
      <Logo />
    </div>

    <ul class="nav__list">
      <!-- Todo::-->
      <!-- complete links -->
      <!-- styling -->
      <!-- add other semantic enhancemants -->
      <li class="nav__listItem">
        <a href="http://"><Twitter /></a>
      </li>
      <li class="nav__listItem">
        <a href="http://"><Dribbble /></a>
      </li>
      <li class="nav__listItem">
        <a href="http://"><Figma /></a>
      </li>
      <li class="nav__listItem">
        <a href="http://"><Twitter /></a>
      </li>
    </ul>
  </nav>
</template>
<script>
import Logo from '@/components/Icons/logo.vue'
import Twitter from '@/components/Icons/twitter.vue'
import Dribbble from '@/components/Icons/dribbble.vue'
import Figma from '@/components/Icons/figma.vue'
import Github from '@/components/Icons/github.vue'

export default {
  components: {
    Logo,
    Twitter,
    Dribbble,
    Figma,
    Github
  },
}
</script>
<style lang="scss" scoped>
@import './index.scss';
</style>