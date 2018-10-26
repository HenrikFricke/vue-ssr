<template>
  <div class="w-full lg:flex mb-8">
    <div
      :style="{ backgroundImage: teaserImageUrl }"
      class="h-48 lg:h-auto lg:w-48 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden"
    />
    <div class="border-r border-b border-l border-grey-light lg:border-l-0 lg:border-t lg:border-grey-light bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
      <div class="mb-8">
        <div class="text-black font-bold text-xl mb-2">
          {{ headline }}
        </div>
        <p class="text-grey-darker text-base">
          {{ teaser }}
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    headline: {
      type: String,
      required: true
    },
    teaser: {
      type: String,
      required: true
    },
    teaserImage: {
      type: String,
      required: true
    }
  },
  computed: {
    teaserImageUrl() {
      return `url(${this.$props.teaserImage})`
    }
  }
}
</script>
