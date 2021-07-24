import actions from './actions'

const fetchMovies = async () => {
  //const response = await fetch('http://localhost:3000/movies', { method: 'GET' })
  //const json = await response.json()

  return {title: 'title'}
}

export const getToken = () =>
  async (dispatch) => {
    const movies = await fetchMovies()

    movies.map(movie => dispatch(actions.add(movie.title)))
  }