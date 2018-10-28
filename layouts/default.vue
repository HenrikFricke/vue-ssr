<template>
  <div>
    <topbar :nav-items="navItems" />
    <nuxt/>
  </div>
</template>

<script>
import Topbar from '~/components/Topbar'

export default {
  components: {
    Topbar
  },
  computed: {
    navItems() {
      const categories = this.$store.state.categories

      return categories.map(category => ({
        url: `/${category.slug}`,
        label: category.name
      }))
    }
  }
}
</script>
