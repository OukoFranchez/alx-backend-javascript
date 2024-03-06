// Define the getResponseFromAPI function
function getResponseFromAPI() {
  return new Promise((resolve) => {
    // Perform asynchronous operation (e.g., fetch data from API)
    // For demonstration, we're resolving with a sample response after a delay
    setTimeout(() => {
      const responseData = { message: 'Sample response from API' };
      resolve(responseData);
    }, 1000); // Simulating delay with setTimeout
  });
}

// Export the getResponseFromAPI function
export default getResponseFromAPI;
