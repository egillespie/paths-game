<template>
  <main class="p-4">
    <header>
      <h1 class="text-5xl text-center">
        Path Finder
      </h1>
    </header>
    <article>
      <figure>
        <figcaption>Project files</figcaption>
        <ProjectTree
          :project="game.scenarios[0].project"
          class="border border-solid border-blue-200 p-2"
        />
      </figure>
    </article>
  </main>
</template>

<script>
import ProjectTree from '~/components/ProjectTree'
import game from '~/game-data.json'

export default {
  components: {
    ProjectTree
  },
  data () {
    return {
      game
    }
  }
}
</script>

<style>
/* Sample `apply` at-rules with Tailwind CSS
.container {
  @apply min-h-screen flex justify-center items-center text-center mx-auto;
}
*/
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
