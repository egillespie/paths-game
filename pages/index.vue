<template>
  <main class="p-4">
    <header>
      <h1 class="text-5xl text-center">
        Path Finder
      </h1>
    </header>
    <article>
      <section class="mb-4">
        <h2 class="font-semibold">
          Site URL
        </h2>
        <code class="block border border-solid border-blue-200 p-2">
          {{ game.scenarios[0].siteUrl }}
        </code>
      </section>
      <section class="mb-4">
        <h2 class="font-semibold">
          Project files
        </h2>
        <file-tree
          :files="game.scenarios[0].project"
          class="border border-solid border-blue-200 p-2"
        />
      </section>
      <section class="mb-4">
        <h2 class="font-semibold">
          Question
        </h2>
        <form class="border border-solid border-blue-200 p-2">
          <label for="answer" class="italic">
            {{ game.scenarios[0].question }}
          </label>
          <input
            id="answer"
            type="text"
            :value="answer"
            class="inline-block w-full px-2 py-1 border border-solid border-gray-400 outline-none focus:border-blue-500"
            placeholder="Type your answer here"
          >
        </form>
      </section>
    </article>
  </main>
</template>

<script>
import FileTree from '~/components/file-tree'
import game from '~/game-data.json'

export default {
  components: {
    FileTree
  },
  data () {
    return {
      answer: '',
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
