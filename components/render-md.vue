<template>
  <span class="md" v-html="asHtml" />
</template>

<script>
const markdownIt = require('markdown-it')({ html: true })

export default {
  props: {
    md: {
      type: String,
      required: true
    }
  },
  computed: {
    asHtml () {
      return markdownIt.renderInline(this.md)
    }
  }
}
</script>

<style>
.md code {
  @apply whitespace-no-wrap;
  @apply text-sm;
  @apply bg-gray-300;
  @apply p-1;
  @apply rounded-sm;
}

.md em {
  @apply font-semibold;
}
</style>
