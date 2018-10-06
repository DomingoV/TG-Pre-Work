fetch('https://api-to-call.com/endpoint', {
  method: 'POST',
  body: JSON.stringify({id: "200"})// I have '200' and errored
}).then(response => {
  if(response.ok){
	  return response.json();
  }
	throw new Error('Request failed!');
}, networkError => {
  console.log(networkError.message);
}).then(jsonResponse => {
  console.log(jsonResponse);
})
