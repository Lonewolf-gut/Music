const MAX_RETRIES = 3;
const RETRY_DELAY = 1000;

const timeout = (ms) =>
  new Promise((_, reject) =>
    setTimeout(() => reject(new Error("Request timed out")), ms)
  );

export const searchTracks = async (query, retryCount = 0) => {
  try {
    //i am fetching the data here
    // The reason i use the thingproxy is because of CORS when dealing with complex API's
    const fetchPromise = fetch(
      `https://thingproxy.freeboard.io/fetch/https://api.deezer.com/search?q=${query}&limit=50`,
      {
        //the header type to define the data file to accept
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    const response = await Promise.race([fetchPromise, timeout(10000)]); // 10s timeout
    //conditional statement

    //if there is nothing wrong with the result it should store in a json format
    const data = await response.json();

    //logged this in my console to see the data gotten
    console.log(data);
    return {
      data: data.data || [],
      error: null,
    };
  } catch (error) {
    console.error("Error fetching tracks:", error);
    if (error.message.includes("timed out") && retryCount < MAX_RETRIES) {
      await new Promise((resolve) => setTimeout(resolve, RETRY_DELAY));
      return searchTracks(query, retryCount + 1);
    }
    return {
      data: [],
      error: error.message || "Failed to fetch tracks. Please try again later.",
    };
  }
};
