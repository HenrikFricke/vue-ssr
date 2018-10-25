<template>
  <section class="container">
    <ul>
      <li
        v-for="article in articles"
        :key="article.id"
      >
        {{ article.headline }}
      </li>
    </ul>
  </section>
</template>

<script>
import Logo from '~/components/Logo.vue'
import { createArticleRepository } from '~/factories/createArticleRepository'

export default {
  components: {
    Logo
  },
  async asyncData() {
    const repository = createArticleRepository()
    const articles = await repository.findAll()

    return { articles }
  }
}
</script>

<style>
.container {
  @apply flex justify-center;
}
</style>
