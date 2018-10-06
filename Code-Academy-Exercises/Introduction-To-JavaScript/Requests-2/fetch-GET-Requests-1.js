//fetch() GET
fetch('http://api-to-call.com/endpoint'). then(response => {
  if(response.ok) {
    return respons.json();
  }
  throw new Error('Request failed!');
}, networkError _> console.log(networkError.message)
).then(jsonResponse => {
  // code to execute with jsonResponse
});
