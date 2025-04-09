export const searchTracks = async (query) => {
    try {
      const response = await fetch(`https://api.deezer.com/search?q=${query}&limit=50`);
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      return data; // Returns the data containing the tracks
    } catch (error) {
      console.error('Error fetching tracks:', error);
      return { data: [] }; // Return empty array in case of error
    }
  };
  