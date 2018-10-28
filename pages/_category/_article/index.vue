<template>
  <article class="max-w-xl mx-auto m-6 pl-3 pr-3">
    <h1 class="mb-8 text-grey-darkest">
      {{ article.headline }}
    </h1>
    <p class="mb-4 font-sans leading-normal text-lg text-justify text-grey-darkest border-l-8 pl-4 border-red-lighter">
      {{ article.teaser }}
    </p>
    <img
      :src="article.teaserImage"
      class="mb-4"
    >
    <section
      class="article__content"
      v-html="content"
    />
    <span class="article__source">Source: {{ article.source }}</span>
  </article>
</template>

<script>
import { documentToHtmlString } from '@contentful/rich-text-html-renderer'
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
  },
  computed: {
    content() {
      return documentToHtmlString(this.article.content)
    }
  }
}
</script>

<style>
.article__content p {
  @apply mb-4 font-sans text-justify leading-normal;
}

.article__content a {
  @apply text-red-dark;
}

.article__source {
  @apply text-grey-dark text-xs italic break-words;
  word-break: break-all;
}
</style>
