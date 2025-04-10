import { searchTracks } from "../utils/api";

const handleSearchError = async (query) => {
  const result = await searchTracks(query);
  if (!result.data || result.data.length === 0) {
    alert("No results found for this query.");
  }
  if (result.error) {
    alert(result.error);
  }
  return result;
};

export default handleSearchError;
