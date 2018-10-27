import { createCategoryRepository } from '~/factories/createCategoryRepository'

export const state = () => ({
  categories: []
})

export const mutations = {
  setCategories(state, categories) {
    state.categories = categories
  }
}

export const actions = {
  async nuxtServerInit({ commit }) {
    const categoryRepository = createCategoryRepository()
    const categories = await categoryRepository.findAll()

    await commit('setCategories', categories)
  }
}
