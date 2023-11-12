const API = `https://swapi.dev/api/people/`;

export const fetchPeopleBySearchTerm = async (
  searchTerm: string,
  currentPage: number
) => {
  try {
    const response = await fetch(
      `${API}?search=${searchTerm}&page=${currentPage}`,
      {
        method: 'GET',
      }
    );
    if (!response.ok) {
      throw new Error('Something bad happened');
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error:', error);
  }
};
