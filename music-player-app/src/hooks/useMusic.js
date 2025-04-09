

const searchTracks = async (query) => {
    try {
      const response = await fetch(`https://api.deezer.com/search?q=${query}`);
      const data = await response.json();
      return data;
    } catch (error) {
      console.error("Error fetching tracks", error);
    }
  };