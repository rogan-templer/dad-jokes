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

// export function nextPage() {
//   return request
//     .get(`https://icanhazdadjoke.com/search?page=/`)
//     .set("Accept", "application/json")
//     .then((response) => {
//       console.log("nextpage", response.body.current_page);

//       return response.body.page;
//     });
// }

export function refreshPage() {
  window.location.reload();
}
