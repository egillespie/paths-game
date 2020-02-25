<template>
  <li class="file">
    <span v-if="children">📂</span>
    <span v-else>🗒️</span>
    <code>{{ name }}</code>
    <file-tree v-if="children" :files="children" />
  </li>
</template>

<script>
import FileTree from './file-tree'

export default {
  components: {
    FileTree
  },
  props: {
    name: {
      type: String,
      required: true
    },
    children: {
      type: Object,
      required: false,
      default: null
    }
  }
}
</script>

<style>
.file .file {
  border-left: 1px dotted lightgray;
  margin-left: .5rem;
  padding-left: 1rem;
}
</style>
