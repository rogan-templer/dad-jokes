import request from 'superagent'

export function getDadJokes() {
  return request.get('https://icanhazdadjoke.com/')
    .set('Accept', 'application/json')
    .then(response => {
      // console.log('getDaJokes', response.body.joke);
      
      return response.body.joke
})
}

export function searchDadJokes() {
  return request.get('https://icanhazdadjoke.com/search?=term')
  .set('Accept', 'application/json')
  .then(response => {
    console.log('searchDadJokes',response.body.results)
    return response.body.results
  })
}



export function refreshPage () {
  window.location.reload();
}