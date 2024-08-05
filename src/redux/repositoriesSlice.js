import axios from 'axios';

const initialState = {
  loading: false,
  repos: [],
  error: null,
};

const FETCH_REPOS_REQUEST = 'FETCH_REPOS_REQUEST';
const FETCH_REPOS_SUCCESS = 'FETCH_REPOS_SUCCESS';
const FETCH_REPOS_FAILURE = 'FETCH_REPOS_FAILURE';

const repositoriesReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_REPOS_REQUEST:
      return {...state, loading: true, error: null};
    case FETCH_REPOS_SUCCESS:
      return {...state, loading: false, repos: action.payload};
    case FETCH_REPOS_FAILURE:
      return {...state, loading: false, error: action.payload};
    default:
      return state;
  }
};

export default repositoriesReducer;

export const fetchRepos = (
  limit = 10,
  date = '2019-01-10',
  language = 'Javascript',
) => {
  const languageEncoded = encodeURIComponent(language);
  return async dispatch => {
    dispatch({type: FETCH_REPOS_REQUEST});
    try {
      const query = `q=stars:%3E1${date && `+created:%3E${date}`}${
        languageEncoded && `+language:${languageEncoded}`
      }&sort=stars&order=desc${limit && `&per_page=${limit}`}`;
      console.log(query);
      const response = await axios.get(
        `https://api.github.com/search/repositories?${query}`,
      );
      dispatch({
        type: FETCH_REPOS_SUCCESS,
        payload: response.data.items,
      });
    } catch (error) {
      console.log(error);
      dispatch({type: FETCH_REPOS_FAILURE, payload: error.message});
    }
  };
};
