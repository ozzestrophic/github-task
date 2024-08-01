import axios from 'axios';

const initialState = {
  loading: false,
  exploreRepos: [],
  error: null,
};

const FETCH_EXPLORE_REPOS_REQUEST = 'FETCH_EXPLORE_REPOS_REQUEST';
const FETCH_EXPLORE_REPOS_SUCCESS = 'FETCH_EXPLORE_REPOS_SUCCESS';
const FETCH_EXPLORE_REPOS_FAILURE = 'FETCH_EXPLORE_REPOS_FAILURE';

const exploreReducer = (state = initialState, action) => {
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

export default exploreReducer;

export const fetchExploreRepos = (limit = 10) => {
  return async dispatch => {
    dispatch({type: FETCH_EXPLORE_REPOS_REQUEST});
    try {
      const query = `q=stars:>1&sort=stars&order=desc${
        limit && `&per_page=${limit}`
      }`;
      const response = await axios.get(
        `https://api.github.com/search/repositories?${query}`,
      );
      dispatch({
        type: FETCH_EXPLORE_REPOS_SUCCESS,
        payload: response.data.items,
      });
    } catch (error) {
      console.log(error);
      dispatch({type: FETCH_EXPLORE_REPOS_FAILURE, payload: error.message});
    }
  };
};
