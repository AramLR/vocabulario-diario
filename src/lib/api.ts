import { fetch } from '@tauri-apps/api/http'

// Function to get a random word from Wiktionary
async function getRandomWord() {
  const url =
    'https://es.wiktionary.org/w/api.php?action=query&list=random&rnnamespace=0&rnlimit=1&format=json'

  const res = (
    await fetch(url, {
      method: 'GET',
      timeout: 60
    })
  ).data

  const quote =
    res.query.random[0]
      .title

  return quote
}

export { getRandomWord }
