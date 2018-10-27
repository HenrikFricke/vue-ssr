<template>
  <nav class="bg-grey-lighter text-black font-sans mb-8">
    <div class="max-w-xl mx-auto pt-4 pb-4 justify-between items-center flex">
      <nuxt-link
        to="/"
        class="no-underline text-black text-xl"
      >
        Vue SSR
      </nuxt-link>
      <ul class="list-reset">
        <li
          v-for="navItem in navItems"
          :key="navItem.url"
          class="inline-flex ml-4"
        >
          <nuxt-link
            :to="navItem.url"
            class="no-underline text-red-dark hover:underline"
          >
            {{ navItem.label }}
          </nuxt-link>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
export default {
  props: {
    navItems: {
      type: Array,
      default: () => []
    }
  }
}
</script>
