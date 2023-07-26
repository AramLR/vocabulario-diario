<script lang="ts">
  import {
    getRandomWord,
    getMeaning
  } from './lib/api'
</script>

{#await getRandomWord()}
  Cargando...
{:then word}
  {#await getMeaning(word)}
    Cargando...
  {:then meaning}
    {#if meaning.Error}
      <h1>
        No se encontró una
        traducción para
        esta palabra.
      </h1>
    {:else}
      <h1>{word}</h1>

      <p>
        {meaning.term0
          .PrincipalTranslations[
          '0'
        ].OriginalTerm
          .sense}
      </p>
    {/if}
  {/await}
{/await}
