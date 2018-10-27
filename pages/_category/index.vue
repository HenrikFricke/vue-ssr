<template>
  <section class="max-w-xl mx-auto m-6">
    <h1 class="mb-8">
      {{ category.name }}
    </h1>
    <Card
      v-for="article in articles"
      :key="article.id"
      :headline="article.headline"
      :teaser="article.teaser"
      :teaser-image="article.teaserImage"
    />
  </section>
</template>

<script>
import Card from '~/components/Card'
import { createArticleRepository } from '~/factories/createArticleRepository'

export default {
  components: {
    Card
  },
  async asyncData({ store, params, error }) {
    const articleRepository = createArticleRepository()
    const category = store.state.categories.find(
      category => category.slug === params.category
    )

    if (!category) {
      error({ statusCode: 404, message: 'Unknown category' })
      return
    }

    const articles = await articleRepository.findAllByCategory(category.id)

    return { articles, category }
  }
}
</script>
