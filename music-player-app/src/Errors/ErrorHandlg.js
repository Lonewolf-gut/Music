// const searchTracks = async (query) => {
//     try {
//       const response = await fetch(`https://api.deezer.com/search?q=${query}`);
//       const data = await response.json();
//       if (!data.data || data.data.length === 0) {
//         alert("No results found for this query.");
//       }
//       return data;
//     } catch (error) {
//       console.error("Error fetching tracks", error);
//       alert("An error occurred while fetching the tracks.");
//     }
//   };
  