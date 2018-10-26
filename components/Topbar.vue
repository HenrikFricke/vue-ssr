<template>
  <nav class="bg-grey-lighter text-black font-sans mb-8">
    <div class="max-w-xl mx-auto p-4 justify-between items-center flex">
      <span class="text-xl">
        Vue SSR
      </span>
      <ul class="list-reset">
        <li
          v-for="navItem in navItems"
          :key="navItem.url"
          class="inline-flex ml-4"
        >
          <a
            :href="navItem.url"
            class="no-underline text-red-dark hover:underline"
          >
            {{ navItem.label }}
          </a>
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
