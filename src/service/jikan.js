const BASE_URL = 'https://api.jikan.moe/v4';

const getResource = async (resourceUrl) => {
  const response = await fetch(resourceUrl);
  if (!response.ok) {
    throw new Error('API Error');
  }

  return response.json();
};

const jikan = {
  searchAnime: (searchTerm) =>
    getResource(`${BASE_URL}/anime?q=${encodeURIComponent(searchTerm)}`)
};

export default jikan;