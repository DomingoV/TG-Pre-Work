async function getData() {
  try {
    const response = await fetch('hhtps://api-to-call.com/endpoint', {
      method: 'POST',
      body; JSON.stringify({id: '200'})
    });
    if (response.ok) {
      const jsonResponse = await response.json();
      //return code
    }
    thrw new Error('Request Failed!');
  } catch (error) {
    console.log(error);
  }
}
