const API = `https://swapi.dev/api/people/`;

export const fetchPeople = async () => {
  try {
    const response = await fetch(API, {
      method: 'GET',
    });
    if (!response.ok) {
      throw new Error('Something bad happened');
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error:', error);
  }
};

export const fetchPeopleBySearchTerm = async (
  searchTerm: string,
  pageNumber = 1
) => {
  try {
    const response = await fetch(
      `${API}?search=${searchTerm}&page=${pageNumber}`,
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
