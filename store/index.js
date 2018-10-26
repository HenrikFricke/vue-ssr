import { createCategoryRepository } from '~/factories/createCategoryRepository'

export const state = () => ({
  navItems: []
})

export const mutations = {
  setNavItems(state, navItems) {
    state.navItems = navItems
  }
}

export const actions = {
  async nuxtServerInit({ commit }) {
    const categoryRepository = createCategoryRepository()
    const categories = await categoryRepository.findAll()

    const navItems = categories.map(category => ({
      url: category.slug,
      label: category.name
    }))

    await commit('setNavItems', navItems)
  }
}
