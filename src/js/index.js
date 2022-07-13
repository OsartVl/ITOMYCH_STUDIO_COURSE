const requestURL = 'https://jsonplaceholder.typicode.com/posts';

function sendRequest(method, url) {
  return fetch(url).then(response => {
   return response.json()
  })
}

sendRequest("GET", requestURL)
  .then(data => {
    console.log(data)
  })
  .catch(err => console.error(err))

