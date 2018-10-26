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
      return this.$store.state.navItems
    }
  }
}
</script>
