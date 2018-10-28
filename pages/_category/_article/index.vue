<template>
  <section class="max-w-xl mx-auto m-6">
    <h1 class="mb-8">
      {{ article.headline }}
    </h1>
  </section>
</template>

<script>
import { createArticleRepository } from '~/factories/createArticleRepository'

export default {
  head() {
    return {
      title: `${this.article.headline} - Vue SSR`
    }
  },
  async asyncData({ store, params, error }) {
    try {
      const articleRepository = createArticleRepository()
      const article = await articleRepository.findBySlug(params.article)

      return { article }
    } catch (e) {
      error({ statusCode: 404, message: 'Unknown article' })
    }
  }
}
</script>
