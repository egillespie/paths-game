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
          <label for="answer" class="inline-block mb-1">
            <render-md :md="game.scenarios[0].question" />
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
import RenderMd from '~/components/render-md'
import mdToHtml from '~/helpers/md-to-html'
import game from '~/game-data.json'

export default {
  components: {
    FileTree,
    RenderMd
  },
  data () {
    return {
      answer: '',
      game
    }
  },
  methods: {
    toHtml (markdown) {
      return mdToHtml(markdown)
    }
  }
}
</script>
