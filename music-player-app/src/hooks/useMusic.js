import { searchTracks } from "../utils/api";

const useMusic = () => {
  const search = async (query) => {
    const result = await searchTracks(query);
    if (result.error) {
      console.error(result.error);
    }
    return result;
  };

  return { search };
};

export default useMusic;
