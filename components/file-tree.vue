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
export default {
  name: 'FileTree',
  props: {
    files: {
      type: Object,
      required: true
    }
  }
}
</script>
