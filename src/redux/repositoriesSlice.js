import axios from 'axios';

const initialState = {
  loading: false,
  exploreRepos: [],
  error: null,
};

const FETCH_EXPLORE_REPOS_REQUEST = 'FETCH_EXPLORE_REPOS_REQUEST';
const FETCH_EXPLORE_REPOS_SUCCESS = 'FETCH_EXPLORE_REPOS_SUCCESS';
const FETCH_EXPLORE_REPOS_FAILURE = 'FETCH_EXPLORE_REPOS_FAILURE';

const repositoriesReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_EXPLORE_REPOS_REQUEST:
      return {...state, loading: true, error: null};
    case FETCH_EXPLORE_REPOS_SUCCESS:
      return {...state, loading: false, exploreRepos: action.payload};
    case FETCH_EXPLORE_REPOS_FAILURE:
      return {...state, loading: false, error: action.payload};
    default:
      return state;
  }
};

export default repositoriesReducer;

export const fetchRepos = (limit = 10, date = '', language = '') => {
  return async dispatch => {
    dispatch({type: FETCH_EXPLORE_REPOS_REQUEST});
    try {
      const query = `q=stars:>1${date && `created:>${date}+`}${
        language && `language:${language}&`
      }&sort=stars&order=desc${limit && `&per_page=${limit}`}`;
      console.log('query is ', query);
      const response = await axios.get(
        `https://api.github.com/search/repositories?${query}`,
      );
      dispatch({
        type: FETCH_EXPLORE_REPOS_SUCCESS,
        payload: response.data.items,
      });
      console.log('fetched');
    } catch (error) {
      console.log(error);
      dispatch({type: FETCH_EXPLORE_REPOS_FAILURE, payload: error.message});
    }
  };
};
