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
import { createArticleRepository } from '~/factories/createArticleRepository'

export default {
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
