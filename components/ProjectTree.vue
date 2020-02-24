<template>
  <ol>
    <li v-for="(children, filename) in project" :key="filename">
      <span v-if="children">📂</span>
      <span v-else>🗒️</span>
      <code>{{ filename }}</code>
    </li>
  </ol>
</template>

<script>
export default {
  props: {
    project: {
      type: Object,
      required: true
    }
  }
}
</script>
