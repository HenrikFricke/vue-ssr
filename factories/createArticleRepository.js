import { ArticleRepository } from '~/repositories/articleRepository'

export function createArticleRepository() {
  return new ArticleRepository(
    process.env.NUXT_ENV_CONTENTFUL_SPACE_ID,
    process.env.NUXT_ENV_CONTENTFUL_ACCESS_TOKEN
  )
}
