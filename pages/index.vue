<template>
  <div>
    <section class="flex justify-center">
      <ul>
        <li
          v-for="article in articles"
          :key="article.id"
        >
          {{ article.headline }}
        </li>
      </ul>
    </section>
  </div>
</template>

<script>
import { createArticleRepository } from '~/factories/createArticleRepository'

export default {
  async asyncData() {
    const articleRepository = createArticleRepository()
    const articles = await articleRepository.findAll()

    return { articles }
  }
}
</script>
