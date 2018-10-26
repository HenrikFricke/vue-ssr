import { CategoryRepository } from '~/repositories/categoryRepository'

export function createCategoryRepository() {
  return new CategoryRepository(
    process.env.NUXT_ENV_CONTENTFUL_SPACE_ID,
    process.env.NUXT_ENV_CONTENTFUL_ACCESS_TOKEN
  )
}
