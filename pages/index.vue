<template>
  <section class="max-w-xl mx-auto m-6">
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
