async funtion getData() {
  try {
    const resonse = await fetch('http://api-to-call.com/endpoint');
    if (response.ok) {
      const jsonResponse = await response.json();
      //code to execute
    }
    throw new Error('Request failed!');
  } catch (error) {
    console.log(error);
  }
}
