<script lang="ts">
  import {
    getRandomWord,
    getMeaning
  } from './lib/api'
  import Loading from './lib/components/Loading.svelte'
</script>

<svelte:head>
  <link
    rel="preconnect"
    href="https://fonts.googleapis.com"
  />
  <link
    rel="preconnect"
    href="https://fonts.gstatic.com"
    crossOrigin=""
  />
  <link
    href="https://fonts.googleapis.com/css2?family=Roboto&display=swap"
    rel="stylesheet"
  />
</svelte:head>

<section class="container">
  {#await getRandomWord()}
    <Loading />
  {:then word}
    {#await getMeaning(word)}
      <Loading />
    {:then meaning}
      {#if meaning.Error}
        <section
          class="error-section"
        >
          <p class="error">
            No se encontró
            una traducción
            para esta
            palabra.
          </p>

          <button
            on:click={() =>
              window.location.reload()}
            >Recargar</button
          >
        </section>
      {:else}
        <section
          class="result"
        >
          <h1>{word}</h1>

          <p>
            {meaning.term0
              .PrincipalTranslations[
              '0'
            ].OriginalTerm
              .sense}
          </p>

          <button
            on:click={() =>
              window.location.reload()}
            >Recargar</button
          >
        </section>
      {/if}
    {/await}
  {/await}
</section>

<style>
  .container {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
  }

  .error-section {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  .error {
    color: #c0392b;
  }

  button {
    background-color: transparent;
    height: 100%;
    width: 80%;
    padding: 10px;
    letter-spacing: 5px;
    border: 1px solid #000;
    border-radius: 5px;
    font-weight: bold;
  }

  .result {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  h1 {
    font-size: 2em;
    font-weight: 1000;
  }
</style>
