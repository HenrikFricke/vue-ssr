<template>
  <div>
    <topbar :nav-items="navItems" />
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
import Topbar from '~/components/Topbar'

import { createArticleRepository } from '~/factories/createArticleRepository'
import { createCategoryRepository } from '~/factories/createCategoryRepository'

export default {
  components: {
    Topbar
  },
  async asyncData() {
    const articleRepository = createArticleRepository()
    const categoryRepository = createCategoryRepository()

    const responses = await Promise.all([
      articleRepository.findAll(),
      categoryRepository.findAll()
    ])

    const articles = responses[0]

    const navItems = responses[1].map(category => ({
      url: category.slug,
      label: category.name
    }))

    return { articles, navItems }
  }
}
</script>
