<template>
  <li class="file leading-5">
    <img v-if="children" src="@/assets/svg/folder-icon.svg" class="inline h-5">
    <img v-else src="@/assets/svg/file-icon.svg" class="inline h-5">
    <code>{{ name }}</code>
    <file-tree v-if="children" :files="children" class="file-tree" />
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
  margin-left: .8rem;
}

.file-tree {
  border-left: 1px dotted lightgray;
  margin-left: .625rem;
}
</style>
