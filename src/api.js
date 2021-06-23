import request from 'superagent'

export function getDadJokes() {
  return request.get('https://icanhazdadjoke.com/')
    .set('Accept', 'application/json')
    .then(response => {
      return response.body.joke
})
}


export function refreshPage () {
  window.location.reload();
}