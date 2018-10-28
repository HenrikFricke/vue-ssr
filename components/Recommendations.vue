<template>
  <section
    v-if="recommendations.length > 0"
    class="max-w-xl mx-auto m-6 pl-3 pr-3"
  >
    <div class="bg-grey-lighter p-4 text-grey-darkest">
      <span class="font-sans text-xl mb-4 block">
        Recommendations
      </span>
      <div class="flex justify-between flex-col md:flex-row">
        <nuxt-link
          v-for="recommendation in recommendations"
          :key="recommendation.id"
          :to="'/' + recommendation.category.slug + '/' + recommendation.slug"
          class="md:mr-2 text-grey-darkest no-underline hover:underline last-child-no-margin md:w-1/3 mb-4 md:mb-0"
        >
          <span
            :style="{ backgroundImage: `url('${recommendation.teaserImage}')` }"
            class="bg-cover h-48 w-full block mb-2 bg-center"
          />
          <span>{{ recommendation.headline }}</span>
        </nuxt-link>
      </div>
    </div>
  </section>
</template>

<script>
import { createArticleRepository } from '~/factories/createArticleRepository'

export default {
  props: {
    articleId: {
      type: String,
      required: true
    }
  },
  data() {
    return { recommendations: [] }
  },
  async mounted() {
    try {
      const articleRepository = createArticleRepository()
      const articles = await articleRepository.findAllRecommendations(
        this.articleId,
        3
      )

      this.recommendations = articles
    } catch (e) {
      //
    }
  }
}
</script>

<style>
.last-child-no-margin:last-child {
  margin: 0;
}
</style>
