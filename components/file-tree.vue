<template>
  <ol>
    <file
      v-for="(children, name) in files"
      :key="name"
      :name="name"
      :children="children"
    />
  </ol>
</template>

<script>
import File from './file'

export default {
  components: {
    File
  },
  props: {
    files: {
      type: Object,
      required: true
    }
  }
}
</script>
