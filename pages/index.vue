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

export default {
  components: {
    Topbar
  },
  async asyncData() {
    const repository = createArticleRepository()
    const articles = await repository.findAll()

    return { articles, navItems: [{ url: '#', label: 'test' }] }
  }
}
</script>
