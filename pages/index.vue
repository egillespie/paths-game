<template>
  <main class="max-w-screen-md p-4 mx-auto">
    <header class="p-4 text-white bg-blue-800 shadow mb-4 text-center">
      <h1 class="text-4xl">
        Browsy Paths
      </h1>
      <small class="inline-block text-sm italic leading-tight">
        an interactive tutorial about making links on the Internet
      </small>
    </header>
    <article>
      <header>
        <h2 class="text-2xl text-center text-bold">
          Scenario {{ scenarioNumber }} of {{ scenarioTotal }}
        </h2>
      </header>
      <section class="mb-4">
        <h3 class="font-semibold">
          Site URL
        </h3>
        <code class="block bg-white border border-solid border-blue-200 p-2 shadow-sm">
          {{ scenario.siteUrl }}
        </code>
      </section>
      <section class="mb-4">
        <h3 class="font-semibold">
          Project files
        </h3>
        <file-tree
          :files="scenario.project"
          class="bg-white border border-solid border-blue-200 p-2 shadow-sm"
        />
      </section>
      <section class="mb-4">
        <h3 class="font-semibold">
          Question
        </h3>
        <form class="bg-white border border-solid border-blue-200 p-2 shadow-sm">
          <label for="answer" class="inline-block mb-2">
            <render-md :md="scenario.question" />
          </label>
          <input
            id="answer"
            type="text"
            :value="answer"
            class="inline-block bg-gray-100 w-full px-2 py-1 border border-solid border-gray-400 outline-none focus:border-blue-500 focus:bg-white"
            placeholder="Type your answer here"
          >
        </form>
      </section>
    </article>
  </main>
</template>

<script>
import RenderMd from '~/components/render-md'
import game from '~/game-data.json'

export default {
  components: {
    RenderMd
  },
  data () {
    return {
      answer: '',
      scenarioIndex: 0,
      game
    }
  },
  computed: {
    scenario () {
      return this.game.scenarios[this.scenarioIndex]
    },
    scenarioNumber () {
      return this.scenarioIndex + 1
    },
    scenarioTotal () {
      return this.game.scenarios.length
    }
  }
}
</script>

<style>
body {
  @apply bg-blue-100;
}
</style>
