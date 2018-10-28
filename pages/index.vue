<template>
  <section class="max-w-xl mx-auto m-6 pl-3 pr-3">
    <Card
      v-for="article in articles"
      :key="article.id"
      :headline="article.headline"
      :teaser="article.teaser"
      :teaser-image="article.teaserImage"
      :category-slug="article.category.slug"
      :article-slug="article.slug"
    />
  </section>
</template>

<script>
import Card from '~/components/Card'
import { createArticleRepository } from '~/factories/createArticleRepository'

export default {
  head() {
    return {
      title: 'Vue SSR'
    }
  },
  components: {
    Card
  },
  async asyncData() {
    const articleRepository = createArticleRepository()
    const articles = await articleRepository.findAll()

    return { articles }
  }
}
</script>
