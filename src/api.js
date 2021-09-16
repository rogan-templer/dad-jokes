import request from "superagent";

export function getDadJokes() {
  return request
    .get("https://icanhazdadjoke.com/")
    .set("Accept", "application/json")
    .then((response) => {
      // console.log('getDaJokes', response.body.joke);

      return response.body.joke;
    });
}

export function listDadJokes(number) {
  return request
    .get(`https://icanhazdadjoke.com/search?page=${number}/`)
    .set("Accept", "application/json")
    .then((response) => {
      

      return response.body.results;
    });
}


export function refreshPage() {
  window.location.reload();
}
