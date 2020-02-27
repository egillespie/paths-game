<template>
  <li class="file leading-5">
    <span class="inline-block p-1 border border-transparent border-solid hover:border-blue-500 hover:cursor-pointer">
      <img v-if="children" src="@/assets/svg/folder-icon.svg" class="inline h-6 -mt-1">
      <img v-else src="@/assets/svg/file-icon.svg" class="inline h-6 -mt-1">
      <code class="inline">{{ name }}</code>
    </span>
    <file-tree v-if="children" :files="children" class="file-tree" />
  </li>
</template>

<script>
import FileTree from './file-tree'

export default {
  name: 'File',
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
  margin-left: .625rem;
}

.file-tree {
  border-left: 1px dotted lightgray;
  margin-left: 1rem;
}
</style>
